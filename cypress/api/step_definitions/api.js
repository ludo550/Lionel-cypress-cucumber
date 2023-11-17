import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";


When("We make an api get request to url {string}", (url) => {
    cy.request({
                method: 'GET',
                url: url,
                qs: 'results=1'
                }).as('response')
});

Then("the response should have a status code of {string} and relevant information", (statusCode) => {
    cy.get('@response').should((response) => {
    expect(response.status.toString()).to.eq(statusCode)
    expect(response.body.results[0]).to.have.property('gender')
    });
});
