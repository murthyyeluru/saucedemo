import '../support/commands/login.js'
import '../support/commands/checkout.js'
import '../fixtures/example.json'
import {pageObjectpage} from '../support/pageObjects/pageObjects.js'

describe('Product Purchase', () => {
  it('should purchase a product successfully', () => {
    
    cy.fixture('example').then((data) => {
      // Visit the login page
      cy.visit(data.url);
      //Login
      cy.login(data.username,data.password);
      // Verify the home page 
      cy.url().should('include', '/inventory.html');

      // Click Add to Cart button
      //cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]') //Click Add to cart by ID 
      //Click Add to Cart for specific product by product name
      pageObjectpage.getProductTitle()  
      .contains(data.product)  
      .parents('.inventory_item')  
      .find('[data-test^="add-to-cart-"]')  // Find the "Add to Cart" button within the item container
      .click(); // Click the Add to Cart button
      
      // Verify the cart count increased
      pageObjectpage.getShoppingCartBadge()
        .should('have.text', '1');
            
      //Clicking cart button
      pageObjectpage.getShoppingCart()
        .click();

      //Clicking Checkout
      pageObjectpage.getCheckOut()
        .click();
      
      //Checkout form
      cy.checkout(data.firstname,data.lastname,data.zipcode);

      //Verify the correct item being checked out
      pageObjectpage.getInventoryItemName()
        .should('have.text', data.product);

      pageObjectpage.getItemQuantity()
        .should('have.text', '1');

      pageObjectpage.getFinish()
        .click();

      //Verify the checkout successful
      pageObjectpage.getTitle()
        .should('have.text', 'Checkout: Complete!');

      pageObjectpage.getCompleteHeader()
        .should('have.text', 'Thank you for your order!');
 
      // Verify the cart badge reset
      pageObjectpage.getShoppingCartBadge()
        .should('not.exist'); 

    });
  });
});
