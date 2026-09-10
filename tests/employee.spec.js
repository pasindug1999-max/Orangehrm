const {test, expect} = require('@playwright/test');

const Login = require("../pages/loginPage.js");
const Employee = require("../pages/employeePage.js");

const username = "Admin";
const password = "admin123";

test.describe("Employee Tests", function (){

    test.beforeEach(async ({page}) =>{

        const loginpage = new Login(page);

        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        await loginpage.loginToApp(username,password);
    });


    test("Add Employee details", async ({page})=>{

        const employeepage = new Employee(page);

        await employeepage.clickPIM();
        await employeepage.clickAddEmployee();
        await employeepage.addEmployeeDetails();

        await expect(page.getByText("Successfully Saved", { exact: true })).toBeVisible();


    });

    test.only("Search Employee", async ({page})=>{

        const employeepage = new Employee(page);
        await employeepage.clickPIM();
        await employeepage.searchEmployee();

        await expect(page.getByText("Paul Wood")).toBeVisible();
        
    });


    





})