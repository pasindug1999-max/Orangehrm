class Admin {

    constructor(page) {

        this.page = page;
        this.admin = page.getByRole("link", {name:"Admin"});
        this.add = page.getByRole("button", {name:"Add"});
        this.userRole = page.locator(".oxd-select-text-input").nth(0);
        this.dropdownMenu = page.locator(".oxd-select-dropdown");
        this.employeeName = page.getByPlaceholder("Type for hints...");
        this.employeeSelect = page.locator(".oxd-autocomplete-dropdown");
        this.status = page.locator(".oxd-select-text-input").nth(1);
        this.statusDropdown = page.locator(".oxd-select-dropdown");
        this.username = page.locator("input.oxd-input.oxd-input--active").nth(1);
        this.password = page.locator("input[type='password']").nth(0);
        this.confirmPassword = page.locator("input[type='password']").nth(1);
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
        await this.employeeName.fill("James Butler");
        await this.employeeSelect.getByText("James Butler", { exact: true }).click();
        await this.status.click();
        await this.statusDropdown.getByText("Enabled", {exact:true}).click();
        await this.username.fill("james12");
        await this.password.fill("james123@#");
        await this.confirmPassword.fill("james123@#");
        await this.saveButton.click();
        

    }


}

module.exports = Admin;