/* Verify generated web runtime fallback remains consistent after rebuild. */
const fs=require('fs'),assert=require('assert'),path=require('path'),vm=require('vm');
const root=path.resolve(__dirname,'..');
const load=p=>fs.readFileSync(path.join(root,p),'utf8');
const runtime=JSON.parse(load('shared/web_runtime_config.json'));
assert.equal(runtime.defaultDataPipeExperimentId,'iW2hkdaVf5pA');
const sandbox={window:{}};
vm.createContext(sandbox);vm.runInContext(load('ESG_two_stage_config.js'),sandbox);
assert.equal(sandbox.window.ESG_WEB_RUNTIME_CONFIG.defaultDataPipeExperimentId,runtime.defaultDataPipeExperimentId);
const survey=load('ESG_two_stage_survey.js');
assert(survey.includes('P.get("datapipe_experiment_id")'));
assert(survey.includes('window.ESG_WEB_RUNTIME_CONFIG?.defaultDataPipeExperimentId'));
const calc=query=>(new URLSearchParams(query).get('datapipe_experiment_id')||'').trim()||String(runtime.defaultDataPipeExperimentId||'').trim();
assert.equal(calc(''), 'iW2hkdaVf5pA');
assert.equal(calc('?datapipe_experiment_id='), 'iW2hkdaVf5pA');
assert.equal(calc('?datapipe_experiment_id=test-project'), 'test-project');
for(const file of ['day1.html','index.html','day2.html','day2-g1.html','day2-g2.html','day2-g3.html','day2-g4.html']){
 const s=load(file);assert(s.includes('ESG_two_stage_config.js?v=20261112-datapipe-fallback-v1'),file);
}
assert(load('psychojs/psychopy_web_adapter.js').includes('ESG_two_stage_survey.js?v=20261112-datapipe-fallback-v1'));
const builder=load('psychojs/ESG_two_stage_master.js');
assert(builder.includes(sandbox.window.ESG_TWO_STAGE_CONFIG.masterConfigHash),'PsychoJS master config hash mismatch');
console.log('PASS: default DataPipe experiment ID, URL override, script cache versions, PsychoJS master hash.');
