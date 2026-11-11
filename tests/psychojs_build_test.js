const {chromium}=require("playwright"),assert=require("assert"),cp=require("child_process"),path=require("path");
const root=path.resolve(__dirname,"..");
(async()=>{
 const server=cp.spawn("python",["-m","http.server","8771"],{cwd:root,stdio:"ignore"});await new Promise(r=>setTimeout(r,900));
 const browser=await chromium.launch({headless:true,executablePath:"C:/Users/吕/AppData/Local/Google/Chrome/Application/chrome.exe"});
 for(let group=1;group<=4;group++){
  const p=await browser.newPage({viewport:group===4?{width:390,height:844}:{width:1280,height:720}});let records=[];p.on("pageerror",e=>console.error("PAGEERROR",e));
  await p.route("https://pipe.jspsych.org/api/condition/",r=>r.fulfill({status:200,contentType:"application/json",body:JSON.stringify({condition:group-1})}));
  await p.route("https://pipe.jspsych.org/api/data/",async r=>{records.push(JSON.parse(r.request().postData()));await r.fulfill({status:201,contentType:"application/json",body:"{}"})});
  await p.goto("http://127.0.0.1:8771/day2.html?datapipe_experiment_id=build-test",{waitUntil:"networkidle"});
  await p.waitForSelector("h1:text-is('実験について')");
  assert.equal(await p.locator("#root").getAttribute("hidden"),"");
  assert.equal(await p.evaluate(()=>window.ESG_PSYCHOPY_BUILD.source),"ESG_two_stage_master.psyexp");
  assert.equal(await p.evaluate(()=>window.ESG_PSYCHOPY_BUILD.configHash===window.ESG_TWO_STAGE_CONFIG.masterConfigHash),true);
  await p.click("#start");await p.click("#next");await p.click("#next");await p.locator('[name=check1]').first().check();await p.locator('[name=check2]').first().check();await p.click("#next");
  for(let i=0;i<4;i++){await p.click("#open");assert.equal(await p.locator(".modal .company-card").count(),2);let names=await p.locator(".modal .company-card h3").allInnerTexts();assert.equal(names[0].includes(group%2?"A":"B"),true);await p.click("#close");await p.fill("#searchValue","1");await p.click("#found")}
  for(let i=0;i<4;i++){await p.click("#open");assert.equal(await p.locator(".modal .company-card").count(),2);await p.click("#close");await p.locator('[name=compare]').first().check();await p.click("#next")}
  for(let i=0;i<4;i++){await p.locator("#range").evaluate(e=>{e.value="50";e.dispatchEvent(new Event("input",{bubbles:true}))});await p.click("#next")}
  await p.fill("#a","60");await p.click("#next");await p.click("#send");await p.waitForSelector("h1:text-is('回答が完了しました')");
  assert(/^P-[A-Z2-9]{12}$/.test((await p.locator(".credential .code").first().innerText()).trim()));assert(records.length>=2);await p.close();
 }
 await browser.close();server.kill();console.log("PASS: Builder-generated PsychoJS bootstrap, hash gate, groups 1-4, dual tables, answers and DataPipe adapter.");
})().catch(e=>{console.error(e);process.exit(1)});
