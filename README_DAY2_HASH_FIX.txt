Day2 整合性错误修复（更新包）

本包内的 ESG_two_stage_config.js 与 psychojs/ESG_two_stage_master.js 均使用一致的哈希：
d3e6c14cad4eb6cce6312cc07eb4adcbb5c1cc2dfcbdeebc9a84ee76c8a01319

操作：
1. 在 GitHub Desktop 确保已 Pull origin 且当前仓库为 online-survey、分支为 main。
2. 先备份仓库。
3. 把本ZIP解压后【内部的文件和目录】复制到仓库根目录，选择替换同名文件。不要放进额外一层目录。
4. GitHub Desktop Changes 中核实 psychojs/ESG_two_stage_master.js 与 ESG_two_stage_config.js，及 day2-g1..g4.html 等显示修改。
5. Commit to main，再 Push origin。
6. GitHub Actions 显示 Pages 部署成功后，用Chrome无痕窗口打开 day2-g3.html。
7. 如果还报错，打开Chrome F12→Console和Network，截取信息以确认是否有缓存/部署不一致。

此包不包含Day1文件，不修改实验内容、四组设置、DataPipe或完成码逻辑。
这是基于用户之前上传的源码所制作的对应版本。若Github main已被Codex后续改动，优先进行版本合并，禁止直接覆盖较新的核心实验源码。
