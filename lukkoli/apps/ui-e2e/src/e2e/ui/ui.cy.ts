describe('ui: Ui component', () => {
  beforeEach(() => cy.visit('/iframe.html?viewMode=story&id=alert--error'));

  it('should render the component', () => {
    cy.get('h3').should('contain', 'This is an error alert');
  });
});
