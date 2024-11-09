///  <reference types = 'Cypress'/>

describe('logout test case', () =>{

	it("login with valid credentials", () => {
		cy.visit('/auth/login')
		cy.title().should('eq', 'OrangeHRM')
		cy.get('input[placeholder="Username"]').type('Admin')
		cy.get('input[placeholder="Password"]').type('admin123')
		cy.get('button[type="submit"]').click()
		cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').contains('Dashboard')
		cy.log('Login Successful')

		cy.get('.oxd-userdropdown-tab').click()
		cy.get(':nth-child(4) > .oxd-userdropdown-link').should('have.text', 'Logout').click({multiple:false}).location('/').then(()=>{
			cy.log('logout')
		})
		
	  });
})