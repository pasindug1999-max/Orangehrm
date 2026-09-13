const {test, expect} = require('@playwright/test');

const Login = require("../pages/loginPage.js");
const Recruitment = require("../pages/recruitmentPage.js");

const username = "Admin";
const password = "admin123";

test.describe("Recruitment Tests", function(){

    test.beforeEach(async ({page})=>{

        const loginpage = new Login(page);
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        await loginpage.loginToApp(username,password);


    })

    test("Add candidate", async ({page})=>{

        const recruitmentpage = new Recruitment(page);
        await recruitmentpage.clickRecruitmentMenu();
        await recruitmentpage.addCandidate();
        await recruitmentpage.addCandidateDetails();

        await expect(page.getByText("Successfully Saved", { exact: true })).toBeVisible();

        //await page.waitForTimeout(3000);
        
    });



})