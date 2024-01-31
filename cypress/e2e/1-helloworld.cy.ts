describe('template spec', () => {
  it('passes', () => {
    cy.log('Hello World!')
  });

  it("Typescript Introduction", () => {

    let stringVariable: string = '9';
    let numberVariable: number = 9;
    let booleanVariable: boolean = true;
    let anyVariable: any = 'Any variable';

    function addToNumbers(a: number, b: number): number {
      return a + b;
    };

    interface User {
      userName: string;
      password: string;
    };

    function returningUserInfo(user: User): void {
      console.log('This is the user name: ' + user.userName);
      console.log('This is the password: ' + user.password);
    };

  });
});