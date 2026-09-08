import { Given, Then } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, Page } from "playwright";

//async - await:
//promise:

//Interface: Browser, BrowserContext, Page

let browser: Browser, context: BrowserContext, page: Page;

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

//30sec
Then("I navigate to testautomation practice website", async function () {
  // Write code - goto()
  await page.goto("https://testautomationpractice.blogspot.com/");
});

Then("I enter name", async function () {
  // Write code - in chaining methods
  // await page.locator("//input[@id='name']").fill("Playwright");

  //====getByPlaceholder====
  await page.getByPlaceholder("Enter Name").fill("Selenium");
  let input1 = await page.getByPlaceholder("Enter Name").inputValue();
  //concatenation + ,
  console.log("Name Lable: " + input1);
  console.log("Name Lable:", input1);
});

Then("I enter email", async function () {
  // Write code
  // await page.locator("//input[@id='email']").type("test@sample.com");

  //====getByPlaceholder====
  await page.getByPlaceholder("Enter EMail").type("practice@tetmail.com");
});

Then("I click start button", async function () {
  // Write code
  // await page.locator("//button[@name='start']").click();
  //===getByRole=====
  await page.getByRole("button", { name: "start" }).click();
  await page.getByRole("radio", { name: "Male", exact: true }).click();
  // await page.getByRole("radio", { name: "Female" }).click();
  await page.getByRole("checkbox", { name: "Sunday" }).check();

  //======getByLabel====
  await page.getByLabel("Tuesday").click();
  await page.getByLabel("Female").click();

  //Selenium
  await page.getByPlaceholder("Enter Name").clear();
  await page.getByPlaceholder("Enter Name").pressSequentially("Playwright");
  let Input2 = await page.getByPlaceholder("Enter Name").inputValue();
  console.log("UpdatedName Lable: " + Input2);

  //======getByText====
  await page.getByText("Data Entry Form").scrollIntoViewIfNeeded();
  await page.getByText("STOP").click();
});

Then("I navigate to orangeHRM website", async function () {
  // Write code
  await page.goto("https://opensource-demo.orangehrmlive.com/");
});

Then("I enter username", async function () {
  // Write code
  await page.getByPlaceholder("Username").fill("Admin");
});

Then("I enter password", async function () {
  // Write code
  await page.getByPlaceholder("Password").pressSequentially("admin123");
});

Then("I click login button", async function () {
  // Write code here
  //Screenshot: jpg, jpeg, png
  await page.screenshot({ path: "./Screenshots/pageView.png" });
  await page.screenshot({ path: "./Screenshots/fullView.jpg", fullPage: true });
  await page
    .getByPlaceholder("Username")
    .screenshot({ path: "./Screenshots/username.jpeg" });
  // getByRole/getByText
  await page.getByRole("button", { name: "Login" }).click();
});

Then("I navigate to automation test practice website", async () => {
  await page.goto("https://testautomationpractice.blogspot.com/");
});

Then("I handle country dropdown", async () => {
  //Scroll to Country dropdown
  await page.locator("//label[text()='Country:']").scrollIntoViewIfNeeded();
  // let countryDrpDown = await page.locator("//select[@id='country']");
  //collect all dropdown values
  // let countryList = await countryDrpDown.allInnerTexts();

  //allInnerTexts()
  /*
   let countryList = await page
     .locator("//select[@id='country']")
    .allInnerTexts();
    for (let country of countryList) {
    console.log(country);
  }
  */

  //allTextContexts()
  let countryList = await page
    .locator("//select[@id='country']")
    .allTextContents();
  for (let country of countryList) {
    // console.log(country);
    let c = country.trim();
    if (country.includes("Germany")) {
      //selectOption - by value
      // await page.selectOption("//select[@id='country']", "uk");
      // break;

      //selectOption - by visibleText Germany
      await page.selectOption("//select[@id='country']", { label: "Germany" });
      break;
    }
  }
});

