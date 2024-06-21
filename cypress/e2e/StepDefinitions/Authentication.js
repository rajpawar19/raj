/// <reference types="Cypress" />
import {
    Given,
    When,
    Then
} from '@badeball/cypress-cucumber-preprocessor';
import commonUtils from '../Base/BasePage';

const utils = new commonUtils();

Given('User is Entered into the Application', () => {
    utils.visit('baseUrl')
})

When('User Enter the Username and Password', () => {
    utils.senKeys("//input[@id='user-name']", 'standard_user');
    cy.qpath("//input[@id='password']").type('secret_sauce');
    utils.click("//input[@id='login-button']");
})

Then('Verify that user has been logged In successfully', () => {
    cy.contains('Swag Labs').should('be.visible');
    cy.log(cy.cqpath("text", "text1", "text2"));
})