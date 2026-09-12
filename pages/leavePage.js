class Leave {

    constructor(page) {

        this.page = page;
        this.leaveMenu = page.getByRole("link", {name: "Leave"});
        this.apply = page.getByRole("link", {name: "Apply"});
        this.dropdown = page.locator(".oxd-select-text-input");
        this.leaveType = page.getByText("US - Bereavement", {exact:true});
        this.fromDate = page.getByPlaceholder("yyyy-dd-mm")
        this.selectStartDate = page.locator("oxd-calendar-date");
        this.toDate = page.getByPlaceholder("yyyy-dd-mm");
        this.selectLastDate = page.locator("oxd-calendar-date");
        this.comment = page.locator("textarea");
    }

    async clickLeaveMenu() {

        await this.leaveMenu.click();

    }

    async selectApply() {

        await this.apply.click();

    }

    async selectLeaveType() {

        await this.dropdown.click();
        await this.leaveType.click();
    }

    async selectFromDate() {

        await this.fromDate.click();
        await this.selectStartDate.getByText("14").click();

    }

    async selectToDate() {

        await this.toDate.click();
        await this.selectLastDate.getByText("17").click();
    }

    async typeComments() {

        await this.comment.fill("Sample test leave");

    }


}

module.exportes = Leave;

