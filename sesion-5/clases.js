class Persona {
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }
    hablar(palabras){
        console.log(`La persona ${this.tipo} dice: '${palabras}'`);
    }
}

let estaPersona = new Persona()
estaPersona.tipo = 'normal'

let otraPersona = new Persona('Leo', 30)
estaPersona.hablar('algo')
