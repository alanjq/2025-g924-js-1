let pelicula = (function (nombrePelicula, callback) {
    return `El nombre de la película es ${nombrePelicula}, opinión: ${callback()}`
})

function opinionPelicula() {
    return "Estuvo entretenida."
}

// Usando callbacks
console.log(pelicula("Avengers", opinionPelicula))

function sumame(a, b, sumaYMuestra, sumaPorDos) {
    let resultadoSuma = a + b
    sumaYMuestra(resultadoSuma) // callback de resultado de suma
    sumaPorDos(resultadoSuma * 2)
}

sumame(2, 4, function (resultado) {
    // Este sería: sumaYMuestra
    console.log('La suma es:', resultado);
}, function (resultado) {
    // Este es el callback: sumaPorDos
    console.log('La suma x2 es:', resultado);
})

