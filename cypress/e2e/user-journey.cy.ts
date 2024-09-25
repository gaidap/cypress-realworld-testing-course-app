describe("template spec", () => {
  it("a user can find a course on the home page and complete the courses lessons", () => {
    cy.visit("http://localhost:3000")

    cy.getByDataTest("course-0").find("a").contains("Get started").click()
    cy.location("pathname").should("equal", "/testing-your-first-application")

    cy.assertNextLesson(
      "/testing-your-first-application/app-install-and-overview"
    )

    cy.chooseAnswer(0)
    cy.assertNextLesson(
      "/testing-your-first-application/installing-cypress-and-writing-our-first-test"
    )

    cy.chooseAnswer(0)
    cy.assertNextLesson(
      "/testing-your-first-application/setting-up-data-before-each-test"
    )

    cy.chooseAnswer(0)
    cy.assertNextLesson("/")
  })
})
