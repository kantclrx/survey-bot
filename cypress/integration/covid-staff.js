describe('covid-staff-site', function() {
    var id
    if(Cypress.env('id') != null) {
        id = Cypress.env('id')
    }
    else {
        id = s
    }
    it('BOT',function() {
        cy.visit('http://covid-staff-test.surge.sh/')
        cy.get('input').type()
    })
})