import { LoginPage } from '../pages/Login';
import { ProfilePage } from '../pages/Profile';

describe('Login Basics', () => {

    beforeEach(() => {
        LoginPage.visit();
    });

    it('Success login scenario', () => {
        LoginPage.usernameInputElement.type('test');
        LoginPage.passwordInputElement.type('Test1234*');
        LoginPage.loginButtonElement.click();
        cy.url().should('contain', 'profile');
        ProfilePage.userElement.should('have.text', 'test');
        // ProfilePage.headerElement.should('have.text', 'Profile');
    });

    it('Wrong User Login Scenario', () => {
        LoginPage.submitLogin('wrongUser', 'wrongPassword');
        cy.url().should('not.contain', 'profile');
        LoginPage.invalidLoginMessageElement.should('have.text', 'Invalid username or password!');
        LoginPage.headerElement.should('have.text', 'Login');
    });
});
