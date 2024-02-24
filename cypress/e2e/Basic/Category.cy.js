describe('Category Management', () => {
  it('should navigate to login and manage category', () => {
    // Visit the login page
    cy.visit('http://localhost/newsportal/');
    cy.get(':nth-child(5) > .nav-link').click()

    // Log in (assuming there are fields to type username and password)
    cy.get(':nth-child(1) > .col-xs-12 > .form-control').type('admin');
    cy.get(':nth-child(4) > .col-xs-12 > .form-control').type('Test@123');
    cy.get('.btn').click();

    // Wait for login to complete and redirect to the homepage or the dashboard
    // Then click on the category option
    cy.visit('http://localhost/newsportal/admin/add-category.php')
    cy.get(':nth-child(1) > .col-md-10 > .form-control').type('Education ')
    cy.get(':nth-child(2) > .col-md-10 > .form-control').type('Education" refers to the process of facilitating learning or the acquisition of knowledge, skills, values, beliefs, and habits. It can take place formally through schools, colleges, universities, and other educational institutions, as well as informally through experiences and interactions in daily life')
    cy.get('.btn').click()
    cy.visit('http://localhost/newsportal/admin/manage-categories.php')
    cy.get('#addToTable > .mdi').click()


  });
});
