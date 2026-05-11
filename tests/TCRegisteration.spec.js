//import {test,expect} from '@playwright/test'
// import { HomePage } from '../pageobjects/HomePage'
// import { RegisterationPage } from '../pageobjects/RegisterationPage'


// test('registrationtestcase',async ({page})=>{

//   const homepage = new HomePage(page) // create a object for evry pageobjects to call the method
//   homepage.goTO()
//   homepage.clickOnRegisterLink()

//   const registerpage = new RegisterationPage(page)
//   registerpage.registerUser('sandy','raki','delhi','saket','110011','123456','123445','javasc4','abcd')
//   registerpage.clickOnRegisterbutton()
//})

//ABOVE is used for without POManager

// now using POManager so no need to create a object for home page and regi page

import { POManager } from '../pageobjects/POManager'

//import data from '../utils/parabank.json' (((((((UTILS DATA)))))))


// for (const user of data.testdata) {

//   test(`regusingPoManager ${user.username}`, async ({ page }) => {

//     const poManager = new POManager(page)

//     const homepage = poManager.getHomePage()
//     await homepage.goTo()
//     await homepage.clickOnRegisterLink()

//     const registerpage = poManager.getRegisterationPage()
//   //await registerpage.registerUser('sandy','raki','delhi','saket','110011','123456','123445','javasc4','abcd')  //hotcoded values

//     await registerpage.registerUser(
//       user.firstname,
//       user.lastname,
//       user.address,
//       user.city,
//       user.zipcode,
//       user.phonenumber,
//       user.css,
//       user.username,
//       user.password,
//       user.confirmpassword
//     )
//   await registerpage.clickOnRegisterbutton()

//     // Example assertion instead of waitForTimeout
//     await expect(page).toHaveURL(/.*success.*/)
//   })
// }

//   ((((((((((((((((((((((((((((USing fixtures data))))))))))))))))))))))))))))

import { customtest as test, expect } from '../fixtures/testfixture' 


  test('regusingPoManagerfixtures', async ({ page,testdataForregistration }) => {

    const poManager = new POManager(page)

    const homepage = poManager.getHomePage()
    await homepage.goTo()
    await homepage.clickOnRegisterLink()

    const registerpage = poManager.getRegisterationPage()
  //await registerpage.registerUser('sandy','raki','delhi','saket','110011','123456','123445','javasc4','abcd')  //hotcoded values

    await registerpage.registerUser(
      testdataForregistration.firstname,
      testdataForregistration.lastname,
      testdataForregistration.address,
      testdataForregistration.city,
      testdataForregistration.state,
      testdataForregistration.zipcode,
      testdataForregistration.phonenumber,
      testdataForregistration.ssn,
      testdataForregistration.username,
      testdataForregistration.password,
      testdataForregistration.confirmpassword
    )
  await registerpage.clickOnRegisterbutton()

    // Example assertion instead of waitForTimeout
    await expect(page).toHaveURL(/.*success.*/)
  })
