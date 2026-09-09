import { Given, setDefaultTimeout, Then, When } from "@cucumber/cucumber";
import path from "node:path";
import { Browser, BrowserContext, chromium, Page } from "playwright";

setDefaultTimeout(50 * 1000);//default
let browser: Browser, context: BrowserContext, page: Page;

Given('I launch the chrome browser', async function () {
  browser = await chromium.launch({
    headless: false,
    args: ['--start-maximized']
  });
  context = await browser.newContext({ viewport: null });
  page = await context.newPage();
});



When("I handle single frame", async () => {
  await page.goto("https://ui.vision/demo/webtest/frames/");
  //await page.fill("//input[@name='mytext1']","Playwright");
  let avalFrames = await page.frames();
  // console.log("====frames count====", avalFrames.length);
  console.error("====frames count====", avalFrames.length);
  //Type1
  let frame1 = await page.frameLocator("//frame[@src='frame_1.html']");
  await frame1.locator("//input[@name='mytext1']").fill("Playwright");
  //Type2
  let frame2 = await page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_2" });
  await frame2?.locator("//input[@name='mytext2']").fill("example");
});

Then("I handle Nested frame", async () => {
  await page.goto("https://ui.vision/demo/webtest/frames/");
  let frame3 = await page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_3" });
  await frame3?.locator("form#id3 div input").fill("Nested Frame");
  //child frame
  let childFrames = await frame3?.childFrames();
  console.log(childFrames?.length);
  if (childFrames && childFrames.length > 0) {
    let radioElement = await childFrames[0].locator("//span[contains(text(),'human')]");
    let checkElement = await childFrames[0].locator("//span[contains(text(),'Web Testing')]");
    await radioElement.scrollIntoViewIfNeeded();
    await radioElement.click();
    await checkElement.scrollIntoViewIfNeeded();
    await checkElement.click();
  }
});

When('I handle single iframe', async function () {
  await page.goto("https://demo.automationtesting.in/Frames.html");
    
  let availableFrames = await page.frames();
  console.log("FramesCount: ", availableFrames.length);
  console.error("====frames count====", availableFrames.length); 
  let frame3= await page.frame({url : "https://demo.automationtesting.in/SingleFrame.html"});
  //let frame = await page.frameLocator("#singleframe");
  await frame3?.locator("//input[@type='text']").fill("Single Frame");
  
});

Then('I handle Nested iframe', async function () {
  await page.getByText("Iframe with in an Iframe").click();
  //let nestedFrame = await page.frame({url: "https://demo.automationtesting.in/MultipleFrames.html"})
  //await nestedFrame?.locator("//input[@type='text']").fill("Nested Frame");

    const input = page
    .frameLocator('iframe')
    .frameLocator('iframe')
    .locator('input[type="text"]');

  await input.fill('Hello');

  //let childFrames =await nestedFrame?.childFrames();
  //console.log("ChildFramesCount: ", childFrames?.length);
});

