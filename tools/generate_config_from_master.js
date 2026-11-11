const fs=require("fs"),crypto=require("crypto");
const input=process.argv[2],output=process.argv[3];
if(!input||!output)throw new Error("usage: node generate_config_from_master.js input.json output.js");
const raw=fs.readFileSync(input,"utf8"),cfg=JSON.parse(raw);
if(cfg.metrics.length!==12||Object.keys(cfg.groups).length!==4)throw new Error("master config must contain 12 metrics and 4 groups");
const hash=crypto.createHash("sha256").update(Buffer.from(raw,"utf8")).digest("hex");
cfg.masterConfigHash=hash;
fs.writeFileSync(output,`/* AUTO-GENERATED from PsychoPy master; do not edit. sha256=${hash} */\nwindow.ESG_TWO_STAGE_CONFIG=${JSON.stringify(cfg,null,2)};\n`,`utf8`);
console.log(`Generated ${output} from PsychoPy master (${hash})`);
