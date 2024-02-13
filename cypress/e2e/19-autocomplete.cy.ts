describe('Autocomplete', () => {

    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}/auto-complete`);
    });

    it('Autocomplete demo using "Yellow"', () => {
        cy.get('div#autoCompleteMultipleContainer').type('Y');
        cy.contains('div#react-select-2-option-0', 'Yellow').click();
        cy.get('div.auto-complete__multi-value').should('have.text', 'Yellow');
    });
});
