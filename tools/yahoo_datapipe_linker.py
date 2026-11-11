#!/usr/bin/env python3
"""Link Day 1 and Day 2 Yahoo task exports to DataPipe JSON by submitted user_id.

No source file is modified. Ambiguous, duplicate and invalid records are reported,
never silently deleted or force-matched.
"""
from __future__ import annotations
import argparse,csv,json,re,subprocess,sys
from collections import Counter,defaultdict
from pathlib import Path

USER_ID_RE=re.compile(r"^P-[A-Z0-9]{12}$")
MEMBER_RE=re.compile(r"^[0-9]{6,20}$")

def read_tsv(path:Path):
    rows=[]
    with path.open("r",encoding="utf-8-sig",newline="") as f:
        for line_no,row in enumerate(csv.reader(f,delimiter="\t"),1):
            cells=[x.strip() for x in row]
            nonempty=[x for x in cells if x]
            member=next((x for x in reversed(nonempty) if MEMBER_RE.fullmatch(x)),"")
            title=next((x for x in cells if re.sub(r"\s+","",x)=="ユーザーIDの入力"),"")
            if not title or not member: continue
            member_idx=max(i for i,x in enumerate(cells) if x==member)
            candidates=[x for x in cells[:member_idx] if x and x!=title and "ユーザーID" not in x and "Yahoo!" not in x]
            answer=candidates[-1] if candidates else ""
            rows.append({"source_file":str(path),"line":line_no,"member_id":member,"submitted_user_id":answer})
    return rows

def unwrap_json(obj):
    if isinstance(obj,dict) and isinstance(obj.get("data"),str):
        try:return json.loads(obj["data"])
        except Exception:return obj
    return obj

def read_json_folder(folder:Path):
    records=[]; errors=[]
    for path in sorted(folder.rglob("*.json")):
        try:
            obj=unwrap_json(json.loads(path.read_text(encoding="utf-8-sig")))
            if not isinstance(obj,dict): raise ValueError("JSON root is not an object")
            obj=dict(obj);obj["_source_file"]=str(path);records.append(obj)
        except Exception as e: errors.append({"source_file":str(path),"error":str(e)})
    return records,errors

def flatten(obj,prefix=""):
    out={}
    for k,v in obj.items():
        key=f"{prefix}{k}"
        if isinstance(v,dict):out.update(flatten(v,key+"__"))
        elif isinstance(v,list):out[key]=json.dumps(v,ensure_ascii=False)
        else:out[key]=v
    return out

def index_unique(items,key):
    groups=defaultdict(list)
    for x in items: groups[str(x.get(key,"")).strip()].append(x)
    return groups

def stage(stage_name,tsv,json_dir):
    yahoo=read_tsv(tsv); all_data,json_errors=read_json_folder(json_dir)
    def completed(r):
        rt=str(r.get("record_type","")).lower();status=str(r.get("completion_status","")).lower()
        return rt in {"day1_completed","day2_completed"} or status in {"completed","day1_completed","day2_completed"}
    data=[r for r in all_data if completed(r)]
    invalid=[]
    for r in yahoo:
        if not USER_ID_RE.fullmatch(r["submitted_user_id"]):invalid.append({"stage":stage_name,"source":"Yahoo","value":r["submitted_user_id"],**r})
    for r in data:
        uid=str(r.get("user_id","")).strip()
        if not USER_ID_RE.fullmatch(uid):invalid.append({"stage":stage_name,"source":"DataPipe","value":uid,"source_file":r.get("_source_file","")})
    yg=index_unique(yahoo,"submitted_user_id"); dg=index_unique(data,"user_id")
    valid_ids={x for x in yg if USER_ID_RE.fullmatch(x)}|{x for x in dg if USER_ID_RE.fullmatch(x)}
    matches=[];y_no=[];d_no=[]
    for uid in sorted(valid_ids):
        ys=yg.get(uid,[]);ds=dg.get(uid,[])
        if len(ys)==1 and len(ds)==1:matches.append({"member_id":ys[0]["member_id"],"user_id":uid,"yahoo":ys[0],"data":ds[0]})
        elif ys and not ds:y_no.extend({"stage":stage_name,**x} for x in ys)
        elif ds and not ys:d_no.extend({"stage":stage_name,"user_id":uid,"source_file":x.get("_source_file","")} for x in ds)
    dup_uid=[]
    for uid,vals in yg.items():
        if uid and len(vals)>1:dup_uid.append({"stage":stage_name,"source":"Yahoo","user_id":uid,"count":len(vals)})
    for uid,vals in dg.items():
        if uid and len(vals)>1:dup_uid.append({"stage":stage_name,"source":"DataPipe","user_id":uid,"count":len(vals)})
    member_counts=Counter(x["member_id"] for x in yahoo)
    dup_member=[{"stage":stage_name,"member_id":m,"count":n} for m,n in member_counts.items() if n>1]
    return {"matches":matches,"invalid":invalid,"duplicate_user_id":dup_uid,"duplicate_member":dup_member,"yahoo_no_json":y_no,"json_no_yahoo":d_no,"json_errors":json_errors,"counts":{"yahoo":len(yahoo),"json":len(data),"matched":len(matches)}}

