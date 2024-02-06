describe('Click Challenge', () => {

    beforeEach(() => {
        cy.visit('/click');
    });

    it('Class Assertion', () => {
        cy.get('#badButton').click().should('have.class', 'btn-success');
    });

    it('Background assertion', () => {
        cy.get('#badButton').click().should('have.css', 'background-color', 'rgb(40, 167, 69)');
    });
});

describe('Hover challenge', () => {

    beforeEach(() => {
        cy.visit('/mouseover');
    });

    it('Hover with Cypress workaround', () => {
        cy.get('.text-primary').trigger('mouseover');
    });

    it('Hover with real-events plugin', () => {
        cy.get('.text-primary').realHover();
    });
});

describe.only('Dynamic Table challenge', () => {
    beforeEach(() => {
        cy.visit('/dynamictable');
    });

    it('Chrome CPU Test - My Solution', () => {
        cy.get('div[role="row"]').contains('Chrome').then((chromeRow) => {
            cy.wrap(chromeRow).siblings('span[role="cell"]').contains('%').then(($cell) => {
                cy.get('p.bg-warning').should('contain', $cell.text());
            });
        });
    });

    it("Chrome CPU Test", () => {
        cy.get(`div[role="row"] span`).each(($cell) => {
            if ($cell.text().includes("Chrome")) {
                cy.log(`I have found the ${$cell.text()} row!`);
                let chromeRowValues: string[] = [];
                chromeRowValues.push($cell.next().text());
                chromeRowValues.push($cell.next().next().text());
                chromeRowValues.push($cell.next().next().next().text());
                chromeRowValues.push($cell.next().next().next().next().text());
                cy.log("Chrome row values", chromeRowValues);
                chromeRowValues.forEach((chromeValue) => {
                    if (chromeValue.includes("%")) {
                        cy.log(chromeValue);
                        cy.get(".bg-warning").should(
                            "have.text",
                            `Chrome CPU: ${chromeValue}`
                        );
                    }
                });
            }
        });
    });
});
