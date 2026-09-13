class Recruitment {

    constructor(page) {
        this.page = page;
        this.recruitmentMenu = page.getByRole("link", {name: "Recruitment"});
        this.add = page.getByRole("button", {name:"Add"});
        this.firstName = page.getByPlaceholder("First Name");
        this.middleName = page.getByPlaceholder("Middle Name");
        this.lastName = page.getByPlaceholder("Last Name");
        this.selectVacancy = page.locator('.oxd-select-text-input').first();
        this.dropdownMenu = page.locator('.oxd-select-dropdown');
        this.email = page.getByPlaceholder("Type here").nth(0);
        this.contact = page.getByPlaceholder("Type here").nth(1);
        this.resume = page.locator("input[type='file']");
        this.keywords = page.getByPlaceholder("Enter comma seperated words...");
        this.notes = page.getByPlaceholder("Type here").nth(2);
        this.consent = page.locator(".oxd-checkbox-input");
        this.save = page.getByRole("button", {name: "Save"});

    }


    async clickRecruitmentMenu() {

        await this.recruitmentMenu.click();

    }

    async addCandidate() {

        await this.add.click();
    }

    async addCandidateDetails() {

        await this.firstName.fill("Peter");
        await this.middleName.fill("Jones");
        await this.lastName.fill("Smith");
        await this.selectVacancy.click();
        await this.dropdownMenu.getByText("Junior Account Assistant", { exact: true }).click();
        await this.email.fill("peter123@gmail.com");
        await this.contact.fill("0912345124");
        await this.resume.setInputFiles("D:/QA/Automation Testing/Orange HRM/functionalsample.pdf");
        await this.keywords.fill("Resume, Interview, Job");
        await this.notes.fill("Job resume");
        await this.consent.click();
        await this.save.click();
;
        
        
       
    }
}

module.exports = Recruitment;