describe('My First Test', () => {
  it('Title Verify', () => {
    //Visit website
    cy.visit('http://localhost/newsportal/')
    //Title Verify
    cy.title().should('eq', 'News Portal | Home Page')
  })

  it('Login Verify', () => {

    cy.visit('http://localhost/newsportal/')
    cy.get(':nth-child(5) > .nav-link').click()
    cy.get(':nth-child(1) > .col-xs-12 > .form-control').type('admin')
    cy.get(':nth-child(4) > .col-xs-12 > .form-control').type('Test@123')
    cy.get('.btn').click()


  })


})