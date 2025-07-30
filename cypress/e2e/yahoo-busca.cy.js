// Agrupa um conjunto de testes relacionados ao Yahoo
describe('Teste de busca no Yahoo', () => {
  // Define um caso de teste: buscar "Pacto Soluções" e validar os resultados
  it('Deve buscar "Pacto Soluções" e validar os resultados', () => {
    // Acessa a página de busca do Yahoo Brasil
    cy.visit('https://br.search.yahoo.com/');

    // Seleciona o campo de busca pelo atributo name="p", digita o texto e pressiona Enter
    cy.get('input[name="p"]').type('Pacto Soluções{enter}');

    // Seleciona o container de resultados (ID "web") e verifica se existe na página
    cy.get('#web').should('exist');

    // Dentro do container de resultados, verifica se há algum texto que contenha "Pacto" (case-insensitive)
    cy.get('#web')
      .contains('Pacto', { matchCase: false })
      .should('exist');
  });
});
