# Este projeto contém um teste automatizado usando o **Cypress** para validar a busca no site do **Yahoo Brasil**.

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

### 1. Instalar Node.js

Se ainda não tem o Node.js instalado, baixe e instale a versão LTS em:  
[https://nodejs.org](https://nodejs.org)



## ▶️ Como executar

0. Iniciar seu projeto com Node.js
   ```bash
   npm init -y

Instalar Cypress:
  ```bash
  npm install cypress --save-dev
  npx cypress run --spec "cypress/e2e/yahoo-busca.cy.js" --browser chrome --headed
