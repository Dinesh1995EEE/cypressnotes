
    class Login{

        visit_the_page(){
            cy.visit('https://practicetestautomation.com/practice-test-login/')

        }

        Username(){
            cy.get('input#username').type('student')

        }
        Password(){
            cy.get('input#password').type('Password123')

        }
        submit_button(){
            cy.get('.btn').click()

        }

        assertion_passes(){
            cy.contains('successfully logged in').should('be.visible')

        }
    }

    export default Login;