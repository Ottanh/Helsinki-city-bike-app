/// <reference types="cypress" />

describe('Station list view', () => {
  beforeEach(() => {
    cy.visit('/stations')
  })

  it('renders station table', () => {
    cy.get('table').should('exist')
    cy.get('tr').should('have.length', 11)
  })

  it('can change to next page', () => {
    cy.contains('next').click();
    cy.contains('1');
    cy.contains('Tapionaukio');
  })

  it('can change to previous page', () => {
    cy.contains('next').click();
    cy.contains('1');
    cy.contains('prev').click();
    cy.contains('0');
    cy.contains('Hanasaari');
  })

  it('can link to single station view', () => {
    cy.contains('Hanasaari').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/stations/501`)
  })

  it('can link to journey list view', () => {
    cy.contains('Journeys').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/journeys`)
  })
})