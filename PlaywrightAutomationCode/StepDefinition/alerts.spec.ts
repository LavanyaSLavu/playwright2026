import { Given, setDefaultTimeout, Then, When } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, Page } from "playwright";
setDefaultTimeout(10000);
let browser: Browser;
let context: BrowserContext;
let page: Page;


// Launch browser
Given('I launch google chrome browser', async function () {

    browser = await chromium.launch({
        headless: false,
        args: ["--start-maximized"],
    });

    context = await browser.newContext({
        viewport: null
    });

    page = await context.newPage();
});


// Open Alerts page
When('I goto demo automation testing website', async function () {

    await page.goto(
        "https://demo.automationtesting.in/Alerts.html"
    );
});


// ===============================
// SIMPLE ALERT
// ===============================

Then('I click Button to see simple alert', async function () {

    await page.locator("//a[text()='Alert with OK ']").click();
});


Then('I handle simple alert', async function () {

        page.once("dialog", async (dialog) => {
            await page.waitForTimeout(6000);
            console.log("==== Alert Type =====", dialog.type());
            console.log("==== Alert Message ===", dialog.message());
            await dialog.accept();
        
        });
  

    await page.locator("//button[contains(text(),'alert box')]").click();
    
});


// ===============================
// CONFIRM ALERT
// ===============================

When('I click Button to see confirm alert', async function () {

    await page.locator(
        "//a[text()='Alert with OK & Cancel ']"
    ).click();

});


Then('I handle confirm alert', async function () {

  
        page.once("dialog", async (dialog) => {
            await page.waitForTimeout(6000);
            console.log("==== Prompt Type =====", dialog.type());
            console.log("==== Prompt Message ===", dialog.message());
            await dialog.dismiss();
           
        });

    // This button triggers the confirm dialog
    await page.locator("//button[@class='btn btn-primary']").click();

    // Dialog is already handled in the previous step.
    console.log("Confirm alert handled successfully.");
});


// ===============================
// PROMPT ALERT
// ===============================

When('I click Button to see prompt alert', async function () {

    await page.locator(
        "//a[text()='Alert with Textbox ']"
    ).click();

    
});


Then('I handle prompt alert', async function () {

        page.once("dialog", async (dialog) => {
            await page.waitForTimeout(6000);
            console.log("==== Prompt Type =====", dialog.type());
            console.log("==== Prompt Message ===", dialog.message());
            await dialog.accept("Playwright");
         
        });
   

    // This button triggers the prompt dialog
    await page.locator("//button[@class='btn btn-info']").click();
 

    // Dialog is already handled in the previous step.
    console.log("Prompt alert handled successfully.");
});