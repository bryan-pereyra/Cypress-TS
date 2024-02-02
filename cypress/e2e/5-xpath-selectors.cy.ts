describe('Locators', () => {

    beforeEach(() => {
        cy.visit('/classattr');
    });

    it('How to find an element by its text', () => {
        cy.xpath('//*[text()="Correct variant is"]').should('contain.text', 'Correct');
    });

    it('How to find an element by its attribute', () => {
        cy.xpath('//pre[@class=" language-html"]').should('contain.text', 'button');
    });

    it('How to find by class (middle and spaces)', () => {
        cy.xpath("//button[contains(concat(' ', normalize-space(@class), ' '), ' btn-primary ')]").should('have.css', 'background-color', 'rgb(0, 123, 255)');
    });
});