#!/usr/bin/env python3
"""Match valid Day 1 completions, reproducibly assign G1-G4, and fill Yahoo whitelist templates.

The Yahoo requester UI's downloaded whitelist template is required deliberately:
the public Yahoo documentation confirms the whitelist feature but does not publish
a stable import schema. This script therefore never guesses the production header,
delimiter, or column order.
"""
from __future__ import annotations
import argparse,csv,hashlib,json,random,sys
from collections import Counter
from pathlib import Path

sys.path.insert(0,str(Path(__file__).resolve().parent))
from yahoo_datapipe_linker import stage

def dialect_and_rows(path:Path):
    raw=path.read_text(encoding="utf-8-sig")
    delimiter="\t" if raw.splitlines() and raw.splitlines()[0].count("\t")>raw.splitlines()[0].count(",") else ","
    rows=list(csv.reader(raw.splitlines(),delimiter=delimiter))
    if not rows: raise ValueError("Yahoo whitelist template is empty")
    return delimiter,rows

def resolve_member_column(header,requested):
    if requested:
        if requested not in header: raise ValueError(f"member column not found: {requested!r}; headers={header}")
        return header.index(requested)
    candidates=[i for i,x in enumerate(header) if x.strip().lower() in {"会員id","yahoo! japan id","yahoo会員id","member_id"}]
    if len(candidates)!=1: raise ValueError(f"Cannot safely identify member ID column. Pass --member-column using the exact Yahoo template header. headers={header}")
    return candidates[0]

def write_whitelist(template:Path,output:Path,members,member_column):
    delimiter,rows=dialect_and_rows(template);header=rows[0];idx=resolve_member_column(header,member_column)
    base=rows[1] if len(rows)>1 else [""]*len(header);base=(base+[""]*len(header))[:len(header)]
    output.parent.mkdir(parents=True,exist_ok=True)
    with output.open("w",encoding="utf-8-sig",newline="") as f:
        w=csv.writer(f,delimiter=delimiter,lineterminator="\n");w.writerow(header)
        for member in members:
            row=list(base);row[idx]=member;w.writerow(row)
    return {"delimiter":"tab" if delimiter=="\t" else "comma","headers":header,"member_column":header[idx]}

def main():
    ap=argparse.ArgumentParser()
    ap.add_argument("--day1-yahoo",required=True);ap.add_argument("--day1-json",required=True)
    ap.add_argument("--whitelist-template",required=True,help="Unmodified template downloaded from the current Yahoo requester whitelist screen")
    ap.add_argument("--member-column",default="",help="Exact member ID header when automatic detection is ambiguous")
    ap.add_argument("--seed",type=int,required=True);ap.add_argument("--output-dir",required=True)
    a=ap.parse_args();out=Path(a.output_dir);out.mkdir(parents=True,exist_ok=True)
    matched=stage("Day 1",Path(a.day1_yahoo),Path(a.day1_json));member_counts=Counter(x["member_id"] for x in matched["matches"])
    eligible=sorted(m for m,n in member_counts.items() if n==1);rng=random.Random(a.seed);rng.shuffle(eligible)
    groups={f"G{i}":[] for i in range(1,5)}
    for i,member in enumerate(eligible):groups[f"G{i%4+1}"].append(member)
    all_assigned=[m for members in groups.values() for m in members]
    if len(all_assigned)!=len(set(all_assigned)):raise RuntimeError("A member was assigned to more than one group")
    template=Path(a.whitelist_template);suffix=template.suffix or ".csv";formats={}
    for gid,members in groups.items():formats[gid]=write_whitelist(template,out/f"{gid}_yahoo_whitelist{suffix}",members,a.member_column)
    with (out/"day2_group_assignments.csv").open("w",encoding="utf-8-sig",newline="") as f:
        w=csv.writer(f);w.writerow(["member_id","group_id","fixed_link_file","random_seed"])
        for gid in groups:
            for member in groups[gid]:w.writerow([member,gid,f"day2-{gid.lower()}.html",a.seed])
    report={"random_seed":a.seed,"eligible_count":len(eligible),"target_400_reached":len(eligible)>=400,"group_counts":{g:len(v) for g,v in groups.items()},"unique_assigned":len(set(all_assigned)),"template_sha256":hashlib.sha256(template.read_bytes()).hexdigest(),"template_formats":formats,"day1_match_counts":matched["counts"],"invalid_user_id":matched["invalid"],"duplicate_user_id":matched["duplicate_user_id"],"duplicate_member":matched["duplicate_member"],"yahoo_no_json":matched["yahoo_no_json"],"json_no_yahoo":matched["json_no_yahoo"],"json_errors":matched["json_errors"],"notes":["Group assignment is balanced over verified Day 1 matches only.","Public GitHub URLs are not access control; compare Yahoo member assignment with the Day 2 JSON group_id after collection.","A target assignment of 100 does not guarantee 100 valid completions."]}
    (out/"assignment_report.json").write_text(json.dumps(report,ensure_ascii=False,indent=2),encoding="utf-8")
    print(json.dumps({"output_dir":str(out),"seed":a.seed,"eligible":len(eligible),"group_counts":report["group_counts"]},ensure_ascii=False))

if __name__=="__main__":main()
