import { Given, Then, When } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, firefox, Page } from "playwright";

//asyn-await:
//promise:
//interface: Browser, BrowserContext, Page
//30s default wait
//playwright browser - default headless = true

let browser: Browser; //undefined
let context: BrowserContext; //undefined
let page: Page; //undefined->chromium page


Given('User launches chrome browser', async function () {
  // Write code here that turns the phrase above into concrete actions
  browser = await chromium.launch({
      headless: false,
      args: ["--start-maximized"],
    });
  
    context = await browser.newContext({ viewport: null });
  
    page = await context.newPage();
  
    //   page = await browser.newPage();
});

When('User navigates to the lambatest playground page', async function () {
  // Write code here that turns the phrase above into concrete actions
   await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
 
});
Then('User enter the email', async function () {
  // Write code here that turns the phrase above into concrete actions
   await page.locator("//input[@id='input-email']").pressSequentially("lavanyasbeece16@gmail.com");
 
});
Then('User enter the password', async function () {
  // Write code here that turns the phrase above into concrete actions
   await page.locator("//input[@id='input-password']").pressSequentially("Lavu@123");
 
});
Then('User click the login', async function () {
  // Write code here that turns the phrase above into concrete actions
  await page.locator("//input[@class='btn btn-primary']").click();

 
});