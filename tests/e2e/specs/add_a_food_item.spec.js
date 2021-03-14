describe("Creating a food inventory item", () => {
  it("should display a food inventory item", () => {
    cy.visit("/");

    cy.get("[data-test='foodName']").type("ham");

    cy.get("[data-test='createButton']").click();

    cy.get("[data-test='foodName']").should("have.value", "");

    cy.contains("ham");
  });
});
