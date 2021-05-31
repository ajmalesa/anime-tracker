it('Loads home page correctly', () => {
  cy.visit('/');
  cy.contains('Anime Tracker');
});
