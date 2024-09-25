describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  context("Hero section", () => {
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

  context("Course section", () => {
    it("Course: Testing Your First Next.js Application", () => {
      cy.getByDataTest("course-0").find("a").contains("Get started").click()
      cy.location("pathname").should("equal", "/testing-your-first-application")
    })
    it("Course: Testing Foundations", () => {
      cy.getByDataTest("course-1").find("a").contains("Get started").click()
      cy.location("pathname").should("equal", "/testing-foundations")
    })
    it("Course: Cypress Fundamentals", () => {
      cy.getByDataTest("course-2").find("a").contains("Get started").click()
      cy.location("pathname").should("equal", "/cypress-fundamentals")
    })
  })
})
