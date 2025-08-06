const pessoas = [
  { nome: "Ana", idade: 25 },
  { nome: "Bruno", idade: 30 },
  { nome: "Clara", idade: 25 },
  { nome: "Daniel", idade: 40 },
  { nome: "Renan", idade: 40 },
  { nome: "Wolney", idade: 40 }
];

function agruparPorPropriedade(array, propriedade){
    const novoObj = {}

    for (const element of array) {
        if (!novoObj[element[propriedade]]) {
            novoObj[element[propriedade]] = [element]
        } else {
            novoObj[element[propriedade]].push(element)
        }
    }

    return novoObj
}

function agruparPorPropriedadeComReduce(array, propriedade){
    return array.reduce((objAcc, element) => {        
        objAcc[element[propriedade]] ??= [];
        objAcc[element[propriedade]].push(element);

        return objAcc
    }, {})
}

function agruparPorPropriedadeComReduceReduzido(array, propriedade){
    return array.reduce((objAcc, element) => {        
        return (objAcc[element[propriedade]] ||= []).push(element);
    }, {})
}


console.log(agruparPorPropriedadeComReduce(pessoas, "idade"));

 
