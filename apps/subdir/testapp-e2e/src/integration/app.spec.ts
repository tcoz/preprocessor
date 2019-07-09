import { getGreeting } from '../support/app.po';

describe('subdir-testapp', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to subdir-testapp!');
  });
});
