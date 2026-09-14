const {test, expect} = require('@playwright/test');

const Login = require("../pages/loginPage.js");
const Admin = require("../pages/adminPage.js");

const username = "Admin";
const password = "admin123";

test.describe("Admin Tests", function(){

    test.beforeEach(async ({page})=>{

        const loginpage = new Login(page);

        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        await loginpage.loginToApp(username,password);

    });

    test("Add Admin", async ({page})=>{

        const adminpage = new Admin(page);

        await adminpage.clickAdmin();
        await adminpage.addAdmin();
        await adminpage.addAdminDetails();

        await expect(page.getByText("Successfully Saved", { exact: true })).toBeVisible();
        
        
    });

    test.only("Edit Admin username by changing the last two characters", async ({page})=>{

        const adminpage = new Admin(page);

        await adminpage.clickAdmin();
        await adminpage.searchEmployee();
        await adminpage.editAdminDetails();
        await expect (page.getByText("Successfully Updated", { exact: true })).toBeVisible();
        


    })


})