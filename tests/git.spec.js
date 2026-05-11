import {test,expect} from '@playwright/test'

test('login test case',async ({page})=>{
    await page.goto('https://parabank.parasoft.com/parabank/index.htm')
    await page.getByLabel('Username').fill('john')
    await page.getByLabel('Password').fill('demo')
    await page.getByRole('button', { name: 'Log In' }).click()
    await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/overview.htm')
})