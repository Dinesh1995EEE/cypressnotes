describe('file upload',()=>{
    it('file upload with google image',()=>{
        cy.on('uncaught:exception',(err,runnable)=>false)
      cy.visit('https://practice.expandtesting.com/upload')
      cy.get('#fileInput').attachFile('cypress.webp')
      cy.get('#fileSubmit').click()
      cy.contains('File Uploaded!').should('be.visible')
    })
})