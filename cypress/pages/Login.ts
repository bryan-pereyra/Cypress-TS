import { Main } from '../pages/Main';

class Login extends Main {

    private usernameInput: string = 'input#userName';
    private passwordInput: string = 'input#password';
    private loginButton: string = 'button#login';
    private invalidLoginMessage: string = 'p#name';

    get usernameInputElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.usernameInput);
    };

    get passwordInputElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.passwordInput);
    };

    get loginButtonElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.loginButton);
    };

    get invalidLoginMessageElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.invalidLoginMessage);
    };

    submitLogin(username: string, password: string): void {
        cy.get(this.usernameInput).type(username);
        cy.get(this.passwordInput).type(password);
        cy.get(this.loginButton).click();
    };

    visit(): void {
        cy.visit(`${Cypress.env('demoQA')}/login`);
    };
};

export const LoginPage = new Login();
