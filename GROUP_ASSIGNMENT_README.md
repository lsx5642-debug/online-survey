# Day 2固定4組のランダム割当

## 入力

1. 第1回Yahoo回答TSV
2. 第1回DataPipe JSONフォルダ
3. Yahoo発注者画面から当日にダウンロードしたホワイトリスト取込テンプレート
4. 研究計画書に記録する固定乱数シード

公開されているYahoo案内ではホワイトリスト機能の存在は確認できますが、取込ファイルの固定スキーマは公開されていません。そのため、本スクリプトはテンプレートなしで列名や区切り文字を推測して本番ファイルを作りません。

## 実行例

```powershell
python tools/assign_day2_groups.py `
  --day1-yahoo "D:\data\day1.tsv" `
  --day1-json "D:\data\day1_json" `
  --whitelist-template "D:\data\yahoo_whitelist_template.tsv" `
  --member-column "Yahoo会員ID" `
  --seed 20261112 `
  --output-dir "D:\data\day2_assignment"
```

`--member-column`には、実際のYahooテンプレートに書かれた会員ID列の見出しをそのまま指定してください。

## 出力

- `day2_group_assignments.csv`: 会員ID、G1～G4、固定リンク、乱数シード
- `G1_yahoo_whitelist.*` ～ `G4_yahoo_whitelist.*`: Yahooテンプレート準拠の4ファイル
- `assignment_report.json`: 人数、重複、無効ID、未一致、テンプレートSHA-256

有効完成者を会員ID順に正規化してから固定シードでシャッフルし、G1→G2→G3→G4の順に循環割当します。400人なら各100人、不足または超過時は実人数を最大1人差で配分します。同一会員IDが複数組に入った場合は処理を失敗させます。

GitHub Pagesリンク自体は公開URLです。回収後は必ず`day2_group_assignments.csv`のYahoo会員IDと、DataPipe JSONの`group_id`を照合し、誤リンク、跨組重複、未割当参加者を別表にして人工確認してください。
