class Login {
    
    constructor(page) {

        this.page = page;
        this.username = page.getByPlaceholder("Username");
        this.password = page.getByPlaceholder("Password");
        this.loginButton = page.getByRole('button', {name: "Login"});
        this.dropdownmenu = page.getByAltText("profile picture");
        //this.dropdown = page.locator(".oxd-dropdown-menu");
        this.logout = page.getByRole('menuitem', { name: 'Logout' });

    }

    async loginToApp(username,password){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }

    async logoutFromApp(){
        await this.dropdownmenu.click();
        //await this.dropdown.click();
        await this.logout.click();
    }
}

module.exports = Login;