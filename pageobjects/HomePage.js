// First we have to create a class,,,,class and home page name should same
//Every locator shold be in the constructer and we use those locaters variable name on methods

export class HomePage
{
    constructor(page)
    {
        this.page = page
        this.registerLink= page.locator("//*[text()='Register']")
    }

    async goTO()
    {
        await this.page.goto('https://parabank.parasoft.com/parabank/index.htm')
    }

    async clickOnRegisterLink()
    {
        await this.registerLink.click()
    }
}