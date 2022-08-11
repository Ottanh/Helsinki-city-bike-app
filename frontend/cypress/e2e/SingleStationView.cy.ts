/// <reference types="cypress" />

describe('Journey list view', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/stations/1')
  })

  it('renders tables and map', () => {
    cy.get('table').should('have.length', 3);
    cy.get('iframe').should('exist');
  })

  it('can link to popular departure station', () => {
    cy.contains('Hernesaarenranta').click();
    cy.url().should('eq', 'http://localhost:3000/stations/65')
  })

  it('can link to popular return station', () => {
    cy.contains('Kanavaranta').click();
    cy.url().should('eq', 'http://localhost:3000/stations/12')
  })

  it('can link to journey list view', () => {
    cy.contains('Journeys').click();
    cy.url().should('eq', 'http://localhost:3000/journeys')
  })

  it('can link to station list view', () => {
    cy.contains('Stations').click();
    cy.url().should('eq', 'http://localhost:3000/stations')
  })
})