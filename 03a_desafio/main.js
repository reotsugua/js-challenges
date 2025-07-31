const valoresRepetidos = [10, 2, 3, 4, 5, 6, 6, 8, 9, 10, 10, 11, 10, 12, 13, 13, 99, 99, 99]

function removerDuplicatasComObj(array){
    const verificador = {};
    const novoArray = [];

    for (const element of array) {
        if (!verificador[element]) {
            novoArray.push(element);
            verificador[element] = true;
        }
    }
    return novoArray;
}

function removerDuplicatasComSet(array) {
    const semRepeticao = new Set(array);
    return [...semRepeticao];
}

function removerDuplicatasComForESplice(array) {
    const novoArray = array;    
    
    array.forEach(element => {
        
        var contador = 0;
        for (let index = 0; index <= novoArray.length-1; index++) {
            const elemento = novoArray[index];
            
            if (element === elemento) {
                contador++
                
                if (contador > 1) {     
                    novoArray.splice(index, 1) 
                }
            }
        }
        contador = 0;
    });

    return novoArray;
}

function removerDuplicatasComFilter(array) {
    let novoArray = array;    
    
    array.forEach(element => {
        
        novoArray = novoArray.filter(n => n !== element);
        novoArray.push(element);

    });

    return novoArray;
}

function removerDuplicatasComFilterEIndexOf(array){
    return array.filter((n, index)=>{
        return array.indexOf(n) === index;
    })
}




 