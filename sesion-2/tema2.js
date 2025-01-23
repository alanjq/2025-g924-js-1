function dentroDelRango(valor, minimo, maximo){
    if(valor <= maximo && valor >= minimo){
        return true
    }
    return false
}


function diaDeLaSemanaSwitch(numero){
    switch (numero) {
        case 1: return "Lunes"
        case 2: return "Martes"
        case 3: return "Miércoles"
        case 4: return "Jueves"
        case 5: return "Viernes"
        case 6: return "Sábado"
        case 7: return "Domingo"

        // Cualquier otro valor que no esté listado arriba
        default: 
            return "Ingresa un número válido entre 1 y 7"
    }
}

console.log(diaDeLaSemanaSwitch(6));
console.log(diaDeLaSemanaIf(2));

// Menor a 7
console.log(dentroDelRango(1, 1, 7));

console.log(diaDeLaSemana("s"))

console.log(isNaN(2));
