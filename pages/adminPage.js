class Admin {

    constructor(page) {

        this.page = page;
        this.admin = page.geByRole("link", {name:"Admin"});
        this.add = page.getByRole("button", {name:"Add"});
        this.userRole = page.locator(".select-text-input").first();
        this.dropdownMenu = page.locator(".oxd-select-dropdown");
        this.employeeName = getByPlaceholder("Type for hints...");
        this.employeeSelect = page.locator(".oxd-select-dropdown");
        this.status = page.locator(".select-text-input").second();
        this.statusDropdown = page.locator(".oxd-select-dropdown");
        this.username = page.locator("input.oxd-input.oxd-input--active").second();
        this.password = page.locator("input.oxd-input.oxd-input--active").third();
        this.confirmPassword = page.locator("input.oxd-input.oxd-input--active").second();
        this.saveButton = page.getByRole("button", {name:"Save"});


    
    }

    async clickAdmin() {

        await this.admin.click();
    }

    async addAdmin() {
        await this.add.click();
    }

    async addAdminDetails() {

        await this.userRole.click();
        await this.dropdownMenu.getByText("Admin", {exact:true}).click();
        await this.employeeName.fill("Paul Wood Smith");
        await this.employeeSelect.click();
        await this.status.click();
        await this.statusDropdown.getByText("Enabled", {exact:true}).click();
        await this.username("paul12");
        await this.password("paul123@#");
        await this.confirmPassword("paul123@#");
        await this.saveButton.click();
        await this.saveButton.click();

    }


}