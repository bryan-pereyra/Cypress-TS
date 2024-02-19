let externalVariable: string = 'test';

describe('Basics', () => {

    beforeEach(() => {
        cy.visit('dynamicid')
    });

    it('Find by text', () => {
        cy.contains('button', 'Button with Dynamic ID').invoke('text').then((text) => {
            externalVariable = text;
            cy.wrap(externalVariable).as('textFromContains');
            cy.log(externalVariable);
        });
        cy.get('@textFromContains').then((text) => {
            cy.log('This is the contains text outside the closure: ' + text);
        });
    });

    // Always need to use non-arrow functions if you are going to share values
    it('Sharing context by alias', function () {
        externalVariable = this.textFromContains;
        cy.log(externalVariable);
    });
});
