it('Pulls JSON data from kitsu animes endpoint', () => {
  cy.request('https://kitsu.io/api/edge/anime')
    .its('headers')
    .its('content-type')
    .should('include', 'application/vnd.api+json');
});
