function holaMundo(miNombre) {
    alert("Hola mundo con JS - " + miNombre)
}

// alert("Bienvenido al curso de JAVASCRIPT")

// holaMundo("Alan")

function operacion(valor1, valor2) {
    return valor1 * valor2
}

const V1 = 9, V2 = 3;
const TEXTO_OPERACION = `El resultado es: ${V1}+${V2}=${operacion(V1, V2)}`
console.log("El resultado de la multiplicación es:", V1, "+", V2, "=", operacion(V1, V2))
console.log(TEXTO_OPERACION)

// Manejo de objetos
let MUNDO = {
    PAIS: 'México',
    CONTINENTE: 'América',
    CIUDAD: 'Cancún',
    getUbicacion: function() {
        // return this.CIUDAD + ", " + this.PAIS + ", " + this.CONTINENTE
        return `${this.CIUDAD}, ${this.PAIS}, ${this.CONTINENTE}`;
    }
}

MUNDO.getUbicacion()
