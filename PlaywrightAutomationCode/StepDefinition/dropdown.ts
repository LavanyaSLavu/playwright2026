import { Given, Then, When } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, Page } from "playwright";

//async - await:
//promise:

//Interface: Browser, BrowserContext, Page

let browser: Browser, context: BrowserContext, page: Page;

Given("I launch chrome browser", async function (){
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
When("I navigate to testautomation practice website", async function () {
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

When("I navigate to orangeHRM website", async function () {
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

When("I navigate to automation test practice website", async () => {
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

When("I enter any word in google search box", async () => {
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

When("I enter atleast 2char in country search box", async () => {
 await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    // Enter search text
    await page.locator("//input[@id='autocomplete']").pressSequentially("Au");

    await page.waitForSelector(".ui-menu-item-wrapper");

    console.log("====== Country Suggestions ======");

    const countryList = page.locator(".ui-menu-item-wrapper");

    const count = await countryList.count();

    for (let i = 0; i < count; i++) {

        const countryName = await countryList.nth(i).innerText();

        console.log(countryName);

        if (countryName.trim() === "Australia") {
            await countryList.nth(i).click();
            break;
        }
    }
    
  
  /*for (let element of unOrderList) {
    let value = await element.innerText();
    console.log(value);
    //await page.locator("//ul[@role='listbox']/li").nth(2).click();
  }
    */
      
});
When('I navigate to expand testing', async function () {
   await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
});

Then('I handle simple dropdown', async function () {
  await page.click("#dropdown-class-example");
 await page.selectOption("//select[@id='dropdown-class-example']", { value : "option2" });
});

Then('I handle country selection dropdown', async function () {
  await page.locator("//input[@id='autocomplete']").pressSequentially("Aus");
  await page.waitForSelector(".ui-menu-item");
 console.log("====== Country Suggestions ======");
 let countryList = await page.locator(".ui-menu-item");

 let countryCount = await countryList.count();
 for (let i = 0; i < countryCount; i++) {

        const countryName = await countryList.nth(i).innerText();

        console.log(countryName);

        if (countryName.trim() === "Australia") {
            await countryList.nth(i).click();
            break;
        }}
});