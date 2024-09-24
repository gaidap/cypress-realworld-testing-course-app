describe("Newsletter Subscribe Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it("alows users to subscribe to the email list", () => {
    cy.getByDataTest("email-input").type("tom@aol.com")
    cy.getByDataTest("submit-button").click()
    cy.getByDataTest("success-message").should("contain", "tom@aol.com")
  })

  it("does NOT allow an invalid email address", () => {
    cy.getByDataTest("email-input").type("tom")
    cy.getByDataTest("submit-button").click()
    cy.getByDataTest("success-message").should("not.exist")
  })

  it("does NOT allow an empty email address", () => {
    cy.getByDataTest("submit-button").click()
    cy.getByDataTest("success-message").should("not.exist")
  })

  it("does NOT allow a duplicate email address", () => {
    cy.getByDataTest("email-input").type("john@example.com")
    cy.getByDataTest("submit-button").click()
    cy.getByDataTest("success-message").should("not.exist")
    cy.getByDataTest("server-error-message")
      .should("contain", "john@example.com")
      .and("contain", "already exists")
  })
})
