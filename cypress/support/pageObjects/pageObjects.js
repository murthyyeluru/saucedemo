export class PageObject {
    getUserName() {
        return cy.get('[data-test="username"]')
    }
    getPassword() {
        return cy.get('[data-test="password"]')
    }
    getLoginButton() {
        return cy.get('[data-test="login-button"]')
    }
    getProductTitle() {
        return cy.get('[data-test="inventory-item-name"]')
    }
    getFirstName() {
        return cy.get('[data-test="firstName"]')
    }
    getLastName() {
        return cy.get('[data-test="lastName"]')
    }
    getPostalCode() {
        return cy.get('[data-test="postalCode"]')
    }
    getContinue() {
        return cy.get('[data-test="continue"]')
    }
    getShoppingCart() {
        return cy.get('[data-test="shopping-cart-link"]')
    }
    getShoppingCartBadge() {
        return cy.get('.shopping_cart_badge')
    }
    getCheckOut() {
        return cy.get('[data-test="checkout"]')
    }
    getInventoryItemName() {
        return cy.get('[data-test="inventory-item-name"]')
    }
    getItemQuantity() {
        return cy.get('[data-test="item-quantity"]')
    }
    getFinish() {
        return cy.get('[data-test="finish"]')
    }
    getTitle() {
        return cy.get('[data-test="title"]')
    }
    getCompleteHeader() {
        return cy.get('[data-test="complete-header"]')
    }
}
export const pageObjectpage = new PageObject()

  