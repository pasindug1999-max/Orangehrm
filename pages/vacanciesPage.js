

class Vacancy {

    constructor(page) {

        this.page = page;
        this.recruitmentMenu = page.getByRole("link", {name: "Recruitment"});
        this.vacancies = page.getByRole("link", {name: "Vacancies"});
        this.add = page.getByRole("button", {name: "Add"});
        this.vacancyName = page.locator("//input[@class='oxd-input oxd-input--active']").nth(1);
        this.selectTitle =  page.locator(".oxd-select-text-input");
        this.dropdownTitle = page.locator(".oxd-select-dropdown");
        this.description = page.getByPlaceholder("Type description here");
        this.hiringManager = page.getByPlaceholder("Type for hints...");
        this.selecthiringManager = page.locator(".oxd-autocomplete-dropdown");
        this.positions = page.locator("//input[@class='oxd-input oxd-input--active']").nth(2);
        this.saveButton =  page.getByRole("button", {name: "Save"});

    }

    async clickRecruitmentMenu() {

        await this.recruitmentMenu.click();
        await this.vacancies.click();

    }

    async addVacancy() {

        await this.add.click();

    }

    async addVacancyDetails() {

        await this.vacancyName.fill("Associate Account Assistant");
        await this.selectTitle.click();
        await this.dropdownTitle.getByText("Account Assistant", {extact : true}).click();
        await this.description.fill("Vacancy Added");
        await this.hiringManager.fill("Timothy Lewis Amiano");
        await this.selecthiringManager.getByText("Timothy Lewis Amiano", { exact: true }).first().click();
        await this.positions.fill("2");
        await this.saveButton.click();
        
        

        
    }






}

module.exports = Vacancy;