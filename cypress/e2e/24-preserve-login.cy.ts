Cypress.session.clearAllSavedSessions();

describe('Login Basics', () => {

    beforeEach(() => {
        cy.session('mySession', () => {
            cy.visit(`${Cypress.env('demoQA')}/login`);
            cy.get('input#userName').type('test');
            cy.get('input#password').type('Test1234*');
            cy.get('button#login').click();
            cy.url().should('contain', 'profile');
        });
    });

    it('Check if session was saved', () => {
        cy.visit(`${Cypress.env('demoQA')}/login`);
    });

    it('Check if session was saved', () => {
        cy.visit(`${Cypress.env('demoQA')}/login`);
    });
});
