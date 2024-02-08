describe('Demo QA', () => {

    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}/buttons`);
    });

    it('Double click', () => {
        cy.get('button#doubleClickBtn').dblclick();
        cy.get('p#doubleClickMessage').should('have.text', 'You have done a double click');
    });

    it('Right click', () => {
        cy.get('button#rightClickBtn').rightclick();
        cy.get('p#rightClickMessage').should('have.text', 'You have done a right click');
    });
});
