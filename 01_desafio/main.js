
function fizzBuzz(...params) {
    const ehMultiploDeTres = (n) => n % 3 === 0;
    const ehMultiploDeCinco = (n) => n % 5 === 0;
    params.forEach((n) => {
        if (ehMultiploDeTres(n)) {
            if (ehMultiploDeCinco(n)) {
                console.log("FizzBuzz");
                return;
            }
            console.log("Fizz");
            return;
        }

        if (ehMultiploDeCinco(n)) {
            console.log("Buzz");
            return;
        }

        console.log(n);
    });
}

fizzBuzz(...Array.from({ length: 100 }, (_, i) => i + 1));
