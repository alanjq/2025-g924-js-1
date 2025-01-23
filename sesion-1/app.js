// Creando funciones
let texto_saludo = "Hola desde Javascript"
const texto_saludo2 = "Hola desde Javascript"
var texto_saludo3 = "Hola desde Javascript"

function saludo() {
    console.log("Hola desde Javascript")

    function despedida() {
        console.log(texto_saludo3)
    }
    despedida()
}

function otra() {
    console.log("otra")
}

saludo()

// Muestra el mensaje según la ocasión
function mostrarMensaje(isSaludo, mensaje) {
    if (isSaludo) {
        return "Bienvenido a " + mensaje
    } else {
        // return "Adiós. (" + mensaje + ")"
        return `Adiós. (${mensaje})`
    }
}

// Saludo
console.log(mostrarMensaje(true, "Javascript I"))
console.log(mostrarMensaje(false, "Javascript I"))


// Comentario en una línea

/*
 * Comentario multi línea
 * este comentario puede llevar
 * varias líneas
 */

/*
 Comentario multi línea
 este comentario puede llevar
 varias líneas
 */