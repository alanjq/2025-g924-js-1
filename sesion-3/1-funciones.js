function ejemploSencillo() {
    // Función sin parámetros
    return "Saludos desde la función sin parámetros"
}

function ejemploCon1Parametro(texto){
    return "Ejemplo de función con 1 parámetro. " + texto
}

// Invocar a una función
ejemploSencillo()

// Función con cuadrado
function cuadrado(numero){
    let resultado = 0
    if(isNaN(numero)){
        // Si no es un número, devolvemos el mensaje de error
        return "Ingrese un valor numérico"
    }else{
        resultado = numero * numero
    }

    return resultado
}

console.log(cuadrado(6));

// No se puede acceder a una variable que está dentro de una función
// console.log(resultado);

// Llamar a funciones dentro de otras
function saludaYCalcula(nombre, numero, index){
    console.group(index, "SALUDAR Y CALCULAR")
    console.log("Mi nombre es: ", nombre)
    let resultado = cuadrado(numero)
    console.log("El cuadrado de:",numero, 'es =', resultado);
    console.groupEnd()
}

saludaYCalcula("Alan", 7 + index, index)
