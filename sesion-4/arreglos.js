// Arreglos
let objeto = {
    propiedad: 'valor',
    metodo: function(){
        return "haz algo"
    }
}

// Arreglo vacío
let arreglo = []

// Agregar elementos al final
arreglo.push(1,2,3,4,5,6,7)

arreglo.push("final")

arreglo.unshift("inicio")

arreglo[4] = "cuatro"

delete arreglo[5]

// Limpiar el arreglo de elementos undefined
// let nuevoArreglo = []
// for (let index = 0; index < arreglo.length; index++) {
//     const element = arreglo[index];
//     console.log(element);
//     if(element && typeof element === "string"){
//         nuevoArreglo.push(element)
//     }
// }

// console.log(arreglo, "longitud del arreglo", arreglo.length);
// console.log(nuevoArreglo, "longitud del nuevo arreglo", nuevoArreglo.length);

const filtrarValores = (elemento) => {
    if(elemento && typeof elemento === 'number'){
        return elemento
    }
}
// console.log(arreglo.filter(filtrarValores));

Array.prototype.extraerNumeros = function(){
    return this.filter((elemento)=> {
        if(elemento && typeof elemento === 'number'){
            return elemento
        }
    })
}
// console.log(arreglo.extraerNumeros());

const arreglo2 = ["A","3",3,"",34,"",34,"","","",""]

// console.log(arreglo2.extraerNumeros());

let otroObjeto = {
    valor: 'A',
    palabras: [2,"r",9,"ii"]
}

otroObjeto.palabras.extraerNumeros()
// console.log(otroObjeto.palabras.extraerNumeros());


let arreglosTexto = ["texto", "otro texto", "algo más"]

let arreglosNumeros = [1,2,3,4,5]

let arregloMixto = [100, "textos", {},
    {
        nombre: 'Alguien',
        'apellido': 'N/A'
    },
    true,
    false,
    function(){
        return 'función dentro del arreglo'
    },
    function(){
        return 'función dentro del arreglo'
    },
    function(){
        return 'función dentro del arreglo'
    }

]

let results = {
    strings: 0,
    booleans: 0,
    numbers: 0,
    functions: 0,
    objects:0,
    others: 0
}

for (let index = 0; index < arregloMixto.length; index++) {
    const element = arregloMixto[index];
    
    switch (typeof element) {
        case "string":
            results.strings++;
            break;
        case "boolean":
            results.booleans++
            break;
        case "function":
            results.functions++
            break;
        case "number":
            results.numbers++
            break;
        case "object":
            results.objects++
            break;
        default:
            results.others++
            break;
    }
}

arreglosTexto.forEach((item, index)=>{
    // console.log('Elemento:', index, 'Valor:', item);
})

// console.log(results);

let combinarArreglos = arreglosTexto.concat(arregloMixto,arreglo2, arreglosNumeros)

let otraCombinacion = [arreglo, arreglo2, arregloMixto]

console.log(otraCombinacion.length, otraCombinacion);
