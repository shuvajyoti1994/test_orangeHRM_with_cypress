describe('Logout Test Case', () => {

	// Define variables for login credentials
	const username = 'Admin';
	const password = 'admin123';
  
	// Handle uncaught exceptions to prevent the test from failing
	Cypress.on('uncaught:exception', (err, runnable) => {
	  // If the error message contains 'Cannot read properties of undefined', ignore it
	  if (err.message.includes('Cannot read properties of undefined')) {
		return false;  // Prevent Cypress from failing the test
	  }
	});
  
	it('should log in and then log out successfully', () => {
  
	  // Step 1: Visit the login page
	  cy.visit("/auth/login")
  
	  // Step 2: Log in with valid credentials
	  cy.get('input[name="username"]').type(username);
	  cy.get('input[name="password"]').type(password);
	  cy.get('button[type="submit"]').click();
  
	  // Step 3: Ensure the user has logged in by verifying the dashboard is visible
	  cy.url().should('include', '/dashboard'); // Verify you're on the dashboard page
	  cy.get('.oxd-userdropdown').should('be.visible'); // Ensure the user dropdown is visible
  
	  // Step 4: Click the user dropdown to open the logout menu
	  cy.get('.oxd-userdropdown-tab > .oxd-icon').click();
  
	  // Step 5: Click the logout button
	  cy.get('a[href="/web/index.php/auth/logout"]').click();
  
	  // Step 6: Verify that the user is logged out by checking that the login page is visible again
	  cy.url().should('include', '/auth/login'); // Ensure the URL includes '/auth/login'
	  cy.get('input[name="username"]').should('be.visible'); // Verify the username field is visible (i.e., on the login page)
	});
  });
  