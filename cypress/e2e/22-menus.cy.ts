describe('Menu', () => {

    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}/menu`);
    });

    it('Menu Demo', () => {
        cy.contains('a', 'Main Item 2').realHover();
        cy.contains('a', 'SUB SUB LIST »').realHover();
    });
});
