/// <reference types="Cypress" />

class basePage {

    visit(url) {
        cy.visit(Cypress.config(url));
    }

    senKeys(path, data) {
        cy.xpath(path).type(data);
    }

    click(path) {
        cy.xpath(path).click({force:true});
    }

    ClearAndSend(path, data){
        const field = cy.xpath(path);
        field.click();
        field.clear();
        field.type(data);
    }

    customXpath(path, value) {
        return path.replace('%value%', value);
    }

    assertText(path, info) {
        cy.get(path).invoke("text").then((text) => {
            expect(text).to.equal(info)
        })
    }

    assertValue(path ,info){
        const field = cy.xpath(path)
        field.each(($elm) => {
            cy.get($elm).invoke("text").then((text) => {
                expect(text).to.equal(info)
            })
        })
        
    }

    splitText(value, operator){
        return value.split(operator);
    }









}
export default basePage