def merge(d1,d2):
    g1=index_unique(d1["matches"],"member_id");g2=index_unique(d2["matches"],"member_id")
    members=sorted(set(g1)|set(g2)); merged=[];only1=[];only2=[];dup=[]
    for member in members:
        a=g1.get(member,[]);b=g2.get(member,[])
        if len(a)>1 or len(b)>1:
            dup.append({"member_id":member,"day1_count":len(a),"day2_count":len(b)});continue
        if a and b:
            row={"member_id":member,"day1_user_id":a[0]["user_id"],"day2_user_id":b[0]["user_id"]}
            row.update({"day1__"+k:v for k,v in flatten(a[0]["data"]).items() if k!="_source_file"})
            row.update({"day2__"+k:v for k,v in flatten(b[0]["data"]).items() if k!="_source_file"})
            merged.append(row)
        elif a:only1.append({"member_id":member,"day1_user_id":a[0]["user_id"]})
        else:only2.append({"member_id":member,"day2_user_id":b[0]["user_id"]})
    return merged,only1,only2,dup

def main():
    ap=argparse.ArgumentParser()
    for name in ["day1-yahoo","day1-json","day2-yahoo","day2-json","output"]:ap.add_argument("--"+name,required=True)
    ap.add_argument("--builder",default=str(Path(__file__).with_name("build_linked_workbook.mjs")))
    args=ap.parse_args();d1=stage("Day 1",Path(args.day1_yahoo),Path(args.day1_json));d2=stage("Day 2",Path(args.day2_yahoo),Path(args.day2_json));merged,only1,only2,crossdup=merge(d1,d2)
    total=len(merged)+len(only1);nonparticipation=(len(only1)/total if total else None)
    report={"summary":[{"metric":"Day 1 Yahoo records","value":d1["counts"]["yahoo"]},{"metric":"Day 1 matched","value":d1["counts"]["matched"]},{"metric":"Day 2 Yahoo records","value":d2["counts"]["yahoo"]},{"metric":"Day 2 matched","value":d2["counts"]["matched"]},{"metric":"Two-stage merged","value":len(merged)},{"metric":"Day 1 completed without matched Day 2","value":len(only1)},{"metric":"Day 2 non-participation rate among matched Day 1","value":nonparticipation},{"metric":"Day 2 records without matched Day 1","value":len(only2)}],"merged":merged,"day1_no_day2":only1,"day2_no_day1":only2,"invalid_user_id":d1["invalid"]+d2["invalid"],"duplicate_user_id":d1["duplicate_user_id"]+d2["duplicate_user_id"],"duplicate_member":d1["duplicate_member"]+d2["duplicate_member"]+crossdup,"yahoo_no_json":d1["yahoo_no_json"]+d2["yahoo_no_json"],"json_no_yahoo":d1["json_no_yahoo"]+d2["json_no_yahoo"],"json_errors":[{"stage":"Day 1",**x} for x in d1["json_errors"]]+[{"stage":"Day 2",**x} for x in d2["json_errors"]],"method_notes":[{"note":"Records are matched only when both Yahoo and DataPipe contain exactly one identical valid user_id."},{"note":"No ambiguous or duplicate record is force-matched or deleted."},{"note":"member_id is sensitive linkage data and must not be published or included in shared research data."},{"note":"Day 2 non-participation means no valid completed Day 2 match; it does not prove the task was never opened."},{"note":"A Day 2 starter who never submits a Yahoo user_id cannot be linked to a Yahoo member without additional authentication."}]}
    out=Path(args.output);out.parent.mkdir(parents=True,exist_ok=True);bundle=out.with_suffix(".bundle.json");bundle.write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding="utf-8")
    subprocess.run(["node",args.builder,str(bundle),str(out)],check=True)
    print(json.dumps({"output":str(out),"bundle":str(bundle),"merged":len(merged),"day1_no_day2":len(only1),"day2_no_day1":len(only2),"invalid":len(report["invalid_user_id"])},ensure_ascii=False))
if __name__=="__main__":main()
