//This page is the stepdefinition to write the functionality code of the task.
/// <reference types="Cypress" />
import { Given, When, And, Then } from '@badeball/cypress-cucumber-preprocessor';
import commonUtils from '../Base/BasePage';

const utils = new commonUtils();


When('User is Access the mentioned Shop and verify that user reached to the correct Shop', (datatable) => {
    datatable.hashes().forEach(element => {
        //cy.log(element.Shop_Name);
        utils.click(utils.customXpath("//span[contains(text(), '%value%')]//parent::span//parent::a", element.Shop_Link_Name));
        utils.assertText("span.base", element.Shop_Name);
    })
})

When('User applied the below mentioned certain categories filter and veryify that filter are applied Successfully', (datatable) => {
    datatable.hashes().forEach(element => {
        var style = utils.splitText(element.Style, ":");
        utils.click(utils.customXpath("//div[contains(text(), '%value%')]", style[0]));
        utils.click(utils.customXpath("//a[contains(text(), '%value%')]", style[1]));
        cy.wait(1500);
        utils.assertValue("(//span[@class='filter-value'])[1]", style[1]);
        var size = utils.splitText(element.Size, ":");
        utils.click(utils.customXpath("//div[contains(text(), '%value%')]", size[0]));
        utils.click(utils.customXpath("//a[@aria-label='%value%']", size[1]));
        cy.wait(1500);
        utils.assertValue("(//span[@class='filter-value'])[2]", size[1]);
        var price = utils.splitText(element.Price, ":");
        utils.click(utils.customXpath("//div[contains(text(), '%value%')]", price[0]));
        utils.click(utils.customXpath("//span[contains(text(), '%value%')]//parent::a", price[1]));
        cy.wait(1500);
        utils.assertValue("(//span[@class='filter-value'])[3]", price[1] + " and above");
        var color = utils.splitText(element.Color, ":");
        utils.click(utils.customXpath("//div[contains(text(), '%value%')]", color[0]));
        utils.click(utils.customXpath("//div[contains(@option-label, '%value%')]//parent::a", color[1]));
        cy.wait(1500);
        utils.assertValue("(//span[@class='filter-value'])[4]", color[1]);
        var material = utils.splitText(element.Material, ":");
        utils.click(utils.customXpath("//div[contains(text(), '%value%')]", material[0]));
        utils.click(utils.customXpath("//a[contains(text(), '%value%')]", material[1]));
        utils.assertValue("(//span[@class='filter-value'])[5]", material[1]);
    })

})

When('Open the Product Page Increase the Quantity and Add the Product Into Cart Page And Verify that Same Product has been added Successfully', () => {
    cy.get("div.product-item-info>div>strong>a.product-item-link").invoke("text").then((text0) => {
        cy.wait(2000);
        var pl = cy.get("div.product-item-info>div>strong>a.product-item-link");
        pl.click({ force: true });
        cy.wait(2000);
        cy.get("span.base").invoke("text").then((text1) => {
            expect(text0.trim()).to.equal(text1);
        })
    });
    utils.click("//div[contains(@class, 'swatch-attribute-options')]//div[contains(text(), '33')]");
    utils.click("//div[contains(@class, 'swatch-attribute-options')]//div[@option-label='Blue']");
    utils.ClearAndSend("//input[@id='qty']", "11");
    utils.click("//span[contains(text(), 'Add to Cart')]//parent::button");
})

Then('Click On Shopping Cart and Verify the Product Name and Proceed From the Cart page', () => {
    cy.get("span.base").invoke("text").then((product_name) => {
        utils.click("//a[contains(text(), 'shopping cart')]");
        const field = cy.xpath("(//strong[@class='product-item-name']//a)[2]");
        field.each(($elm) => {
            cy.get($elm).invoke("text").then((text) => {
                expect(text).to.equal(product_name);
            })
        })
    })
    utils.click("//span[contains(text(), 'Proceed to Checkout')]//parent::button");
})
