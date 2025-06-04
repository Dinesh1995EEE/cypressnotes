describe('Rahul Shetty',()=>{
    it('Open Window',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.window().then((windows)=>{
            cy.stub(window,'open').callsFake((url)=>{
                windows.location.href=url
            })
        })
        cy.get('#openwindow').click()
    })
})
