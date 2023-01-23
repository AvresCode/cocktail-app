/// <reference types="cypress" />

describe("Search page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/cocktails");
  });

  it("Search for a cocktail and go to a cocktail detail page", () => {
    cy.get(".input-field").type("rose");
    // cy.get(".input-field").type("amaretto rose{Enter}");
    cy.contains("Submit").click();
    cy.get(".cocktail-container").should("have.length", 7);
    cy.wait(2000);
    cy.get(":nth-child(3) > :nth-child(3) > .button-card-result").click();
    cy.get("h1").should("have.text", "Amaretto Rose");
  });
});
