// Clases basadas en animales con clase

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

console.log(Animal);



// Crear el objeto a partir de otro e inicializando sus valores
// Perro
let perro = {
    ...Animal,
    correa: true,
    ladrar(){
        return 'guau'
    }
}

perro.nombre = 'firulais'
perro.peso = 1.7
perro.dueno = 'Juan'
perro.caminar = function(){
    return 'el perro está caminando'
},
perro.dormir = () => 'el perro duerme'


// Gato
let gato = {
    nombre: 'misifus',
    peso: 1,
    propiedario: 'karen',
    juguete: 'raton de tela',
    maullar(){
        return 'miau'
    },
    caminar(){
        return 'el gato camina'
    },
    dormir(){
        return 'el gato duerme'
    }
}

// Hamster
let hamster = {
    nombre: 'chico',
    peso: .400,
    propiedario: 'edgar',
    juguete: 'rueda',
    mascar(){
        return 'el hamster mastica'
    },
    caminar(){
        return 'el gato camina'
    },
    dormir(){
        return 'el gato duerme'
    }
}

