export class RegisterationPage 
{
    constructor(page)
    {
        this.page = page
        this.firstName = page.locator("//input[@id='customer.firstName']")
        this.lastName = page.locator("//input[@id='customer.lastName']")
        this.address = page.locator("//input[@id='customer.address.street']")
        this.city = page.locator("//input[@id='customer.address.city']")
        this.state = page.locator("//input[@id='customer.address.state']")
        this.zipCode = page.locator("//input[@id='customer.address.zipCode']")
        this.phoneNumber = page.locator("//input[@id='customer.phoneNumber']")
        this.ssnNumber = page.locator("//input[@id='customer.ssn']")
        this.userName = page.locator("//input[@id='customer.username']")
        this.password = page.locator("//input[@id='customer.password']")
        this.confirmPassword = page.locator("//input[@id='repeatedPassword']")
        this.registerTab = page.locator("//*[@id='customerForm']/table/tbody/tr[13]/td[2]")

    }

    async registerUser(fname,lname,address,city,state,zipcode,phonenumber,ssn,username,pass)
    {
        await this.firstName.fill(fname)
        await this.lastName.fill(lname)
        await this.address.fill(address)
        await this.city.fill(city)
        await this.state.fill(state)
        await this.zipCode.fill(zipcode)
        await this.phoneNumber.fill(phonenumber)
        await this.ssnNumber.fill(ssn)
        await this.userName.fill(username)
        await this.password.fill(pass)
        await this.confirmPassword(pass)
    }

    async clickOnRegisterbutton()
    {
    await this.registerTab.click()

    }
    
}