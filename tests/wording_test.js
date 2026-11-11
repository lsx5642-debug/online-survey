const fs=require("fs"),assert=require("assert");
const js=fs.readFileSync("ESG_two_stage_survey.js","utf8"),css=fs.readFileSync("ESG_two_stage_survey.css","utf8");
for(const text of [
  "本研究では、アンケートを2回実施します。",
  "今回は、ESG・GRIに関する知識や投資経験、年齢・性別などについてお伺いします。",
  "第2回への参加は任意です。",
  "以上で今回の質問は終了です。",
  "以下のユーザーIDをコピーし、Yahoo!クラウドソーシングの「ユーザーIDの入力」欄に貼り付けてください。",
  "送信中…"
]) assert(js.includes(text),text);
for(const obsolete of ["本研究のアンケートは、2回に分けて実施します。","Day 2専用ユーザーID","回答をDataPipeへ送信します","DataPipeが回答を受け付けた後"]) assert(!js.includes(obsolete),obsolete);
assert(css.includes(".participant-info{text-align:center}"));
console.log("PASS: participant wording, obsolete-term removal and centered information pages verified.");
