describe('Forgot Password ', function () {
  it('Forgot Password', function () {
    // Visit the login page
    cy.visit('http://localhost/newsportal/');
    cy.get(':nth-child(5) > .nav-link').click()

    // Log in (assuming there are fields to type username and password)
    cy.get(':nth-child(1) > .col-xs-12 > .form-control').type('admin');
    cy.get(':nth-child(4) > .col-xs-12 > .form-control').type('Test@123');
    cy.get('.btn').click();
    cy.get('.img-circle').click()
    cy.get('.dropdown-menu > :nth-child(2) > a').click()

  })
})