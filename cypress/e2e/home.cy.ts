/// <reference types="cypress" />

describe('Home page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('allows user to create a project', () => {
        cy.get('.modal-button').should('contain.text', 'Create Project');
        cy.get('.modal-button').click();
        cy.get('p').should('contain.text', 'Add Project');
        cy.get('.input').type('cypress-test-1');
        cy.get('button').click();
        cy.get('div').contains('cypress-test-1');
    })

    it('allows user to delete a project', () => {
        cy.get('div').contains('cypress-test-1').within(() => {
            cy.get('.btn').click();
        })
        cy.get('div').contains('cypress-test-1').should('not.exist');
    })
})