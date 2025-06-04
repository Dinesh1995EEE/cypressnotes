describe('Rahul Shetty',()=>{
    it('Open Window',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#mousehover').trigger('mouseover')
        cy.get('[href="#top"]').click({force:true})
        cy.url().should('contain','top')
    })
})