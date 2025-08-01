const valoresRepetidos = [10, 2, 3, 4, 5, 6, 6, 8, 9, 10, 10, 11, 10, 12, 13, 13, 99, 99, 99];
const nomes = ["Lucas", "Ana", "Carlos", "Carlos", "Carlos", "Mariana", "João", "Beatriz" , "Beatriz"];





 function contarFrequenciaComReduce(array){
    return array.reduce((objAcc, element) => {
      objAcc[element] = (objAcc[element] || 0) + 1
      return objAcc
    }, {})
 }

 function contarFrequenciaNaMao(array){
    const frequencia = {}

    for (const element of array) {
        frequencia[element] ? frequencia[element] = parseInt(frequencia[element]) +1 : frequencia[element] = 1;
    }

    return frequencia;
 }

 function contarFrequenciaForEachSemIf(array){
    const frequencia = {}

    array.forEach(element => {
        frequencia[element] = (frequencia[element] || 0) + 1;
    });

    return frequencia;
 }

console.log(contarFrequenciaComReduce(nomes));

 
