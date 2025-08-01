🟣 Desafio 3C: Agrupar por Propriedade
Crie uma função agruparPorPropriedade(array, propriedade) que:

Recebe:

Um array de objetos.

O nome de uma propriedade (string).

Retorna:

Um objeto onde cada chave é um valor único da propriedade fornecida, e o valor é um array com os objetos correspondentes.

🎯 Exemplo:
js
Copiar
Editar
const pessoas = [
  { nome: "Ana", idade: 25 },
  { nome: "Bruno", idade: 30 },
  { nome: "Clara", idade: 25 },
  { nome: "Daniel", idade: 40 }
];

agruparPorPropriedade(pessoas, "idade");
✅ Resultado esperado:
js
Copiar
Editar
{
  25: [
    { nome: "Ana", idade: 25 },
    { nome: "Clara", idade: 25 }
  ],
  30: [
    { nome: "Bruno", idade: 30 }
  ],
  40: [
    { nome: "Daniel", idade: 40 }
  ]
}
💡 Regras:
Use a notação com colchetes (obj[chave]) para acessar propriedades dinâmicas.

Pode começar "na mão" com for ou forEach, depois tentar com reduce.