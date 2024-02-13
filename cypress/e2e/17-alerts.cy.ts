describe('Alerts', () => {

    beforeEach(() => {
        cy.visit(`${Cypress.env("theInternet")}/javascript_alerts`);
    });

    it('JS Alerts', () => {
        cy.contains('button', 'Click for JS Alert').click();
        cy.on('window:alert', (message) => {
            expect(message).to.be.equal('I am a JS Alert');
        });
        cy.on('window:confirm', () => true);
        cy.get('p#result').should('have.text', 'You successfully clicked an alert');
    });

    it('JS Alerts - Confirm Alert', () => {
        cy.contains('button', 'Click for JS Confirm').click();
        cy.on('window:confirm', (message) => {
            expect(message).to.be.equal('I am a JS Confirm');
        });
        cy.on('window:confirm', () => true);
        cy.get('p#result').should('have.text', 'You clicked: Ok');
    });

    it('JS Alerts - Cancel Alert', () => {
        cy.contains('button', 'Click for JS Confirm').click();
        cy.on('window:confirm', (message) => {
            expect(message).to.be.equal('I am a JS Confirm');
        });
        cy.on('window:confirm', () => false);
        cy.get('p#result').should('have.text', 'You clicked: Cancel');
    });

    it('JS Prompt', () => {
        cy.window().then((window) => {
            cy.stub(window, 'prompt').returns('Hello from the prompt alert');
            cy.contains('button', 'Click for JS Prompt').click();
        });
        cy.get('p#result').should('have.text', 'You entered: Hello from the prompt alert');
    });
});
