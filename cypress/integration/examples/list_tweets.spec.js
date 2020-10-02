/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:8080/')
    })
  
    // https://on.cypress.io/interacting-with-elements
  
    it('render tweet list', () => {
      // https://on.cypress.io/type
      cy.get('.loading', { timeout: 0 })
        .should('be.visible')
    
        cy.get('.avatar').click();


        cy.get('.container-snackbar')
        .should('be.visible')
    })
  
   
  })
  