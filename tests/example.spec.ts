import {  test, expect } from '@playwright/test';


test('Homepage has correct title and URL', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/#');

  // const title = await page.title();
  // console.log('Page Title:', title);

  await expect(page).toHaveTitle("STORE");
  await expect(page).toHaveURL('https://www.demoblaze.com/#')
});

test('Signup Window Poping and all elements are there', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/#');

  const signinButton = page.locator('#signin2');
  await signinButton.click();

  //Sign in is written in popup window
  const signinModal = page.locator('#signInModalLabel'); 
  await expect(signinModal).toBeVisible();

  //username field is present
  const usernameField = page.locator('label[for="sign-username"]');
  await expect(usernameField).toBeVisible();

  //password field is present
  const passwordField = page.locator('label[for="sign-username"]+ input.form-control');
  await expect(passwordField).toBeVisible();
});

test('Login Window Poping and all elements are there', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/#');

  const loginButton = page.locator('#login2');
  await loginButton.click();

  //Log in is written in login window
  const loginModal = page.locator('#logInModalLabel'); 
  await expect(loginModal).toBeVisible();

  //username field is present
  const usernameField = page.locator('label[for="log-name"]');
  await expect(usernameField).toBeVisible();

  //password field is present
  const passwordField = page.locator('label[for="log-pass"]+ input.form-control');
  await expect(passwordField).toBeVisible();
});


test("Loin Credentials", async ({ page })=>{
  await page.goto('https://www.demoblaze.com/#');

  const loginButton = page.locator('#login2');
  await loginButton.click();

  const loginField = page.locator('#logInModalLabel'); 
  await expect(loginField).toBeVisible();

  const usernameField = page.locator('#loginusername');
  await usernameField.fill('Vivek.vivek');

  const passwordField = page.locator('#loginpassword');
  await passwordField.fill('123');

  const submitButton = page.locator('button[onclick="logIn()"]'); 
  await submitButton.click();

  const LogoutElement = page.locator('#logout2'); 
  await expect(LogoutElement).toBeVisible();

})



test('All Catogories are desplayed', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/#');

  const phoneCategory = page.locator('text=Phones');
  await expect(phoneCategory).toBeVisible();

  const laptopCategory = page.locator('text=Laptops'); 
  await expect(laptopCategory).toBeVisible();

  const monitorCategory = page.locator('text=Monitors'); 
  await expect(monitorCategory).toBeVisible();
});

