class Employee {

    constructor(page) {

        this.page = page;
        this.pimMenu = page.getByRole('link', {name: "PIM"});
        this.addEmployee = page.getByRole('link', {name: "Add Employee"});
        this.fullName = page.getByPlaceholder("First Name");
        this.middleName = page.getByPlaceholder("Middle Name");
        this.lastName = page.getByPlaceholder("Last Name");
        this.saveButton = page.getByRole("button", {name: "Save"});
        this.employeeName = page.getByPlaceholder("Type for hints...").first();
        this.employeeId = page.locator("//input[@class='oxd-input oxd-input--active']").nth(1)
        this.searchButton = page.getByRole("button",{name:"Search"} );
        this.selectEmployeeDetails = page.getByText("Paul Wood", { exact: true });
        this.editMiddleName = page.getByPlaceholder("Middle Name");
        this.saveEdit = page.getByRole("button", {name: "Save"}).first();
        this.deleteIcon = page.getByRole("button").filter({has: page.locator("i.bi-trash")});
        this.deleteButon = page.getByRole("button", {name: "Yes, Delete"});




    }


    async clickPIM() {

        await this.pimMenu.click();
    }


    async clickAddEmployee() {

        await this.addEmployee.click();
    }

    async addEmployeeDetails() {

        await this.fullName.fill("Paul");
        await this.middleName.fill("Wood");
        await this.lastName.fill("Smith");
        await this.saveButton.click();

    }

    async searchEmployee() {

        await this.employeeName.fill("Paul Wood");
        await this.searchButton.click();
    }

    async searchEmployeeById() {
        await this.employeeId.fill("0100");
        await this.searchButton.click();
    }

    async openEmployeeDetails() {

        await this.selectEmployeeDetails.click();
    }

    async editEmployeeDetails() {

        await this.editMiddleName.fill("Max");
        await this.saveEdit.click();
    }

    async deleteEmployee() {

        await this.deleteIcon.click();
        await this.deleteButon.click();
    }

    
}


module.exports = Employee;
