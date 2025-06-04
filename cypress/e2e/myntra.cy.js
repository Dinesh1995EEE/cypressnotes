describe('Myntra',()=>{
    it('Wishlist',()=>{
    cy.visit('https://www.myntra.com/men-casual-shirts')
   
    //  cy.on('uncaught:exception',(err,runnable)=>false)
   
    cy.get('.product-wishlistFlex.product-actionsButton.product-wishlist').eq(1).click({ force: true })
   
    // cy.get('[class="welcome-header"]').should('be.visible')
    // cy.get('.form-control.mobileNumberInput').type('8760711157')
    // cy.get('.consentCheckbox').check()
    // cy.get('[class="submitBottomOption"]').click()
    // cy.get('.myntraweb-sprite.desktop-iconWishlist.sprites-headerWishlist').click()
    })
})
