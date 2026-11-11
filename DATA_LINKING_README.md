# Yahoo会员ID两阶段关联

## 原理

Day 1与Day 2各自生成不同的`user_id`。参加者把当次ID提交到对应Yahoo任务的「ユーザーIDの入力」栏。Yahoo TSV中的会员编号把两次不同ID连接到同一会员。

`completion_code`只用于任务完成验证，不参与个人匹配。`anonymous_participant_id`只标识单次网页回答，不用于跨阶段匹配。

## 运行

```powershell
python tools/yahoo_datapipe_linker.py `
  --day1-yahoo "DAY1.tsv" --day1-json "DAY1_JSON_FOLDER" `
  --day2-yahoo "DAY2.tsv" --day2-json "DAY2_JSON_FOLDER" `
  --output "outputs/linked_results.xlsx"
```

脚本按设问名称、用户ID格式和每行会员编号识别Yahoo记录，不依赖固定列号。重复、无效和模糊记录不会自动删除或强制匹配，而是进入独立工作表。

## Yahoo后台设置

- Day 1和Day 2都设置「ユーザーIDの入力」，要求填写网页结束页显示的当次`P-XXXXXXXXXXXX`。
- 如继续使用完了代码，另设「完了コードの入力」；完了代码不能用于个人匹配。
- 两个任务分别导出原始TSV，不能删除会员编号列。
- 正式开始前用同一测试会员分别完成两个不同任务，确认导出的会员编号稳定一致。

## 限制

Day 2只有完成后，参加者才会把Day 2用户ID提交给Yahoo。因此`day2_started`和`day2_progress`文件可以统计匿名开始/进度数量，但无法可靠映射到具体Yahoo会员。Day 2未参加率实际表示Day 1完成者中没有有效Day 2完成匹配的比例，不能证明这些人从未打开Day 2。

输出Excel含Yahoo会员编号，属于受限关联文件，不得公开或放入论文附录、开放数据集。
