/* Permite a facilidade de manutenção, reutilização de código e melhor organização e escalabilidade.
    A modularização permite que partes do código sejam reutilizadas em
    diferentes partes do projeto, isso reduz a duplicação de código e melhora a eficiência do desenvolvimento. Por exemplo, em um sistema de e-commerce, um módulo de autenticação pode ser usado tanto no painel de administração quanto na área do cliente, sem precisar o mesmo código duas vezes.
    A manutenção se torna mais simples, pois alterações em um módulo não afetam diretamente os outros, facilitando a correção de bugs e a implementação de novas funcionalidades. Em um sistema de biblioteca, se o módulo de empréstimos precisar de uma atualização, ele pode ser alterado sem impactar o módulo de cadastro de usuários. */

// Questão 3
const soma = (a, b) => a + b
const subtracao = (a, b) => a - b
const multiplicacao = (a, b) => a * b
const divisao = (a, b) => a / b
const exponenciacao = (a, b) => a ** b


module.exports = { soma, subtracao, multiplicacao, divisao, exponenciacao }