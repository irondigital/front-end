const puppeteer = require("puppeteer");

class ScraperAgent {
  async scrape({ keywords, location }) {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    await page.goto(
      `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(
        keywords
      )}&location=${encodeURIComponent(location)}`
    );

    await page.waitForSelector("li");

    const jobs = await page.$$eval("li", (elements) =>
      elements.slice(0, 5).map((el) => ({
        title: el.innerText.slice(0, 50),
        company: el.innerText.slice(51, 100), // example parsing
        location: "Remote", // placeholder
        applyEmail: "hr@example.com", // placeholder
      }))
    );

    await browser.close();
    return jobs;
  }
}

module.exports = new ScraperAgent();