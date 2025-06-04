import Login from "../fixtures/parsedatapom.js"


describe('page object model',()=>{
    it('parse data using pom',()=>{


        let userdata= new Login();

        userdata.visit_the_page();
        userdata.Username();
        userdata.Password();
        userdata.submit_button();
        userdata.assertion_passes();


    })
})