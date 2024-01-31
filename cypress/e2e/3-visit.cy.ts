describe('basics', () => {

    beforeEach(()=>{
        cy.visit('/textinput');
    });

    it('visit explanation', () => {
        cy.log('Hello from the .it');
    });
});