Then("I handle multi select dropdown", async () => {
  let colorsList = await page.locator("//select[@id='colors']").allInnerTexts();
  for (let color of colorsList) {
    // console.log(color);
    await page.selectOption("//select[@id='colors']", [
      "red",
      "green",
      "yellow",
    ]);
    break;
  }
});
Then("I enter any word in google search box", async () => {
  await page.goto("https://www.google.com/");
  //Search any word
  await page.locator("//textarea[@title='Search']").pressSequentially("Fifa");

  await page.waitForSelector("//ul[@role='listbox']/li");
  console.log("======Google Suggestions======");
  let unOrderList = await page.locator("//ul[@role='listbox']/li").all();
  // let unOrderList = await page.$$("//ul[@role='listbox']/li");
  console.log(unOrderList);

  for (let element of unOrderList) {
    let value = await element.innerText();
    console.log(value);
    //await page.locator("//ul[@role='listbox']/li").nth(2).click();
  }
});

Then("I enter atleast 2char in country search box", async () => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  //Search any word
  await page.locator("//input[@id='autocomplete']").pressSequentially("Au");

  await page.waitForSelector(".ui-menu-item-wrapper");
  console.log("======Country Suggestions======");
  let unOrderList = await page.locator(".ui-menu-item-wrapper").all();
  // let unOrderList = await page.$$("//ul[@role='listbox']/li");
  console.log(unOrderList);

  for (let element of unOrderList) {
    let value = await element.innerText();
    console.log(value);
    //await page.locator("//ul[@role='listbox']/li").nth(2).click();
  }
});
Then("I navigate to demoQa website", async () => {
  await page.goto("https://demoqa.com/alerts");
});
Then("I handle simple alert", async () => {
  //listener -> set of instruction before execute any logic in the page
  //1sec = 1000ms
  page.on("dialog", async (dialog) => {
    await page.waitForTimeout(6000);
    console.log("Alert_Type:", await dialog.type());
    console.log("Alert_Message:", await dialog.message());
    await dialog.accept();
  });

  //   await page.locator("#alertButton").click();
  await page.click("#timerAlertButton");
});

Then("I handle confirm alert", async () => {
  page.on("dialog", async (dialog) => {
    await page.waitForTimeout(1000);
    console.log("Alert_Type:", await dialog.type());
    console.log("Alert_Message:", await dialog.message());
    // await dialog.accept();
    await dialog.dismiss();
  });

  // await page.locator("#confirmButton").click();
  //   await page.click("#confirmButton");
});

Then("I handle prompt alert", async () => {
  page.on("dialog", async (dialog) => {
    await page.waitForTimeout(1000);
    console.log("Alert_Type:", await dialog.type());
    console.log("Alert_Message:", await dialog.message());
    await dialog.accept("Playwright");
    // await dialog.dismiss();
  });
  await page.click("#promtButton");
});

Then("I goto demoqa website", async()=>{
    await page.goto("https://demoqa.com/alerts");
})
Then("I click Button to see alert", async()=>{
    //simple alert
    //listener -> set of instruction before execute any logic in the page. page.on is the listner
    // it will not return any promise so await is not nedeed.
  //1sec = 1000ms
  page.on("dialog", async (dialog)=>{
    await page.waitForTimeout(1000);
    console.log("====Alert Type=====",dialog.type());
    console.log("====Alert Message====",dialog.message());
    await dialog.accept();
  });
    await page.click("#alertButton");
})
Then("I click alert will appear after 5 seconds",async()=>{
    //simple alert
    page.on("dialog",async (dialog)=>{
    await page.waitForTimeout(6000);
    console.log("====Alert Type====",dialog.type());
    console.log("=======Alert Message=====",dialog.message());
    await dialog.accept();
    })
    await page.click("#timerAlertButton");
})
Then("I click confirm box will appear",async()=>{
    page.on("dialog",async(dialog)=>{
        await page.waitForTimeout(1000);
        await dialog.dismiss();
    })
    await page.click("#confirmButton");
});
Then("I click prompt box will appear",async()=>{
    page.on("dialog",async(dialog)=>{
        await page.waitForTimeout(1000);
        await dialog.accept("palywright");
    })
    await page.click("#promtButton");
});
Then("I handle single frame",async()=>{
  await page.goto("https://ui.vision/demo/webtest/frames/");
  //await page.fill("//input[@name='mytext1']","Playwright");
  let avalFrames= await page.frames();
  console.log("====frames count====",avalFrames.length);
  //Type1
let frame1= await page.frameLocator("//frame[@src='frame_1.html']");
await frame1.locator("//input[@name='mytext1']").fill("Playwright");
//Type2
let frame2= await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_2"});
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