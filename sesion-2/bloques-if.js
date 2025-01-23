function dentroDelRango(valor, minimo, maximo){
    if(valor <= maximo && valor >= minimo){
        return true
    }
    return false
}


function diaDeLaSemanaIf(numero) {
    // Si [numero] no es un número
    if (isNaN(numero)) {
        return "No es un número válido"
    }

    // Elegir un día de la semana válido
    if (dentroDelRango(numero, 1, 7)) {

        if (numero == 1) {
            return "Lunes"
        }
        else if (numero === 2) {
            return "Martes"
        } else if (numero === 3) {
            return "Miércoles"
        }
        else if (numero === 4) {
            return "Jueves"
        }
        else if (numero === 5) {
            return "Viernes"
        } else if (numero === 6) {
            return "Sábado"
        }
        else {
            return "Domingo"
        }

        // a veces se ignora el else
        return "Domingo"

    }

    return "Ingresa un número válido entre 1 y 7"
}

// If con operador ternario
console.log(diaDeLaSemanaIf(3));

if( diaDeLaSemanaIf(3) == 'Miércoles'){
    console.log("Correcto");
}else{
    console.error("Incorrecto");
}

let esMiercoles = diaDeLaSemanaIf(3) == "Miércoles" ? "Sí" : "No"
console.log("Es míercoles?", esMiercoles);
