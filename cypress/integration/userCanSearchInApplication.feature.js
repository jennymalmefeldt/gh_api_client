describe("User can search ", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "https://api.github.com/search/users?q=jennymalmefeldt",
      response: "index_response.json",
    });
    cy.visit("/");
  });

  it("for user name and click for response", () => {
    cy.get('[data-cy="username"]').type("Malmefeldt");
    cy.get('[data-cy="search"]').click();

    cy.get("[data-cy='search-result-68270324']").within(() => {
      cy.contains("jennymalmefeldt");
    });
  });
});
