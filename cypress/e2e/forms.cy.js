describe('Form Tests', () => {
    beforeEach(() => {
        cy.visit('/forms')
    })
    
    it('Test Subscribe Form', () => {
        cy.contains(/testing forms/i)
        cy.getDataTest('subscribe-form').find('input').as('subscribe-input')
        cy.get('@subscribe-input').type('alexanderhabte5@gmail.com')
        cy.contains("Successfully subbed: alexanderhabte5@gmail.com").should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains("Successfully subbed: alexanderhabte5@gmail.com").should('exist')

        cy.wait(3000)
        cy.contains("Successfully subbed: alexanderhabte5@gmail.com").should('not.exist')

        cy.get('@subscribe-input').type('alexanderhabte5@gmail.io')
        cy.contains("Invalid email: alexanderhabte5@gmail.io").should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains("Invalid email: alexanderhabte5@gmail.io").should('exist')
        cy.wait(3000)
        cy.contains("Invalid email: alexanderhabte5@gmail.io").should('not.exist')

        cy.getDataTest('subscribe-button').click()
        cy.contains("Fail").should('exist')
    })
})