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
        this.employeeNameSearch = page.getByPlaceholder("Type for hints...");
        this.employeeSearch = page.locator(".oxd-autocomplete-dropdown");
        this.searchButton = page.getByRole("button", {name:"Search"});
        this.userRow = page.locator(".oxd-table-row");
        this.editButton = this.userRow.getByRole("button").filter({ has: page.locator("i.bi-pencil-fill")});
        this.editUsername = page.locator("input").nth(2);
        this.saveEdit = page.getByRole("button", {name:"Save"});




    
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
        await this.employeeName.fill("Thomas Kutty Benny");
        await this.employeeSelect.getByText("Thomas Kutty Benny", { exact: true }).click();
        await this.status.click();
        await this.statusDropdown.getByText("Enabled", {exact:true}).click();
        await this.username.fill("Thomas12");
        await this.password.fill("thomas123@#");
        await this.confirmPassword.fill("thomas123@#");
        await this.saveButton.click();

        

    }

    async searchEmployee() {

        await this.employeeNameSearch.fill("Thomas Kutty Benny");
        await this.employeeSearch.getByText("Thomas Kutty Benny", { exact: true }).click();
        await this.searchButton.click();
    }

    async editAdminDetails() {

        await this.editButton.click();
         await this.editUsername.click();
        await this.editUsername.press("Backspace");
        await this.editUsername.press("Backspace");
        await this.editUsername.pressSequentially("25");
        await this.saveEdit.click();

    }


}

module.exports = Admin;