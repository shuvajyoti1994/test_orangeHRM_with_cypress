describe('Edit my profile', ()=>{
	it("login with valid credentials", () => {
		cy.visit('/auth/login')
		cy.title().should('eq', 'OrangeHRM')
		cy.get('input[placeholder="Username"]').type('Admin')
		cy.get('input[placeholder="Password"]').type('admin123')
		cy.get('button[type="submit"]').click()
		cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').contains('Dashboard')
		cy.log('Login Successful')

		// edit my profile
		

		cy.get(':nth-child(6) > .oxd-main-menu-item').click().then(()=>{
			cy.get('.orangehrm-edit-employee-content > :nth-child(1) > .oxd-text--h6').should('have.text', 'Personal Details')
		})

		// Add work experience
		cy.get(':nth-child(9) > .orangehrm-tabs-item').click()
		cy.get(':nth-child(2) > :nth-child(1) > .orangehrm-action-header > .oxd-button').click()
		cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Google')
		cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('SDE')
		cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').type('2020-10-10')
		cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').type('2024-11-11')
		cy.get('.oxd-button--secondary').click()
	  });
})