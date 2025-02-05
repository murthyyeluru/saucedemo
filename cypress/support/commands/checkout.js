import {pageObjectpage} from '../pageObjects/pageObjects.js'

Cypress.Commands.add('checkout', (firstname, lastname, zipcode) => {    
    // Set the firstName
    pageObjectpage.getFirstName()
      .type(firstname); 

    // Set the lastName
    pageObjectpage.getLastName()
      .type(lastname);

    // Set the postalCode
    pageObjectpage.getPostalCode()
      .type(zipcode);

    // clicking the continue button
    pageObjectpage.getContinue()
      .click();
  });