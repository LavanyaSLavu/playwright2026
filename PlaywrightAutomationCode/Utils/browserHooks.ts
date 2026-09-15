import { After, Before } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium } from "playwright";
import { pageFixture } from "../Utils/pageFixture";


let browser: Browser; //undefined
let context: BrowserContext; //undefined
//I'm going to use page as page fixtures

//let page: Page; //undefined->chromium page

Before(async function () {
  // Write code here that turns the phrase above into concrete actions
  browser = await chromium.launch({
      headless: false,
      args: ["--start-maximized"],
    });
  
    context = await browser.newContext({ viewport: null });
    pageFixture.page = await context.newPage();
   
})
 After(async () => {
 // await pageFixture.page.close();
  //await context.close();
  await browser.close();
});