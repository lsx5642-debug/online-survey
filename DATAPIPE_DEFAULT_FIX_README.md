# DataPipe URL 缺少 Experiment ID 时的默认值（2026-11-12）

- `shared/web_runtime_config.json` 中的 `defaultDataPipeExperimentId` 为 `iW2hkdaVf5pA`。
- URL 里如包含非空的 `?datapipe_experiment_id=...`，优先使用 URL 参数，方便使用独立测试 ID。
- URL 不带该参数（或参数为空）时，采用上述默认 ID。
- 该默认值只属于网页适配配置，不改变 PsychoPy 刺激配置或 masterConfigHash。
- 运行 `node tools/generate_config_from_master.js shared/esg_experiment_config.json ESG_two_stage_config.js` 可从共享配置重建网页配置；网页适配配置随生成过程加载，避免被覆盖。
- DataPipe 必须返回 201/202，页面才会进入完成状态；浏览器无法因默认ID存在而保证网络上传成功。
- 不要将 DataPipe ID 视为密码；它会随前端代码公开。正式使用前，应使用独立测试ID验证真实Google Drive收件。
- 本组合包已经同时包含先前完成的 **Day 1 / Day 2 独立统一完了コード** 修订（Day 2 四组共用一个码），以及本次 DataPipe 默认 ID 修复。源仓库ZIP只有旧统一完了コード；部署前应与当前GitHub `main` 比较，防止覆盖较新的远程修改。
