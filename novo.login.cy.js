describe('Orange hrm Tests', () => {
    it('Login - Success', () => {
      cy.visit('opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type ('admin123')
      cy.get('.oxd-button').click()
      cy.location('pathname').should('equal','web/index.php/dashboard/index')
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard')