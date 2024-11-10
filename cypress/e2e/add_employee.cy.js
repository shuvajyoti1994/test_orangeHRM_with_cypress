describe("add employee", () => {
  it("login with valid credentials", () => {
    cy.visit("/auth/login");
    cy.title().should("eq", "OrangeHRM");
    cy.get('input[placeholder="Username"]').type("Admin");
    cy.get('input[placeholder="Password"]').type("admin123");
    cy.get('button[type="submit"]').click();
    cy.get(
      ".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module"
    ).contains("Dashboard");
    cy.log("Login Successful");

    // Add Employee

    cy.get(":nth-child(2) > .oxd-main-menu-item").click();
    cy.get(".oxd-topbar-body-nav > ul > :nth-child(3)").click();
    cy.get(
      ".--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input"
    ).type("John");
    cy.get(":nth-child(3) > :nth-child(2) > .oxd-input").type("Doe");
    cy.get(".oxd-button--secondary").click();
    cy.wait(2000);
    cy.get(".orangehrm-tabs-item.--active")
      .click()
      .then(() => {
        cy.get(".orangehrm-edit-employee-name > .oxd-text").contains(
          "John Doe"
        );
      });
  });
});
