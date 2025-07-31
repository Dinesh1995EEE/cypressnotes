import Link from '../support/Link';



describe('Amazon project', () => {
    it('Visits Amazon', () => {
        const link = new Link()
        
        link.visitPage()

        cy.get('input#twotabsearchtextbox').should('be.visible').type('samsung s24 ultra 5g mobile');
        cy.get('[id="nav-search-submit-button"]').click()
        cy.get('[class="s-image"]').eq(2).click()
        cy.get('[id="add-to-cart-button"]').eq(1).click()      
        cy.get('[data-feature-id="proceed-to-checkout-action"]').click()  
        cy.get('[id="ap_email_login"]').type('8760711157')
        cy.get('[class="a-button-input"]').click()
        cy.get('[id="ap_password"]').type('secreteye7')
        cy.get('[id="signInSubmit"]').click()
        cy.get('[id="pp-CVWr3P-114"]').check()
        cy.get('[name="ppw-widgetEvent:SetPaymentPlanSelectContinueEvent"]').click()


    })
})
