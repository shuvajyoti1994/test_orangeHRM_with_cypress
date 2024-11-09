describe('API TEST', ()=>{

	// GET API

	it("GET API testing", () => {
		cy.request("GET", "https://reqres.in/api/users?page=2").should((response) => {
		  expect(response.status).to.eq(200);
		});
	  });

	// POST API
	it("POST API testing", () => {
		cy.request("POST", "https://reqres.in/api/users", {
		  name: "morpheus",
		  job: "leader",
		}).should((response) => {
		  expect(response.status).to.eq(201);
		});
	 });

	//  PUT API
	it("PUT API testing", () => {
		cy.request("PUT", "https://reqres.in/api/users/2", {
		  name: "QAAutomationLabs",
		  job: "QA Automation Engg",
		}).should((response) => {
		  expect(response.status).to.eq(200);
		});
	  });

	//   DELETE API
	it("DELETE API testing", () => {
		cy.request("DELETE", "https://reqres.in/api/users/2").should((response) => {
		  expect(response.status).to.eq(204);
		});
	  });
})