/// <reference types="cypress" />

describe('Axe Test', () =>{
    it('should log accessibility failures', ()=>{
        cy.visit('https://broken-workshop.dequelabs.com/');
        cy.injectAxe();
        cy.checkA11y();
    });
});