// Clases basadas en animales con clase
function nuevoAnimal(nombre, peso, propietario, caminar, dormir){
    return {
        nombre: nombre,
        peso,
        propietario,
        caminar,
        dormir
    }
}

const hamsterQueCamina = ()=> {
    return "El hamster camina"
}

const HamsterCreado = nuevoAnimal('Firulais 2', 900, 'yo', hamsterQueCamina, function(){
    return "durmiendo"
},'90', true, false, false)

// Clase padre
const Animal = {
    nombre: '',
    peso: '',
    propietario: '',
    // correa - perro
    // juguete - gato
    // ladrar - perro
    // mascar -hamster
    caminar(){},
    dormir(){}
}

let personaPrototipo = {
    hablar(palabras){
        console.log(`La persona ${this.tipo} dice '${palabras}'`);
    }
}

let persona1 = Object.create(personaPrototipo)
persona1.tipo = "Sonriente"
persona1.hablar('JAJAJA')


// Los métodos provienen de la clase prototipo
