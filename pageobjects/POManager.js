import { HomePage } from "./HomePage";
import { RegisterationPage } from "./RegisterationPage";

export class POManager
{
    constructor(page){
        this.page =page
        this.homepage = new HomePage(this.page);
        this.registerpage = new RegisterationPage(this.page);
    }

      getHomePage()
      {
        return this.homepage
      }

      getRegisterationPage()
      {
        return this.registerpage
      }
}