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
    cy.contains('Unioninkatu').eq(0).click();
    cy.url().should('eq', 'http://localhost:3000/stations/11')
  })

  it('can link to popular return station', () => {
    cy.contains('Unioninkatu').eq(1).click();
    cy.url().should('eq', 'http://localhost:3000/stations/11')
  })

})