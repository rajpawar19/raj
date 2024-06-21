//This page is the stepdefinition to write the functionality code of the task.
/// <reference types="Cypress" />
import { Given, When, And, Then } from '@badeball/cypress-cucumber-preprocessor';
import commonUtils from '../Base/BasePage';
const utils = new commonUtils();

Given('User open the google chrome and go to magneto application url', () => {
    utils.visit('baseUrl')
})

When('Login Into the Application with Correct Username and Password', () => {
    utils.click("//div[@class='panel header']//a[contains(text(), 'Sign In')]");
    utils.senKeys("//input[@id='email']", Cypress.config('username'));
    utils.senKeys("(//input[@id='pass'])[1]", Cypress.config('password'));
    utils.click("(//button[@id='send2'])[1]");
})

