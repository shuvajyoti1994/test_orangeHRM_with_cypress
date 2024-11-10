describe('Forgot pasword test', () => {
	it('forgot password', () => {
		cy.visit("/auth/login");
    	cy.title().should("eq", "OrangeHRM");
		cy.get('.oxd-text.oxd-text--p.orangehrm-login-forgot-header').click()
		cy.get('.oxd-text--h6').should('have.text', 'Reset Password')
		cy.get('input[name="username"]').type('Admin')
		cy.get('.oxd-form').submit()

	})
})