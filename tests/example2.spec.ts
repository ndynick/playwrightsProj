import { test, expect } from '@playwright/test';

test.beforeEach(async({page}) => {
await page.goto('https://www.selenium.dev/selenium/web/web-form.html')

});

test('Test locator', async({page}) => {
	
//can use let, var or const to declare variable
  //const usernameTextBox = page.locator('#identifierId'); //using id is #abcid
  
  // Locate by ID only
  //await page.locator('#login-button').click();
  
  //using locate by tag
  //await page.locator('button').click();
  const textArea = await page.locator('textarea[name="my-textarea"]');
  await textArea.fill('testTest123');
  
  // Locate by class only
  //await page.locator('.btn-primary').click();
  
  //User-facing locators
  //await page.getByRole('button')
  
  
  // await usernameTextBox.fill('abc@gmail.com')
  // await usernameTextBox.clear()
  // await usernameTextBox.pressSequentially('xyz@gmail.com')
  // await page.screenshot({path: 'screenshots/scEmailTextBox.png'})

  // const inputValue = await usernameTextBox.inputValue()
  // expect(inputValue).toEqual('xyz@gmail.com')

  // await expect(usernameTextBox).toHaveValue('xyz@gmail.com')

  //await page.close()

});