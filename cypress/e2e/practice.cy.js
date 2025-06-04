describe('drag and drop',()=>{
    it('elements handling',()=>{
        cy.visit('https://demo.automationtesting.in/Static.html')
        cy.on('uncaught:exception',(err,runnable)=>false)
        cy.get('[id="angular"]').drag('[id="droparea"]')
    })
})