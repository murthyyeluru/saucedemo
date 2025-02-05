import {pageObjectpage} from '../pageObjects/pageObjects.js'

Cypress.Commands.add('login', (username, password) => {
    // Set the username
    pageObjectpage.getUserName()
      .type(username); 

    // Set the password
    pageObjectpage.getPassword()
      .type(password);

    // clicking the login button
    pageObjectpage.getLoginButton()
      .click();
  })