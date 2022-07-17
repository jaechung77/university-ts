/// <reference types="cypress" />
import '@testing-library/cypress/add-commands';

describe('University', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('renders', () => {
    cy.findByText('ADD').should('exist');
  });

  it('displays universities', () => {
    cy.findByText('LOAD').click();
  });
});
