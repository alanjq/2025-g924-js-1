const objeto = {}

Object
String
let cadena = "ABCD"

String.prototype.formatearSaludo = function(extra = ""){
    return "Hola. " + this.toString() + ". " + extra
}

cadena.length
console.log("ABCD".charAt(0));
console.log("ABCD".charAt(1));
console.log("ABCD".charAt(2));
console.log("ABCD".charAt(3));

console.log(cadena.length);
console.log(cadena.formatearSaludo("Estamos en clase"));

let numero = 50.23414
console.log(typeof numero);
console.log(typeof numero.toString());

let array = ['a','b','c','d']
console.log(array.toString());
console.log(array.toString().replaceAll(',',''));
console.log(array.join(''));

// Mostrar los decimales que querramos
console.log(numero.toFixed(4));
