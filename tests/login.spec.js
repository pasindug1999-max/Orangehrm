const { test, expect } = require('@playwright/test');

const loginData = require("../data/logindata.json");
const Login = require("../pages/loginPage.js");

test.describe("Login Tests", function () {

    for (let i = 0; i < loginData.length; i++) {

        test(`Login with credentials - ${loginData[i].id}`, async ({ page }) => {

            const loginpage = new Login(page);

            await page.goto(
                "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
            );

            await loginpage.loginToApp(
                loginData[i].username,
                loginData[i].password
            );

            if (loginData[i].id === "Valid login") {

                await expect(page).toHaveURL(
                    "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
                );

            } else if (loginData[i].id === "Empty credentials") {

                await expect(page.getByText("Required")).toHaveCount(2);

            } else {

                await expect(
                    page.getByText("Invalid credentials", { exact: true })
                ).toBeVisible();
            }
        });
    }

    test("Logout from application", async ({ page }) => {

        const loginpage = new Login(page);

        await page.goto(
            "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
        );

        await loginpage.loginToApp("admin", "admin123");

        await loginpage.logoutFromApp();

        await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    });
});