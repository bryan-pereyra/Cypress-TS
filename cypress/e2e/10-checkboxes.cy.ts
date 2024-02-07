describe('Demo QA', () => {

    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}/checkbox`);
    });

    it('Checkbox not-displayed scenario', () => {
        cy.get("input[type='checkbox']").click({ force: true });
        cy.get('#result').should('contain', 'You have selected :')
    });
});

describe('The Internet App', () => {

    beforeEach(() => {
        cy.visit(`${Cypress.env('theInternet')}/checkboxes`);
    });

    it('Checkbox Scenario', () => {
        cy.get('form#checkboxes input').eq(0).check().should('be.checked');
    });
});
