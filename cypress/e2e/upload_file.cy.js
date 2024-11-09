describe('upload file',() =>{
	it("login with valid credentials", () => {
		cy.visit('/auth/login')
		cy.title().should('eq', 'OrangeHRM')
		cy.get('input[placeholder="Username"]').type('Admin')
		cy.get('input[placeholder="Password"]').type('admin123')
		cy.get('button[type="submit"]').click()
		cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').contains('Dashboard')
		cy.log('Login Successful')

		// Upload file
		cy.get(':nth-child(2) > .oxd-main-menu-item').click()
		cy.get('.--parent > .oxd-topbar-body-nav-tab-item').click()
		cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-link').click()
		cy.get('input[type="file"]').selectFile('/home/sudip/Downloads/importData.csv',{force:true})
		cy.log('File uploaded successfully')

	  });
})