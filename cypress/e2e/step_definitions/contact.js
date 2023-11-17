import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import {contactPage} from '@pages/ContactPage'

Given("A web browser visits Sinnemar Contact Page", () => {
  cy.visit("/contact");
});

When("A user enters a name {string}, an email {string}, a phone number {string}, a subject {string}, a message {string}, and clicks on the send button", (name, email, phone, subject, message) => {
  contactPage.submitContact(name, email, phone, subject, message)
  
});

When("A user provides insufficient information, and clicks on the submit button", (table) => {
  table.hashes().forEach((row) => {
    cy.log(row.name);
    cy.log(row.email);
    contactPage.elements.name().type(row.name);
    contactPage.elements.email().type(row.email);
    contactPage.elements.send().click();
  });
});

Then("the url will contains the contact post page", () => {
  cy.url().should("contains", "/contact");
});

Then("The error message {string} is displayed", (errorMessage) => {
  contactPage.elements.errorMessage().should("have.text", errorMessage);
});

Then("This a dummy step", (errorMessage) => {
  cy.log("This is a dummy execution step");
});
