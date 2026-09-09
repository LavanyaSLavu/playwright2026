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


Given('User launches the chrome browser', async function () {
  // Write code here that turns the phrase above into concrete actions
  browser = await chromium.launch({
      headless: false,
      args: ["--start-maximized"],
    });
  
    context = await browser.newContext({ viewport: null });
  
    page = await context.newPage();
  
    //   page = await browser.newPage();
});

When('User navigates to lambatest playground page', async function () {
  // Write code here that turns the phrase above into concrete actions
   await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
 
});

Then('User click the Continue button', async function () {
  // Write code here that turns the phrase above into concrete actions
   await page.getByText("Continue").click();
});

Then('User enters the first name', async function () {
  // Write code here that turns the phrase above into concrete actions
  await page.locator("//input[@name='firstname']").pressSequentially("Lavanya");
});

Then('User enters the last name', async function () {
  // Write code here that turns the phrase above into concrete actions
  await page.locator("//input[@name='lastname']").pressSequentially("Sambamoorthy");
});

Then('User enters the email', async function () {
  // Write code here that turns the phrase above into concrete actions
  await page.locator("//input[@name='email']").pressSequentially("lavanyasbeece16@gmail.com");
});
Then('User enters the telephone', async function () {
  // Write code here that turns the phrase above into concrete actions
  await page.locator("//input[@name='telephone']").pressSequentially("9344935723");
});

Then('User enters the password', async function () {
  // Write code here that turns the phrase above into concrete actions
 await page.getByText("I have read and agree to the ").scrollIntoViewIfNeeded();
 await page.locator("//input[@name='password']").pressSequentially("Lavu@123");
});

Then('User enters the password confirm', async function () {
  // Write code here that turns the phrase above into concrete actions
  await page.locator("//input[@name='confirm']").pressSequentially("Lavu@123");
});

Then('User clicks the subscribe no radio button', async function () {
  // Write code here that turns the phrase above into concrete actions
  await page.locator("//label[@for='input-newsletter-no']").click();
});

Then('User clicks the checkbox of privacy policy', async function () {
  // Write code here that turns the phrase above into concrete actions
    //await page.waitForTimeout(10000);
  await page.locator("//label[@for ='input-agree']").check();
});
Then ('User clicks the Continue button', async function () {
  // Write code here that turns the phrase above into concrete actions
   await page.getByText("Continue").click();
   await page.screenshot({ path: "./Screenshots/fullView.jpg", fullPage: true });
   await page.getByText("Continue").click();
});