var randomstring = require("randomstring");
var id = randomstring.generate(7) + '@gmail.com'
describe('tucovid' , function() {
    it('BOT' , function() {
        cy.visit('https://tucovid.surge.sh/')
        cy.get('button').contains('กรุณา').click()
        cy.get('button').eq(Math.floor(Math.random() * 3)).click()
        cy.next_btn()
        cy.get('button').eq(Math.floor(Math.random() * 3)).click()
        cy.next_btn()
        cy.next_btn()
        cy.get('button').eq(Math.floor(Math.random() * 3)).click()
        cy.next_btn()
        cy.get('button').eq(Math.floor(Math.random() * 4)).click()
        cy.next_btn()
        cy.next_btn()
        cy.get('button').eq(Math.floor(Math.random() * 2)).click()
        cy.next_btn()
        for(var i = 0; i<21; i++){
            cy.log('PHASE 1 ROUND = ' + i)
            cy.get('button').eq(Math.floor(Math.random() * 4)).click()
            cy.next_btn()
        }

        var ans1 = Math.floor(Math.random() * 2)
        var ans2 = Math.floor(Math.random() * 2)
        cy.get('button').eq(ans1).click()
        cy.next_btn()
        cy.get('button').eq(ans2).click()
        cy.next_btn()

        if(ans1 == 0 && ans2 == 1 || ans1 == 1 && ans2 == 0 || ans1 == 1 && ans2 == 1) {
            for(var i = 0; i<9; i++) {
                cy.log('PHASE 2 ROUND = ' + i)
                cy.get('button').eq(Math.floor(Math.random() * 4)).click()
                cy.get('button').eq(Math.floor(Math.random() * 4) + 4).click()
                cy.next_btn()
            }
            var suicide = Math.floor(Math.random() * 2)
            for(var i = 0; i<8; i++){
                if(i == 2 && suicide == 1) {
                    cy.log('PHASE 3 Route 1 ROUND = ' + i)
                    cy.get('button').eq(suicide).click()
                    cy.next_btn()
                    cy.get('button').eq(Math.floor(Math.random() * 2)).click()
                    cy.next_btn()
                }
                else if(i == 2 && suicide == 0) {
                    cy.log('PHASE 3 Route 2 ROUND = ' + i)
                    cy.get('button').eq(suicide).click()
                    cy.next_btn()
                } else {
                    cy.log('PHASE 3 Route 3 ROUND = ' + i)
                    cy.get('button').eq(Math.floor(Math.random() * 2)).click()
                    cy.next_btn()
                }
    
            }
        } 

        cy.get('#patient-name-input').type(id)
        cy.get('#patient-lineid-input').type(id)
        cy.get('#patient-phone-input').type(Math.floor(Math.random() * 8000000) + 1000000)
        cy.get('#patient-id-input').type(Math.floor(Math.random() * 8000000000000) + 1000000000000)
        cy.get('#patient-age-input').type(Math.floor(Math.random() * 43) + 1)
        
        var sex = Math.floor(Math.random() * 2)
        var edu = Math.floor(Math.random() * 4)
        var job = Math.floor(Math.random() * 3)
        if(sex == 0) {
            cy.get('#male-rbtn').click()
        } else {
            cy.get('#female-rbtn').click()
        }

        if(edu == 0) {
            cy.get('#elementary-school-rbtn').click()
        }
        else if(edu == 1) {
            cy.get('#high-school-rbtn').click()
        }
        else if(edu == 2) {
            cy.get('#bachelor-rbtn').click()
        } else {
            cy.get('#master-rbtn').click()
        }

        if(job == 0) {
            cy.get('#umemployed-rbtn').click()
        }
        else if(job == 1) {
            cy.get('#umemployed-rbtn').click()
        } else {
            cy.get('#full-time-rbtn')
        }

        cy.get('button').contains('ยืนยัน').click()
        cy.contains('ข้อมูลของท่านได้รับการบันทึกเรียบร้อยแล้ว')
    })
})