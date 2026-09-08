import { Given, Then } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, firefox, Page } from "playwright";

//asyn-await:
//promise:
//interface: Browser, BrowserContext, Page
//30s default wait
//playwright browser - default headless = true

let browser: Browser; //undefined
let context: BrowserContext; //undefined
let page: Page; //undefined->chromium page


Given("I launch chrome browser", async function () {
  // Write code
  browser = await chromium.launch({
    headless: false,
    args: ["--start-maximized"],
  });

  context = await browser.newContext({ viewport: null });

  page = await context.newPage();

  //   page = await browser.newPage();
});

Then("I navigate to facebook page", async function () {
  // Write code
  await page.goto("https://www.facebook.com/");
});

Then("I close the browser", async () => {});
