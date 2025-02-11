// POO
class Persona {
    constructor(nombre, apellido){
        this._nombre = nombre
        this._apellido = apellido
    }

    getSaludo(){
        return `Hola me llamo ${this._nombre} ${this._apellido}` 
    }

    setNombre(elnombre){
        this._nombre = elnombre
    }
}

// Mediante funciones
function crearPersona(nombre, apellido) {
    return {
        nombre,
        apellido,
    }
}

function saludar(mensaje){
    return `${mensaje}`
}
 
 // Mediante programación orientada a objetos
 let otraPersona = new Persona('Gandhi', 'Romero')
 console.log(otraPersona.getSaludo());
 
 //  Mediante Programación funcional
 let unaPersona = crearPersona(nombre='Esteban', apellido='Castellanos')

console.log( saludar(`Hola, estoy esperando a: ${apellido} ${nombre}`))


