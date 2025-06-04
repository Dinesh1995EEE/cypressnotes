describe('data drive',()=>{
    it('elements',()=>{
        cy.fixture('datapassing.json').then((userdata)=>{
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('[id="username"]').type(userdata.username)
        cy.get('[id="password"]').type(userdata.password)
        cy.get('[id="submit"]').click()
        })

 })
    })
