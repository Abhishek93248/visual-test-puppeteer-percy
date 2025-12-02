import puppeteer from "puppeteer";
import percySnapshot from "@percy/puppeteer";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // URL through BrowserStack Local tunnel
  await page.goto("http://localhost:3000");

  // Take visual snapshot
  await percySnapshot(page, "Homepage Snapshot");

  await browser.close();
})();
