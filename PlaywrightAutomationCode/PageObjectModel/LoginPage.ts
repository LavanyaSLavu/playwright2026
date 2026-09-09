import { pageFixture } from "../Utils/pageFixture";

export default class LoginPage{

    //collect all locators as a private classlevel variables
    private loginElements = {
        email : "//input[@id='input-email']",

        password: "//input[@id='input-password']",
        loginClick: "//input[@class='btn btn-primary']"
    };

    
    //url launch, enter username, enter password , click login
    async launchUrl(url: string){
        await pageFixture.page.goto(url);
    }
    async userName(userName: string){
        await pageFixture.page.locator(this.loginElements.email).fill(userName);
        
    }
     async pass(pass: string){
        await pageFixture.page.locator(this.loginElements.password).pressSequentially(pass);
    }
    async clickLogin(){
        await pageFixture.page.locator(this.loginElements.loginClick).click();
    }

}