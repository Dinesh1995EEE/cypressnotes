// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload';

import 'cypress-iframe';

require('@4tw/cypress-drag-drop')

 Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})



  Cypress.Commands.add('testautomation_login',()=>{

        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.title().should('contain','Practice Test Automation')
        cy.contains('Test login').should('be.visible')
        cy.get('input#username').type('student')
        cy.get('input#password').type('Password123')
        cy.get('.btn').click()

        cy.url().should('includes','successfully/')
        cy.contains('successfully logged in').should('be.visible')
        cy.contains('Log out').should('be.visible')
        cy.get('.has-very-dark-gray-background-color').should('be.visible')

        })

        import 'cypress-mochawesome-reporter/register';
