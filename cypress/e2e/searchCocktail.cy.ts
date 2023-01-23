/// <reference types="cypress" />

it("Search page", () => {
  cy.visit("http://localhost:3000/cocktails");
  cy.get(".input-field").type("rose");
  // cy.get(".input-field").type("amaretto rose{Enter}");
  cy.contains("Submit").click();
  cy.get(".cocktail-container").should("have.length", 7);
  cy.wait(2000);
  cy.get(":nth-child(3) > :nth-child(3) > .button-card-result").click();
  cy.get("h1").should("have.text", "Amaretto Rose");
});
