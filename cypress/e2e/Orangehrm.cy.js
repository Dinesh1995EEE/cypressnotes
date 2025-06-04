describe('Orangehrm',()=>{
    it('employee status',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.wait(5000)
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
       
        cy.get("button[type='submit']").click()
        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
        cy.contains('Employment Status').should('be.visible')

        cy.get('.oxd-autocomplete-text-input.oxd-autocomplete-text-input--active').eq(0).type('ad')
        cy.get('[class="oxd-autocomplete-option"]').eq(2).each(($empname)=>{
            if($empname.text().includes('Radha')){
                cy.wrap($empname).click()
            }
            cy.wait(4000)
         cy.get('.oxd-select-text-input').eq(1).click()
        cy.get('[class="oxd-select-option"]').eq(1).each(($include)=>{
            if($include.text().includes('Past')){
                cy.wrap($include).click()
            }
        })
    })
})
})
            