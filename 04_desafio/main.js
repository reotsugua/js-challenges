function encontrarUnicoComObjVistos(array){
    const vistos = {};

    for (const element of array) {
        vistos[element] = (vistos[element] || 0) + 1;
    }

    return Object.keys(vistos).filter(key => vistos[key] === 1)[0];
}

function encontrarUnicoComObjVistosDois(array){
    const vistos = {};

    for (const element of array) {
        vistos[element] = (vistos[element] || 0) + 1;
    }

    return Number(Object.keys(vistos).find(key => vistos[key] === 1));
}

function encontrarUnicoComContador(array){
    let numeroEncontrado = null;

    for (const element of array) {
        let contador = 0;
        
        for (let index = 0; index < array.length; index++) {
            if (element === array[index]) {
                contador ++;
            }
            
        }

        if (contador === 1) {
            numeroEncontrado = element;
        }
    }

    return numeroEncontrado;
}

function encontrarUnicoXOR(array){
    return array.reduce((acc, crr) => acc ^ crr);
}




console.log(encontrarUnicoComObjVistosDois([1, 2, 3, 7, 2, 3, 1]));

