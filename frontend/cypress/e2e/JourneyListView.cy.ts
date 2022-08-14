/// <reference types="cypress" />

describe('Journey list view', () => {
  beforeEach(() => {
    cy.visit('')
  })

  it('renders journey table', () => {
    cy.get('table').should('exist')
    cy.get('tr').should('have.length', 11)
  })

  it('can change to next page', () => {
    cy.contains('next').click();
    cy.contains('1');
    cy.contains('Käpylä station');
  })

  it('can change to previous page', () => {
    cy.contains('next').click();
    cy.contains('1');
    cy.contains('prev').click();
    cy.contains('0');
    cy.contains('Laajalahden aukio');
  })

  it('can link to departure station', () => {
    cy.contains('Laajalahden aukio').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/stations/94`)
  })

  it('can link to return station', () => {
    cy.contains('Teljäntie').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/stations/100`)
  })

  it('can link to station list view', () => {
    cy.contains('Stations').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/stations`)
  })
})