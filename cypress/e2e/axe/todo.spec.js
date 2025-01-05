<reference types="cypress"></reference>

describe('TODO Test', () =>{
    it('should log accessibility failures', ()=>{
        cy.visit('http://todomvc.com/examples/react');
        cy.injectAxe();
        cy.checkA11y();
    })
})