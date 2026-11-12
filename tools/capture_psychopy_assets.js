const { chromium } = require("playwright");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const out = process.argv[2] || path.resolve(root, "..", "ESG_two_stage_PsychoPy_20261111", "screenshots");
fs.mkdirSync(out, { recursive: true });

async function advanceToTasks(page) {
  await page.click("#start");
  await page.click("#next");
  await page.click("#next");
  await page.locator("[name=check1]").first().check();
  await page.locator("[name=check2]").first().check();
  await page.click("#next");
}

(async () => {
  const server = spawn("python", ["-m", "http.server", "8769"], { cwd: root, stdio: "ignore" });
  await new Promise(r => setTimeout(r, 900));
  const browser = await chromium.launch({ headless: true, executablePath: "C:/Users/吕/AppData/Local/Google/Chrome/Application/chrome.exe" });
  const aoi = { screen: { width: 1280, height: 720 }, coordinate_system: "top-left pixels", groups: {} };
  for (let group = 1; group <= 4; group++) {
    const page = await browser.newPage({ viewport: { width: 1280, height: 720 }, deviceScaleFactor: 1 });
    await page.goto(`http://127.0.0.1:8769/tests/preview.html?day=2&preview=1&group=${group}&mock_upload=success`);
    if (group === 1) await page.screenshot({ path: path.join(out, "01_experiment_intro.png") });
    await advanceToTasks(page);
    if (group === 1) await page.screenshot({ path: path.join(out, "02_search_question.png") });
    await page.click("#open");
    aoi.groups[`group${group}`] = await page.evaluate(() => {
      const box = el => { const r = el.getBoundingClientRect(); return { x: r.x, y: r.y, width: r.width, height: r.height }; };
      const modal = document.querySelector(".modal"), tableScroll = document.querySelector(".table-scroll");
      return { scroll_height: modal.scrollHeight, viewport_height: modal.clientHeight, table_scroll_height: tableScroll.scrollHeight, table_viewport_height: tableScroll.clientHeight, companies: [...document.querySelectorAll(".modal .company-card")].map(card => ({
        company: card.querySelector("h3").textContent.trim(),
        company_original: card.dataset.companyOriginal,
        company_header: box(card.querySelector("h3")),
        rows: [...card.querySelectorAll("tbody tr")].map((row, index) => {
          const cells = [...row.querySelectorAll("td")];
          return { index, row: box(row), label: box(cells[cells.length - 2]), value: box(cells[cells.length - 1]), label_text: cells[cells.length - 2].textContent.trim(), value_text: cells[cells.length - 1].textContent.trim() };
        })
      })) };
    });
    await page.screenshot({ path: path.join(out, `03_esg_information_group${group}.png`) });
    await page.click("#close");
    for (let i = 0; i < 4; i++) {
      await page.click("#open"); await page.click("#found");
      await page.fill("#searchValue", "1"); await page.click("#next");
    }
    if (group === 1) {
      await page.screenshot({ path: path.join(out, "04_compare_question.png") });
      for (let i = 0; i < 4; i++) { await page.locator("[name=compare]").first().check(); await page.click("#next"); }
      await page.screenshot({ path: path.join(out, "05_difficulty.png") });
      for (let i = 0; i < 2; i++) { await page.locator("#range").evaluate(e => { e.value = "50"; e.dispatchEvent(new Event("input", { bubbles: true })); }); await page.click("#next"); }
      await page.screenshot({ path: path.join(out, "06_investment_A.png") });
      await page.locator("#range").evaluate(e => { e.value = "50"; e.dispatchEvent(new Event("input", { bubbles: true })); }); await page.click("#next");
      await page.screenshot({ path: path.join(out, "07_investment_B.png") });
      await page.locator("#range").evaluate(e => { e.value = "50"; e.dispatchEvent(new Event("input", { bubbles: true })); }); await page.click("#next");
      await page.screenshot({ path: path.join(out, "08_allocation.png") });
    }
    await page.close();
  }
  fs.writeFileSync(path.join(out, "aoi_by_group.json"), JSON.stringify(aoi, null, 2));
  await browser.close(); server.kill();
  console.log(`Captured PsychoPy reference screens and AOIs in ${out}`);
})().catch(e => { console.error(e); process.exitCode = 1; });
