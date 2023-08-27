// https://on.cypress.io/api

describe('My First Test', () => {
  it('visits the app root url by hossein', () => {
    cy.visit('/')
    cy.contains('h1', 'You did it!')
  })
})
