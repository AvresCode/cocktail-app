/// <reference types="cypress" />

describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Renders homepage', () => {
    cy.get('#top-section').should('contain', 'Welcome!');
  });

  it('Navigate to the Cocktails page', () => {
    cy.get('[href="/cocktails"]').click();
    cy.get('h1').should('contain', 'Search Cocktail ');
  });
});
