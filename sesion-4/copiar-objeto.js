// let animal = 'perro'
// Copia de objetos por asignación (por valor)
// let mascota = animal

// animal = 'dinosaurio'
// console.log(mascota);
// console.log(animal);

// Copia por referencia
let animal = {
    especie: 'Perro',
    altura: '1m'
}

let mascota = animal
animal.especie = 'dinosaurio'
mascota.altura = '2m'
delete mascota.altura

console.log('Especie', animal);