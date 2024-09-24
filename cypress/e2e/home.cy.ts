describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it("the h1 should contain the correct text", () => {
    cy.getByDataTest("hero-heading").should(
      "contain",
      "Testing Next.js Applications with Cypress"
    )
  })

  it("the features on the homepage are correct", () => {
    cy.get("dt")
      .eq(0)
      .contains(/4 Courses/i)
    cy.get("dt")
      .eq(1)
      .contains(/25\+ Lessons/i)
    cy.get("dt")
      .eq(2)
      .contains(/Free and Open Source/i)
  })
})
