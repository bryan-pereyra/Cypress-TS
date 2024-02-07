describe('cy.viewport() demo', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("Angular")}/angularjs-protractor-practice-site`);
    });

    it('Device Name', () => {
        cy.viewport('iphone-x');
        cy.get('#mobile_menu_toggler').should('be.visible');
    });

    it('Specific Viewport', () => {
        cy.viewport(500, 750);
        cy.get('#mobile_menu_toggler').should('be.visible');
    });
});
