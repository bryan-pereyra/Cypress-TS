describe('Date picker', () => {

    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}/date-picker`);
    });

    it('Date picker demo', () => {
        cy.get('input#datePickerMonthYearInput').click();
        cy.get('select.react-datepicker__month-select').select('6');    // July 
        cy.get('select.react-datepicker__year-select').select('1997');  // 19997
        // cy.findByText('4').click();
        cy.contains('div[role="option"]', '4').click(); // 04
        cy.get('input#datePickerMonthYearInput').should('have.value', '07/04/1997');
    });
});
