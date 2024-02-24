describe('Sub-Admin', () => {
  it('should navigate to sub-admin and manage sub-admin', () => {
    // Visit the login page
    cy.visit('http://localhost/newsportal/');
    cy.get(':nth-child(5) > .nav-link').click()

    // Log in (assuming there are fields to type username and password)
    cy.get(':nth-child(1) > .col-xs-12 > .form-control').type('admin');
    cy.get(':nth-child(4) > .col-xs-12 > .form-control').type('Test@123');
    cy.get('.btn').click();

    // Wait for login to complete and redirect to the homepage or the dashboard
    // Then click on the category option
    cy.visit('http://localhost/newsportal/admin/add-subadmins.php')
    cy.get('#sadminusername').type('onik')
    cy.get('#emailid').type('onik22@gmail.com')
    cy.get('#pwd').type('123456')
    cy.get('#submit').click()
    cy.visit('http://localhost/newsportal/admin/manage-subadmins.php')



  });
});
