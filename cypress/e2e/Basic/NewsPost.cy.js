describe('News  Management', () => {
  it('Should navigate to login and  Add News Post', () => {
    // Visit the login page
    cy.visit('http://localhost/newsportal/');
    cy.get(':nth-child(5) > .nav-link').click()

    // Log in (assuming there are fields to type username and password)
    cy.get(':nth-child(1) > .col-xs-12 > .form-control').type('admin');
    cy.get(':nth-child(4) > .col-xs-12 > .form-control').type('Test@123');
    cy.get('.btn').click();

    cy.visit(' http://localhost/newsportal/admin/add-post.php')

    cy.get('#posttitle').type('Austrila vs Newzilend'); // Type into input field with ID 'posttitle'

    cy.get('select').eq(0).select('Sports').should('have.value', '3');
    cy.get('select').eq(1).select('Cricket').should('have.value', '4');
    // Select 'Sports' in the first dropdown


    cy.get('.note-editable').type('Australia won the toss and elected to bat first.'); // Type into element with class 'note-editable'
    cy.wait(5000)
    const filePath = 'download.png';
    cy.get('#postimage').attachFile(filePath);
    cy.wait(20000)
    cy.get('.btn-success').click()

  });
  it('Should navigate to login and  Manage News Post', function () {
    cy.visit('http://localhost/newsportal/admin/manage-posts.php')
  })
});
