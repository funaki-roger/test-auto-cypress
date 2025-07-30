describe('Teste de busca no Yahoo', () => {
  it('Deve buscar "Pacto Soluções" e validar os resultados', () => {
    cy.visit('https://br.search.yahoo.com/');

    cy.get('input[name="p"]').type('Pacto Soluções{enter}');

    cy.get('#web').should('exist');

    cy.get('#web')
      .contains('Pacto', { matchCase: false })
      .should('exist');
  });
});
