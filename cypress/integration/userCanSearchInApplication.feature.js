describe("User can search ", () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: "GET",
      url: "https://api.github.com/search/users?q=jennymalmefeldt",
      response: "",
    });
    cy.visit("/")
  })
  it("for user name and click for response", () => {
    cy.get("input").type("")
    cy.get("button").click()
    cy.get('[data-cy="search"].should("contain", )')
  })
})