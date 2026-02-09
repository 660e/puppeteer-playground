// https://pptr.dev/
const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
  });
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:9999/src/views/template.html');
  await page.pdf({
    format: 'A4',
    path: './dist/template.pdf',
    printBackground: true,
  });
  await browser.close();
})();
