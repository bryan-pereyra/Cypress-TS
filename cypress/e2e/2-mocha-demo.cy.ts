describe('template spec', () => {
    before(() => {
        cy.log('Hello from the "before" hook!');
    });

    beforeEach(() => {
        cy.log('Hello from the "beforeEach" hook!');
    });

    it('Test Case #1', () => {
        cy.log('Hello World!');
    });

    it('Test Case #2', () => {
        cy.log('Hello World!');
    });

    it('Test Case #3', () => {
        cy.log('Hello World!');
    });

    it.skip('Test Case #4', () => {
        cy.log('Hello World!');
    });

    afterEach(() => {
        cy.log('Hello from the "afterEach" hook!');
    });

    after(() => {
        cy.log('Hello from the "after" hook!');
    });
});