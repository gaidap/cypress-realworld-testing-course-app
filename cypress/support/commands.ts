/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

declare namespace Cypress {
  interface Chainable {
    getByDataTest(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>
    assertNextLesson(nextLessonPath: string): Chainable<JQuery<HTMLElement>>
    chooseAnswer(answerIndex: number): Chainable<JQuery<HTMLElement>>
  }
}

Cypress.Commands.add("getByDataTest", (selector: string) => {
  return cy.get(`[data-test=${selector}]`)
})

Cypress.Commands.add("assertNextLesson", (nextLessonPath: string) => {
  cy.getByDataTest("next-lesson-button").should("exist").click()
  cy.location("pathname").should("eq", nextLessonPath)
})

Cypress.Commands.add("chooseAnswer", (answerIndex: number) => {
  cy.getByDataTest(`challenge-answer-${answerIndex}`).click()
})
