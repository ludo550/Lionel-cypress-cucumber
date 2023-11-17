class ContactPage {
  elements = {
    name: () => cy.get("#name"),
    email: () => cy.get("#email"),
    phone: () => cy.get("#phone"),
    subject: () => cy.get("#subject"),
    message: () => cy.get("#message"),
    send: () => cy.get("#submit"),
    errorMessage: () => cy.get('h1'),
  };

  typeName(name) {
    this.elements.name().type(name);
  }

  typeEmail(email) {
    this.elements.email().type(email);
  }

  typePhone(phone) {
    this.elements.phone().type(phone);
  }

  typeSubject(subject) {
    this.elements.subject().type(subject);
  }

  typeMessage(message) {
    this.elements.message().type(message);
  }

  clickSend() {
    this.elements.send().click();
  }

  submitContact(name, email, phone, subject, message){
    this.typeName(name);
    this.typeEmail(email);
    this.typePhone(phone);
    this.typeSubject(subject);
    this.typeMessage(message);
    this.clickSend();
  }
}

export const contactPage = new ContactPage();
