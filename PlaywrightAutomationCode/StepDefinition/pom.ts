import { Given, Then, When } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, firefox, Page } from "playwright";
import {pageFixture} from "../Utils/pageFixture";
import LoginPage from "../PageObjectModel/LoginPage";

//Create objct for class files which you are going to use in this step definition logic
let lp = new LoginPage();

//asyn-await:
//promise:
//interface: Browser, BrowserContext, Page
//30s default wait
//playwright browser - default headless = true

//let browser: Browser; //undefined
//let context: BrowserContext; //undefined
//let page: Page; //undefined->chromium page


/*Given('User launches chrome browser', async function () {
  // Write code here that turns the phrase above into concrete actions
  browser = await chromium.launch({
      headless: false,
      args: ["--start-maximized"],
    });
  
    context = await browser.newContext({ viewport: null });
  
    page = await context.newPage();
  
    //   page = await browser.newPage();
});*/

When('User navigates to the lambatest playground page', async function () {
  // Write code here that turns the phrase above into concrete actions
  // await pageFixture.page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
  await lp.launchUrl("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
});
Then('User enter the email', async function () {
  // Write code here that turns the phrase above into concrete actions
   //await pageFixture.page.locator("//input[@id='input-email']").fill("lavanyasbeece16@gmail.com");
  await lp.userName("lavanyasbeece16@gmail.com");
});
Then('User enter the password', async function () {
  // Write code here that turns the phrase above into concrete actions
   //await pageFixture.page.locator("//input[@id='input-password']").pressSequentially("Lavu@123");
  await lp.pass("Lavu@123");
});
Then('User click the login', async function () {
  // Write code here that turns the phrase above into concrete actions
  //await pageFixture.page.locator("//input[@class='btn btn-primary']").click();
  await lp.clickLogin();
});




/*When('User navigates to the lambatest playground page', async function () {
  // Write code here that turns the phrase above into concrete actions
   await pageFixture.page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
 
});
Then('User enter the email', async function () {
  // Write code here that turns the phrase above into concrete actions
   await pageFixture.page.locator("//input[@id='input-email']").fill("lavanyasbeece16@gmail.com");
 
});
Then('User enter the password', async function () {
  // Write code here that turns the phrase above into concrete actions
   await pageFixture.page.locator("//input[@id='input-password']").pressSequentially("Lavu@123");
 
});
Then('User click the login', async function () {
  // Write code here that turns the phrase above into concrete actions
  await pageFixture.page.locator("//input[@class='btn btn-primary']").click();

 
});*/