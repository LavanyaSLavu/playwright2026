import { Given, setDefaultTimeout, Then, When } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, Page } from "playwright";
import { expect } from "playwright/test";


let browser: Browser, context: BrowserContext, page: Page;

Given("I launch the broswer", async function (){
  // Write code
  browser = await chromium.launch({
    headless: false,
    args: ["--start-maximized"],
  });
  

  context = await browser.newContext({ viewport: null });

  page = await context.newPage();

  //   page = await browser.newPage();
});
Then("I handle dragDrop via mouse hover", async () => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.getByText("Drag and Drop").scrollIntoViewIfNeeded();
  //Locate source and target
  let source = await page.locator("div#draggable");
  let target = await page.locator("div#droppable");

  //Mouse hover action
  await source.hover();
  await page.mouse.down(); //hold the mouse at source

  await target.hover();
  await page.mouse.up(); //release the mouse at target
});

Then("I handle dragDrop via playwright", async () => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.getByText("Drag and Drop").scrollIntoViewIfNeeded();
  //Locate source and target
  let source = await page.locator("div#draggable");
  let target = await page.locator("div#droppable");
  //drag and drop
  await source.dragTo(target);
});

Then('I handle dragDrop via mouse hover in practice website', async function () {

await page.goto(
  "https://www.globalsqa.com/demo-site/draganddrop/#google_vignette"
);

page.setDefaultTimeout(5000);

// Click Accepted Elements tab
await page.locator("#Accepted\\ Elements").click();

// Locate the iframe
const frame = page.frameLocator("//iframe[@src='../../demoSite/practice/droppable/accepted-elements.html']");

// Locate source and target inside the iframe
const source = frame.locator("#draggable-nonvalid");
const target = frame.locator("#droppable");

 //Verify elements are available
await source.waitFor({ state: "visible" });
await target.waitFor({ state: "visible" });

// Drag and drop using mouse
await source.hover();
await page.mouse.down();

await target.hover();
await page.mouse.up();


// Locate source and target inside the iframe
//const frame1 = page.frameLocator("//iframe[@src='../../demoSite/practice/droppable/accepted-elements.html']");
const source1 = frame.locator("#draggable");

 //Verify elements are available
await source1.waitFor({ state: "visible" });
await target.waitFor({ state: "visible" });

// Drag and drop using mouse
await source1.hover();
await page.mouse.down();

await target.hover();
await page.mouse.up();


   /*let source2 = await page.locator("#draggable");
 let target2 = await page.locator("#droppable");

//await source.waitFor({ state: 'visible', timeout: 10000 });
//await target.waitFor({ state: 'visible', timeout: 10000 });
 await source2.hover();
 await page.mouse.down();

 await target2.hover();
 await page.mouse.up();


 */
});
Then('I handle dragDrop via playwright in practice website', async function () {
 
});