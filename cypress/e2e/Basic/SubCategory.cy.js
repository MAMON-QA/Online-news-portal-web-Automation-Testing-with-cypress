describe('Category Management', () => {
  it('should navigate to login and manage category', () => {
    // Visit the login page
    cy.visit('http://localhost/newsportal/');
    cy.get(':nth-child(5) > .nav-link').click()

    // Log in (assuming there are fields to type username and password)
    cy.get(':nth-child(1) > .col-xs-12 > .form-control').type('admin');
    cy.get(':nth-child(4) > .col-xs-12 > .form-control').type('Test@123');
    cy.get('.btn').click();

    cy.visit('http://localhost/newsportal/admin/add-subcategory.php')
    cy.get('select').select('Sports').should('have.value', '3')
    cy.wait(2000);


    cy.get(':nth-child(2) > .col-md-10 > .form-control').type('Ticket')
    cy.get(':nth-child(3) > .col-md-10 > .form-control').type('Ticket is best game of our bangladesh thats way i love my Sports is Ticket')
    cy.get('.btn').click()
    cy.visit('http://localhost/newsportal/admin/manage-subcategories.php')







  });
});
