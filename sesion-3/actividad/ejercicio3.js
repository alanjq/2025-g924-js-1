function factorial(n){
    // Validaciones del número factorial
    if(!n){
        console.warn("No ingresaste un número.")
        return;
    }
    if(isNaN(n)){
        console.error(`El valor ingresado (${n}) NO es un número.`)
        return;
    }
    if(n === 0){
        console.error("El número no puede ser 0.")
    }
    if(Math.sign(n) === -1){ // Si es un número negativo
        console.error("El número no puede ser negativo.")
    }

    let resultado = 1;
    for(index = n; index > 1; index--){
        resultado = resultado * index
    }
    console.log(`El factorial del número ${n} es ${resultado}`)
    
}

// console.log("Ingresa un número");
let numero = prompt("Ingresa un número")
factorial(numero)
