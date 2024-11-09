/// <reference types="Cypress" />


describe("login test", () => {
	
	  it('login with invalid credentials', () =>{
		cy.visit('/auth/login')
		cy.title().should('eq', 'OrangeHRM')
		cy.get('input[placeholder="Username"]').type('Admin')
		cy.get('input[placeholder="Password"]').type('admin')
		cy.get('button[type="submit"]').click()
		cy.get('div[role="alert"]').contains('Invalid credentials')
		cy.log('Username or Password are not valid')
		cy.reload(true)
	
	  })
  it("login with valid credentials", () => {
	cy.visit('/auth/login')
	cy.title().should('eq', 'OrangeHRM')
	cy.get('input[placeholder="Username"]').type('Admin')
	cy.get('input[placeholder="Password"]').type('admin123')
	cy.get('button[type="submit"]').click()
	cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').contains('Dashboard')
	cy.log('Login Successful')
  });



});