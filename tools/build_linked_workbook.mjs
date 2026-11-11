import fs from "node:fs/promises";
import {SpreadsheetFile,Workbook} from "@oai/artifact-tool";
const [bundlePath,outputPath]=process.argv.slice(2);if(!bundlePath||!outputPath)throw Error("Usage: node build_linked_workbook.mjs bundle.json output.xlsx");
const data=JSON.parse(await fs.readFile(bundlePath,"utf8")),wb=Workbook.create(),font="Arial";
const defs=[
 ["Summary",data.summary],["Merged",data.merged],["Day1_no_Day2",data.day1_no_day2],["Day2_no_Day1",data.day2_no_day1],
 ["Invalid_ID",data.invalid_user_id],["Duplicate_user_id",data.duplicate_user_id],["Duplicate_member",data.duplicate_member],
 ["Yahoo_no_JSON",data.yahoo_no_json],["JSON_no_Yahoo",data.json_no_yahoo],["JSON_errors",data.json_errors],["Method_notes",data.method_notes]
];
function scalar(v){if(v===null||v===undefined)return "";if(typeof v==="object")return JSON.stringify(v);return v}
for(const [name,rows] of defs){
 const sh=wb.worksheets.add(name),arr=Array.isArray(rows)?rows:[];sh.showGridlines=false;
 const headers=[...new Set(arr.flatMap(r=>Object.keys(r)))];
 sh.getRange("A1").values=[[name.replaceAll("_"," ")]];sh.getRange("A1").format.font={name:font,size:14,bold:true,color:"#17365D"};
 if(!headers.length){sh.getRange("A3").values=[["No records"]];continue}
 sh.getRangeByIndexes(2,0,1,headers.length).values=[headers];
 sh.getRangeByIndexes(2,0,1,headers.length).format={fill:"#305F8F",font:{name:font,size:10,bold:true,color:"#FFFFFF"},horizontalAlignment:"center",verticalAlignment:"center"};
 if(arr.length)sh.getRangeByIndexes(3,0,arr.length,headers.length).values=arr.map(r=>headers.map(h=>scalar(r[h])));
 const used=sh.getRangeByIndexes(2,0,Math.max(1,arr.length+1),headers.length);used.format.font={name:font,size:10};used.format.verticalAlignment="center";
 sh.freezePanes.freezeRows(3);used.format.autofitColumns();used.format.autofitRows();
 for(let c=0;c<headers.length;c++){let col=sh.getRangeByIndexes(2,c,Math.max(1,arr.length+1),1);if(col.format.columnWidth>36)col.format.columnWidth=36}
 if(name==="Summary"){sh.getRange("B3:B20").format.numberFormat="General";for(let i=0;i<arr.length;i++)if(String(arr[i].metric).includes("rate"))sh.getRange(`B${i+4}`).format.numberFormat="0.0%"}
}
wb.recalculate();
const check=await wb.inspect({kind:"table",range:"Summary!A1:B12",include:"values,formulas",tableMaxRows:12,tableMaxCols:3});console.log(check.ndjson);
const errors=await wb.inspect({kind:"match",searchTerm:"#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A|#NUM!|#NULL!|#SPILL!|#CALC!",options:{useRegex:true,maxResults:100},summary:"formula errors"});console.log(errors.ndjson);
const preview=await wb.render({sheetName:"Summary",range:"A1:B12",scale:1.5,format:"png"});await fs.writeFile(outputPath.replace(/\.xlsx$/i,"_preview.png"),new Uint8Array(await preview.arrayBuffer()));
for(const sheetName of ["Merged","Invalid_ID"]){const img=await wb.render({sheetName,autoCrop:"all",scale:1,format:"png"});await fs.writeFile(outputPath.replace(/\.xlsx$/i,`_${sheetName}_preview.png`),new Uint8Array(await img.arrayBuffer()))}
const out=await SpreadsheetFile.exportXlsx(wb);await out.save(outputPath);
