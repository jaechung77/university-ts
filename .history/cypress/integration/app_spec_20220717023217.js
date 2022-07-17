/// <reference types="cypress" />
import '@testing-library/cypress/add-commands';

describe('University', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('renders', () => {
    cy.findByText('ADD').should('exist');
  });
});
