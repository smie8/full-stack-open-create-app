describe('Messages', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:8000')
    cy.contains('Messages')
  })

  it('new message can be created', function () {
    cy.visit('http://localhost:8000')
    cy.get('a').click()
    cy.get('#message').type('foo bar')
    cy.get('button').click()
    cy.contains('foo bar')
  })
})
