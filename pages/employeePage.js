class Employee {

    constructor(page) {

        this.page = page;
        this.pimMenu = page.getByRole('link', {name: "PIM"});
        this.addEmployee = page.getByRole('link', {name: "Add Employee"});
        this.fullName = page.getByPlaceholder("First Name");
        this.middleName = page.getByPlaceholder("Middle Name");
        this.lastName = page.getByPlaceholder("Last Name");
        this.saveButton = page.getByRole("button", {name: "Save"});


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
}


module.exports = Employee;
