describe('Iframe example', () => {

    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/nestedframes`);
    });

    it('Simple and nested iframe', () => {
        cy.get('iframe#frame1').then(($iframe) => {
            const $body = $iframe.contents().find('body');
            cy.wrap($body).should('have.text', 'Parent frame');
            cy.wrap($body).find('iframe').then(($childIframe) => {
                const $childBody = $childIframe.contents().find('body');
                cy.wrap($childBody).find('p').should('have.text', 'Child Iframe');
            });
        });
    });
});

describe.only('Typing on an Iframe', () => {

    beforeEach(() => {
        cy.visit(`${Cypress.env("theInternet")}/iframe`);
    });

    it('Iframe demo', () => {
        cy.get('iframe#mce_0_ifr').then(($iframe) => {
            const $body = $iframe.contents().find('body');

            cy.wrap($body).find('p').type('{selectAll}{del}Hello world!');
            cy.wrap($body).find('p').should('have.text', 'Hello world!');
        });
    });
});
