# ESG 两阶段实验（本地预览版）

本目录基于正式仓库提交 `f1433c8` 修改。正式仓库、GitHub Pages 和历史数据均未改动。

## 本地预览

在本目录运行静态服务器：

```powershell
python -m http.server 8765
```

- Day 1：`http://localhost:8765/?day=1&preview=1&mock_upload=success`
- Day 2 / Group 1：`http://localhost:8765/?day=2&preview=1&group=1&mock_upload=success`
- 将 `group=1` 改为 2、3、4 可查看四组。
- 将 `mock_upload=success` 改为 `failure` 可检查失败与重试页面。

研究者预览模式不会向正式 DataPipe 发送数据。正式模式必须去掉 `preview=1` 和 `mock_upload`，并传入 `datapipe_experiment_id`。

数值探索题当前已启用数值输入。每题保存输入原文、数值化结果、正确值、正确与否和查找时间；可通过`ESG_two_stage_config.js`中的`searchValueInputEnabled`统一开关。

## 分组和两阶段ID

Day 1和Day 2分别生成不同的`P-XXXXXXXXXXXX`。ID只在当前标签页的`sessionStorage`中暂存，以保证同一次失败重传不更换ID；不使用`localStorage`跨阶段识别。参加者把每次结束页的ID分别提交到对应Yahoo任务，研究者之后通过两个TSV中稳定的Yahoo会员编号合并。

Day 2开始时调用DataPipe condition API（后台需设为4 conditions），按返回的0、1、2、3映射为Group 1～4。静态GitHub Pages不能单独保证最终恰好100人/组；重复进入、未完成和邀请缺席都可能影响实际完成组数。

## DataPipe记录

- `day1_completed`：Day 1完成、基本属性和Day 1用户ID。
- `day2_started`：成功进入Day 2时立即记录。
- `day2_progress`：进入探索、比较、评价和最终发送前等关键阶段。
- `day2_exit_snapshot`：浏览器离开时尽力发送，不能保证每次成功。
- `day2_completed`：Day 2全部完成后的最终答案、Day 2用户ID和组别。

只有DataPipe返回HTTP 201/202后显示完成凭证。排队接收（202）仅表示DataPipe已接收请求，不表示Google Drive最终写入已经人工核验。

## Yahoo后台需要人工设置

1. Day 1与Day 2应建立不同招募任务，Day 2用白名单邀请Day 1完成者。
2. 两个任务都设置「ユーザーIDの入力」，分别收集当次结束页的用户ID，不要求参加者保存Day 1 ID。
3. 如继续使用固定完了代码，应与用户ID设置为两个不同字段；完了代码不参与个人关联。
4. 积分、人数、开放2天、白名单和任务说明均由Yahoo后台设置，网页代码不能代替。
5. 上线前为DataPipe实验设置4个conditions，并评估多份阶段日志是否计入session上限。

## 尚需确认

- Day 1 已按原正式问卷恢复：年龄为10～19岁至70岁以上共7类；性别为男性、女性、その他、回答しない；职业为原来的9类，并保留“その他”文字输入。
- 搜索/比较题的用词与标准化标签更接近，可能构成词汇匹配差异，详见 `LABEL_OVERLAP_REPORT.md`。
- DataPipe能保存多个JSON记录，但Drive最终落盘、202队列处理和离开页面日志必须在独立测试experiment中人工验证。

