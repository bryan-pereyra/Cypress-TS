describe('Drag and Drop', () => {

    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}/droppable`)
    });

    it('Drag and drop', () => {
        cy.get('div#draggable').drag('div#droppable', { force: true });
        cy.get('div#droppable').should('contain', 'Dropped!');
    });
});
