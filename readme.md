# Teste Automatizado com Cypress — Busca no Yahoo

Este projeto contém um teste automatizado usando o **Cypress** para validar a busca no site do **Yahoo Brasil**.

---

## Objetivo do Código

O teste realiza os seguintes passos:

1. Acessa [https://br.search.yahoo.com](https://br.search.yahoo.com)
2. Digita "Pacto Soluções" no campo de busca
3. Verifica se os resultados da busca são exibidos
4. Confirma se a palavra "Pacto" aparece nos resultados

O arquivo do teste está em:  
`cypress/e2e/yahoo-busca.cy.js`

---

## Instalação

### 1. Instalar Node.js

Se ainda não tem o Node.js instalado, baixe e instale a versão LTS em:  
[https://nodejs.org](https://nodejs.org)

Para verificar a instalação, execute no terminal:

```bash
node -v
npm -v

Inicializar projeto Node (se necessário):
```bash
npm init -y

Instalar Cypress:
```bash
npm install cypress --save-dev

---

## Como Executar o Teste
Execute o comando abaixo para rodar o teste no navegador Chrome com interface visível:
```bash
npx cypress run --spec "cypress/e2e/yahoo-busca.cy.js" --browser chrome --headed


---

Explicação dos parâmetros:
--spec: especifica o arquivo de teste
--browser chrome: usa o navegador Chrome
--headed: abre o navegador em modo visível (não headless)
