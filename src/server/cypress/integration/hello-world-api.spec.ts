describe('Hello World API', () => {
  it('returns text', () => {
    cy.request('GET', '/api/hello-world')
      .its('headers')
      .its('content-type')
      .should('include', 'text/html; charset=utf-8')
  })

  it('returns Hellow World! text', () => {
    cy.request('GET', '/api/hello-world')
      .should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.eq('Hello world!')
      })
  })

  it('should ', function () {
    cy.request('POST', '/deposit', { amount: 288 })
      .should((response) => {
        expect(response.status).to.eq(200)
      })
  })
})
