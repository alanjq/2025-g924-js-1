// Funciones anónimas
const cuadrado = function(numero) {
    return numero * numero
}

// let diezCuadrado = (function(x){
//     return x*x
// })(10)

// Funciones que se ejecutan automáticamente
(function(){
    var nombre = "Juan"
    console.log('El nombre es', nombre);
    document.write("Sitio cargado")
    window.$prueba = function(){
       return  "Hola"
    }
}())
