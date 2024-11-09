describe('delete employee test', () =>{
	it("login with valid credentials", () => {
		cy.visit('/auth/login')
		cy.title().should('eq', 'OrangeHRM')
		cy.get('input[placeholder="Username"]').type('Admin')
		cy.get('input[placeholder="Password"]').type('admin123')
		cy.get('button[type="submit"]').click()
		cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').contains('Dashboard')
		cy.log('Login Successful')

		// Delete employee
		cy.get(':nth-child(2) > .oxd-main-menu-item').click()
		cy.get(':nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(2)').click()
		cy.get('.oxd-button--label-danger').click()
		cy.log('Employee deleted successfully')

	  });
})