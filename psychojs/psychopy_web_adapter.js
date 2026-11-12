/* Generated-site adapter. Core materials come from ESG_two_stage_master.psyexp
 * and shared/esg_experiment_config.json. DataPipe/Yahoo remain web-only. */
(function(){
  "use strict";
  // Builder ends its launch scheduler after hand-off. Suppress its local CSV
  // download because participant data is saved by the DataPipe web adapter.
  window.ESG_WEB_ADAPTER_ACTIVE=true;
  let started=false;
  window.addEventListener("esg-psychopy-ready",function(event){
    if(started)return; started=true;
    window.ESG_PSYCHOPY_BUILD=event.detail||{};
    if(!window.ESG_TWO_STAGE_CONFIG||window.ESG_TWO_STAGE_CONFIG.masterConfigHash!==window.ESG_PSYCHOPY_BUILD.configHash){
      document.getElementById("app").innerHTML='<section class="card"><p class="error">実験設定の整合性を確認できませんでした。ページを再読み込みしてください。</p></section>';return;
    }
    const root=document.getElementById("root"); if(root)root.hidden=true;
    const script=document.createElement("script");
    script.src="ESG_two_stage_survey.js?v=20261112-fixed-groups-v1";
    script.onerror=function(){document.getElementById("app").innerHTML='<section class="card"><p class="error">実験プログラムを読み込めませんでした。ページを再読み込みしてください。</p></section>'};
    document.body.appendChild(script);
  },{once:true});
})();
