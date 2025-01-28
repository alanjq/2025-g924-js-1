// Declaración de objetos con métodos
const CLASE = "G9"

const Alumnos = {
    personas: [],
    agregar(...personas){
        console.log('THIS. Agregar', this);
        this.personas.push(...personas)
    },
    saludar(numero){
        return `Hola, mi nombre es ${this.personas[numero]}`
    },
    obtenerNumero(nombre){
        return this.personas.indexOf(nombre)
    },
    existe: (quien) => {
        let resultado = Alumnos.personas.includes(quien)
        return `${quien} ${resultado ? 'sí está' : 'no se encuentra'} en la clase ${CLASE}`
    }
}

console.log(Alumnos.agregar("Esteban", "Leonardo", "Paola", "Ángel", "Julio"));
console.log(Alumnos.personas);
console.log(Alumnos.saludar(1));
console.log(Alumnos.obtenerNumero("Julio"));
console.log(Alumnos.saludar(4));
console.log();




