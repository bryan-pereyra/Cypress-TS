import { testData } from '../e2e/model'

describe('Sharing a fixture', () => {

    beforeEach(() => {
        cy.fixture('jsonExample.json').as('testData');
    });

    it('Accessing the shared fixture #1', () => {
        cy.get<testData>('@testData').then((testData) => {
            cy.log('Accessing the test data property 1: ', testData.property1);
        });
    });

    it('Accessing the shared fixture #2', () => {
        cy.get<testData>('@testData').then((testData) => {
            cy.log('Accessing the test data property 1: ', testData.property2);
        });
    });
});
