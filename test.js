import puppeteer from "puppeteer";
import percySnapshot from "@percy/puppeteer";

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-gpu",
      "--disable-software-rasterizer"
    ]
  });

  const page = await browser.newPage();

  await page.goto("http://localhost:3000", {
    waitUntil: "networkidle0"
  });

  await percySnapshot(page, "Homepage Snapshot");

  await browser.close();
})();
