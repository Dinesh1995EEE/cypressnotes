describe('swag labs',()=>{
    it('open cart',()=>{
        cy.visit('https://www.saucedemo.com/v1/')

        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        
        cy.get('.btn_primary.btn_inventory').eq(0).click()
        cy.get('.btn_primary.btn_inventory').eq(1).click()
        cy.get('#shopping_cart_container').click()
        
        cy.get('.btn_action.checkout_button').click()
        
        cy.get('#first-name').type('Dinesh')
        cy.get('#last-name').type('K')
        cy.get('#postal-code').type('605110')
        cy.get('.btn_primary.cart_button').click()

        cy.get('.btn_action.cart_button').click()

    })
})