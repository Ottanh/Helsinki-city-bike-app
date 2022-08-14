/// <reference types="cypress" />

describe('Signle station view', () => {
  beforeEach(() => {
    cy.visit('/stations/1')
  })

  it('renders tables and map', () => {
    cy.get('table').should('have.length', 3);
    cy.get('iframe').should('exist');
  })

  it('can link to popular departure station', () => {
    cy.contains('Hernesaarenranta').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/stations/65`)
  })

  it('can link to popular return station', () => {
    cy.contains('Kanavaranta').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/stations/12`)
  })

  it('can link to journey list view', () => {
    cy.contains('Journeys').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/journeys`)
  })

  it('can link to station list view', () => {
    cy.contains('Stations').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/stations`)
  })
})