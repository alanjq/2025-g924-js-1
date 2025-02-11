
function interseccion(a, b) {
    var resultado = []


    for (let index = 0; index < a.length; index++) {
        for (let j = 0; j < b.length; j++) {
            if (a[index] == b[j]) {
                resultado.push(a[index])
                break;
            }
        }
    }

    return resultado.sort()
}

function saludar(extra){
    return `Saludo, ${extra}`
}


const insterseccion2 = (a, b) => a.filter(() => {
    value => b.indexOf(value) > -1 .sort()
})

const algoAEliminar = (nombre, apellido) => {
    return ({
        nombre,
        apellido
    })
}

// interseccion'Leonardo');
console.log(interseccion(4));
console.log(algoAEliminar('Leonardo', 'Gonzalez'));
console.log(algoAEliminar());


const eliminarxCosa = (propiedadAEliminar, objeto) => {
    const hola_eliminar_nombre =  objeto.filter( (item)=> {
       if(item != propiedadAEliminar){
        return propiedadAEliminar
       }
    })

    return hola_eliminar_nombre
}

console.log(eliminarxCosa);


// Usando map y filter
const usandoFiltros = ["a", "b","c", "bd", "e", "bf"]
let emptyFilter = []
usandoFiltros.filter((columna)=>{
    if( columna.lastIndexOf(1)){
        emptyFilter.push(columna)
    }else{
        breaK;
    }

    return columna
})

console.log(usandoFiltros);

console.log('usandoFiltros', usandoFiltros);


console.log("resultado de filtros", usandoFiltros);


