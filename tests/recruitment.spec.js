const {test, expect} = require('@playwright/test');

const Login = require("../pages/loginPage.js");
const Recruitment = require("../pages/recruitmentPage.js");
const Vacancy = require("../pages/vacanciesPage.js");

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

    test("Search created candidate using  Job Title", async ({page})=>{

        const recruitmentpage = new Recruitment(page);
        await recruitmentpage.clickRecruitmentMenu();
        await recruitmentpage.searchCandidate();
        await expect(page.getByText("Peter Jones Smith")).toBeVisible();
        
    });


    // Bug/Defect
    test("Shortlist candidate", async ({page})=>{

        const recruitmentpage = new Recruitment(page);
        await recruitmentpage.clickRecruitmentMenu();
        await recruitmentpage.searchCandidate();
        await recruitmentpage.acceptCandidate();
        await expect(page.locator(".oxd-toast")).toContainText("Unexpected Error Occurred");


    });

    // Bug/Defect
    test("Reject Candidate", async ({page})=>{

        const recruitmentpage = new Recruitment(page);
        await recruitmentpage.clickRecruitmentMenu();
        await recruitmentpage.searchCandidate();
        await recruitmentpage.rejectCandidate();
        await expect(page.locator(".oxd-toast")).toContainText("Unexpected Error Occurred");

    })

    test("Add Vacancy", async ({page})=>{

        
        const vacanciespage = new Vacancy(page)
        await vacanciespage.clickRecruitmentMenu();
        await vacanciespage.addVacancy();
        await vacanciespage.addVacancyDetails();
        await expect(vacanciespage.vacancyName).toHaveValue("Associate Account Assistant");
        


    })






})