const {test, expect} = require('@playwright/test');

const loginData = require("../data/logindata.json");
import Login from "../pages/loginPage.js";


test.describe("Login Tests", function() {


    for (let i =0; i < loginData.length; i++) {


        test(`Login with credentials - ${loginData[i].username} - ${loginData[i].password}`, async ({page})=>{

            const loginpage = new Login(page);

            await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

            await loginpage.loginToApp(loginData[i].username, loginData[i].password);

            


            
        })
    }




})
