import {test,expect} from '@playwright/test'

test('login test case',async ({page})=>{
    await page.goto('https://parabank.parasoft.com/parabank/index.htm')
})