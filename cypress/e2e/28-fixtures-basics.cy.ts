import { testData } from '../e2e/model'

describe('Using a fixture', () => {

    it('Loading the file and display the data in the log', () => {
        cy.fixture('jsonExample.json').then((testData: testData) => {
            cy.log('Printing objects', testData);
            cy.log('Printing objects', testData.property1);
            cy.log('Printing objects', testData.property2);
        });
    });
});
