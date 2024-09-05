describe('Login Form Validation', () => {
  it('error', () => {
    cy.visit('http://localhost:5173/');
    cy.get('[data-cy="email"]').type('dasdasdasdasda');
    cy.get('.invalid-feedback').should('contain', 'Please enter a valid email address');
    cy.get('[data-cy="password"]').type('123');
    cy.get('.invalid-feedback').should('contain', 'Password must be at least 4 characters long');
    cy.get('[data-cy="button"]').should('be.disabled');
  });

  it('success', () => {
    cy.visit('http://localhost:5173/');
    cy.get('[data-cy="email"]').type('alperenm@example.com');
    cy.get('[data-cy="password"]').type('password123');
    cy.get('[data-cy="terms"]').click();
    cy.get('[data-cy="button"]').click();
  });
 it('password', () => {
    cy.visit('http://localhost:5173/');
    cy.get('[data-cy="email"]').type("alperen@gmail.com");
    cy.get('[data-cy="password"]').type("123");
    cy.get('.invalid-feedback').should('contain', 'Password must be at least 4 characters long');
 });
    it('email', () => {
      cy.visit('http://localhost:5173/');
      cy.get('[data-cy="email"]').type("alperengmailcom");
      cy.get('[data-cy="password"]').type("1234");
      cy.get('.invalid-feedback').should('contain', 'Please enter a valid email address');
    });
    it('button', () => {
      cy.visit('http://localhost:5173/');
      cy.get('[data-cy="email"]').type("alperengmailcom");
      cy.get('[data-cy="password"]').type("12");
      cy.get('.invalid-feedback').should('contain', 'Please enter a valid email address');
      cy.get('.invalid-feedback').should('contain', 'Password must be at least 4 characters long');
      cy.get('[data-cy="button"]').should('be.disabled');
    });

});
