describe('Tooltips', () => {

    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}/tool-tips`);
    });

    it('Tooltip button', () => {
        cy.get('button#toolTipButton').realHover();
        cy.get('div.tooltip-inner').should('have.text', 'You hovered over the Button');
        cy.contains('a', 'Contrary').realHover();
    });

    it('a tag tooltip', () => {
        cy.contains('a', 'Contrary').realHover();
        cy.get('div.tooltip-inner').should('have.text', 'You hovered over the Contrary');
    });
});
