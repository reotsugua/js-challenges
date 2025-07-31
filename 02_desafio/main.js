function inverterString(stringOriginal) {
    const stringEmArray = stringOriginal.split('')

    const arrayInvertido = stringEmArray.reverse();

    const stringInvertida = arrayInvertido.join('')

    return stringInvertida;
}

function inverterStringForInvertido(stringOriginal) {
    const stringEmArray = stringOriginal.split('')
    const arrayInvertido = [];

    for (let index = stringEmArray.length -1; index >= 0; index--) {
        arrayInvertido.push(stringEmArray[index])

    }
        const stringInvertida = arrayInvertido.join('')


    return stringInvertida;
}
function inverterStringForUnshift(stringOriginal) {
    const stringEmArray = stringOriginal.split('')
    const arrayInvertido = [];

    stringEmArray.forEach(element => {
        arrayInvertido.unshift(element)
        
    });

  
        const stringInvertida = arrayInvertido.join('')


    return stringInvertida;
}




inverterString('renan')




