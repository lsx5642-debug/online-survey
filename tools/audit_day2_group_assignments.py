#!/usr/bin/env python3
"""Audit Yahoo task group, randomized assignment, and DataPipe group_id without deleting records."""
import argparse,csv,json,sys
from collections import Counter,defaultdict
from pathlib import Path
sys.path.insert(0,str(Path(__file__).resolve().parent))
from yahoo_datapipe_linker import read_tsv,read_json_folder

def main():
    ap=argparse.ArgumentParser();ap.add_argument("--assignments",required=True);ap.add_argument("--day2-json",required=True);ap.add_argument("--yahoo",action="append",required=True,help="G1=task_export.tsv (repeat for G1-G4)");ap.add_argument("--output",required=True);a=ap.parse_args()
    with Path(a.assignments).open(encoding="utf-8-sig",newline="") as f: assigned={r["member_id"]:r["group_id"] for r in csv.DictReader(f)}
    yahoo=[]
    for spec in a.yahoo:
        gid,path=spec.split("=",1)
        if gid not in {"G1","G2","G3","G4"}:raise ValueError(spec)
        yahoo.extend({**r,"yahoo_task_group":gid} for r in read_tsv(Path(path)))
    data,errors=read_json_folder(Path(a.day2_json));completed=[r for r in data if r.get("record_type")=="day2_completed" or r.get("completion_status")=="day2_completed"]
    by_uid=defaultdict(list)
    for r in completed:by_uid[str(r.get("user_id","")).strip()].append(r)
    issues=[];matched=[]
    for y in yahoo:
        uid=y["submitted_user_id"];ds=by_uid.get(uid,[]);expected=assigned.get(y["member_id"],"")
        if not expected:issues.append({"issue":"member_not_in_assignment",**y});continue
        if expected!=y["yahoo_task_group"]:issues.append({"issue":"wrong_yahoo_task_group","expected_group":expected,**y})
        if len(ds)!=1:issues.append({"issue":"datapipe_match_count","expected_group":expected,"datapipe_count":len(ds),**y});continue
        actual=str(ds[0].get("group_id",f"G{ds[0].get('group','')}"))
        if actual!=expected:issues.append({"issue":"datapipe_group_mismatch","expected_group":expected,"actual_group":actual,**y})
        else:matched.append({"member_id":y["member_id"],"user_id":uid,"group_id":actual})
    member_counts=Counter(x["member_id"] for x in yahoo)
    issues.extend({"issue":"cross_task_duplicate_member","member_id":m,"count":n} for m,n in member_counts.items() if n>1)
    report={"matched_count":len(matched),"issue_count":len(issues),"matched":matched,"issues":issues,"json_errors":errors,"note":"Issues are reported for manual review; no record is deleted or force-matched."}
    Path(a.output).write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding="utf-8");print(json.dumps({"matched":len(matched),"issues":len(issues),"output":a.output},ensure_ascii=False))
if __name__=="__main__":main()
