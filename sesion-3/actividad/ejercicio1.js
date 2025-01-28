function contarCaracteres(cadena = ""){
    const longitud = cadena.length
    if(longitud === 0){
        console.warn("No ingresaste ninguna cadena")
        return;
    }
    console.log(`La cadena "${cadena}" tiene ${longitud} caracteres.`)
}

// Convertir a la función contarCaracteres en arrow function
const cuentaCadena = (cadena = "") => {
    const longitud = cadena.length
    if(longitud === 0){
        console.warn("No ingresaste ninguna cadena")
        return;
    }
    console.log(`La cadena "${cadena}" tiene ${longitud} caracteres.`)    
}

// reducir usando arrow function
const contarCadena = (cadena) => !cadena
    ? console.warn("No ingresaste ninguna cadena")
    : `La cadena "${cadena}" tiene ${cadena.length} caracteres.`
