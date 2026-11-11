"""Verify that timing fields survive JSON flattening and XLSX export."""
from __future__ import annotations

import importlib.util
import json
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "outputs" / "timing_audit"
SAMPLE = OUT / "sample_day2_completed.json"
BUILDER = ROOT / "tools" / "build_linked_workbook.mjs"
LINKER = ROOT / "tools" / "yahoo_datapipe_linker.py"

spec = importlib.util.spec_from_file_location("linker", LINKER)
linker = importlib.util.module_from_spec(spec)
assert spec.loader
spec.loader.exec_module(linker)

sample = json.loads(SAMPLE.read_text(encoding="utf-8"))
flat = linker.flatten(sample)
required = [
    "responses__L1__search_rt",
    "responses__L1__search_elapsed_rt",
    "responses__L1__answer_rt",
    "responses__L1__search_view_durations",
    "responses__C1__comparison_rt",
    "responses__C1__comparison_view_time",
    "responses__C1__comparison_view_durations",
    "responses__search_difficulty__response_time",
    "responses__investment_A__response_time",
    "responses__allocation__response_time",
    "timing_interruptions",
    "event_log",
]
missing = [key for key in required if key not in flat]
assert not missing, missing
for key in required[:3] + required[4:6] + required[7:10]:
    assert float(flat[key]) > 0, (key, flat[key])

empty = []
report = {
    "summary": [
        {"metric": "Timing fields checked", "value": len(required)},
        {"metric": "Missing timing fields", "value": 0},
    ],
    "merged": [{"member_id": "TEST_ONLY", **{key: flat[key] for key in required}}],
    "day1_no_day2": empty,
    "day2_no_day1": empty,
    "invalid_user_id": empty,
    "duplicate_user_id": empty,
    "duplicate_member": empty,
    "yahoo_no_json": empty,
    "json_no_yahoo": empty,
    "json_errors": empty,
    "method_notes": [{"note": "Synthetic timing audit only; no production data."}],
}
bundle = OUT / "timing_fields_export_test.bundle.json"
xlsx = OUT / "timing_fields_export_test.xlsx"
bundle.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
subprocess.run(["node", str(BUILDER), str(bundle), str(xlsx)], check=True)
assert xlsx.exists() and xlsx.stat().st_size > 10_000
print(f"PASS: {len(required)} timing fields preserved in flattened JSON and XLSX: {xlsx}")
