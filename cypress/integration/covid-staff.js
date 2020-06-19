var randomstring = require("randomstring");
const { expect } = require("code");
var a
var b
var c
var d

describe('covid-staff-site', function() {
    var id
    var kids = Math.floor(Math.random() * 2)
    var disease = Math.floor(Math.random() * 2)
    var voluntary = Math.floor(Math.random() * 2)
    if(Cypress.env('id') != null) {
        id = Cypress.env('id')
    }
    else {
        id = randomstring.generate(7) + '@gmail.com'
    }
    it('BOT',function() {

        cy.visit('http://covid-staff-test.surge.sh/')
        cy.get('input').type(id)
        cy.get('button').contains('กรุณาประเมิน').click()
        cy.get('button').eq(Math.floor(Math.random() * 2)).click()
        cy.next_btn()
        cy.get('input').type(Math.floor(Math.random() * 35) + 15)
        cy.next_btn()
        cy.get('button').eq(Math.floor(Math.random() * 4)).click()
        cy.next_btn()
        cy.get('button').eq(kids).click()
        cy.next_btn()
        if(kids == 1) {
            cy.get('input').type(Math.floor(Math.random() * 3))
            cy.next_btn()
        }
        cy.get('input').type(Math.floor(Math.random() * 43000) + 7000)
        cy.next_btn()
        cy.get('button').eq(0).click()
        cy.next_btn()
        cy.get('button').eq(disease).click()
        cy.next_btn()
        if(disease == 1) {
            cy.get('button').eq(Math.floor(Math.random() * 2)).click()
            cy.next_btn()
        }
        cy.get('button').eq(Math.floor(Math.random() * 2)).click()
        cy.next_btn()
        cy.get('button').eq(Math.floor(Math.random() * 13)).click()
        cy.next_btn()
        cy.get('input').type(Math.floor(Math.random() * 8))
        cy.next_btn()
        cy.get('button').eq(Math.floor(Math.random() * 3)).click()
        cy.next_btn()

        for(var i = 0; i<19; i++) {
            if(i == 10 && voluntary == 0) {
                cy.get('.text-xl').invoke('text').then((text) => {
                    cy.log(text)
                })
                cy.log('route 1')
                cy.get('button').eq(voluntary).click()
                cy.next_btn()
                cy.get('button').eq(Math.floor(Math.random() * 2)).click()
                cy.next_btn()
                cy.get('button').eq(Math.floor(Math.random() * 2)).click()
                cy.next_btn()
                cy.get('button').eq(Math.floor(Math.random() * 2)).click()
                cy.next_btn()
                cy.get('button').eq(1).click()
                cy.next_btn()
                i++;
            } else if (i == 10 && voluntary == 1) {
                cy.get('.text-xl').invoke('text').then((text) => {
                    cy.log(text)
                })
                cy.log('route 2')
                cy.get('button').eq(voluntary).click()
                cy.next_btn()
            } else {
                cy.get('.text-xl').invoke('text').then((text) => {
                    cy.log(text)
                })
                cy.log('route 3')
                cy.log('I1 = ' + i)
                cy.get('button').eq(Math.floor(Math.random() * 2)).click()
                cy.next_btn()
            }
            a = i
        }
        cy.wait(4000)
        // for(var i = 0; i<21; i++) {
        //     cy.log('I2 = ' + i)
        //     cy.get('button').eq(Math.floor(Math.random() * 4)).click()
        //     cy.next_btn()
        //     b = i
        // }
        // for(var i = 0; i<23; i++){
        //     cy.log('I3 = ' + i)
        //     cy.get('button').eq(Math.floor(Math.random() * 7)).click()
        //     cy.next_btn()
        //     c = i
        // }
        // for(var i = 0; i<15; i++){
        //     cy.log('I4 = ' + i)
        //     cy.get('button').eq(Math.floor(Math.random() * 5)).click()
        //     cy.next_btn()
        //     d = i

        //     var res = a+b+c+d
        //     cy.log('tolal = ' + res)
        // }
        // cy.wait(4000)
    })
})