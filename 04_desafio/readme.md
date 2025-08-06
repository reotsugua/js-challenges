🚀 Agora sim: Desafio 4 – Encontrar o Número Único
🎯 Enunciado:
Crie uma função encontrarUnico(array) que:

Recebe um array de números onde todos os elementos aparecem duas vezes, exceto um único número.

Retorna esse número único.

🧪 Exemplo:
js
Copiar
Editar
encontrarUnico([1, 2, 3, 2, 3, 1, 7]);
// Saída esperada: 7
💡 Regras:
Resolva primeiro com objeto de contagem

Depois tente resolver com operação bitwise XOR (^), que é bem interessante (opcional, se quiser subir o nível)