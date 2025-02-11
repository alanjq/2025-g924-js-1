const compose = (...functions) => data =>
    functions.reduceRight((value, func) => func(value), data)

let elementos = []
let descripcion = 0
let calorias = 0
let carbohidratos = 0
let proteina = 0

function validarInput(idControl) {
    let inputControl = document.getElementById(idControl)
    
    if(!inputControl){
        console.log('falso');
        return false
    }
    if (inputControl.value === "") {
        // Vacío
        inputControl.classList.add('is-invalid')
        inputControl.classList.remove('in-valid')
        return false;
    } else {
        // Correcto
        inputControl.classList.add('is-valid')
        inputControl.classList.remove('is-invalid')
        // agregar()
        return inputControl.value
    }
}

function limpiarInputs(){
    document.getElementById('descripcion').value = ""
    document.getElementById('calorias').value = ""
    document.getElementById('carbohidratos').value = ""
    document.getElementById('proteina').value = ""

    document.getElementById('descripcion').classList.remove('is-valid', 'is-invalid')
    document.getElementById('calorias').classList.remove('is-valid', 'is-invalid')
    document.getElementById('carbohidratos').classList.remove('is-valid', 'is-invalid')
    document.getElementById('proteina').classList.remove('is-valid', 'is-invalid')
}

function agregar(){
    let descripcion = validarInput('descripcion')
    let calorias = validarInput('calorias')
    let carbohidratos = validarInput('carbohidratos')
    let proteina = validarInput('proteina')

    let nuevoElemento = { descripcion, calorias, carbohidratos, proteina }
    if(descripcion && calorias && carbohidratos && proteina){
        elementos.push(nuevoElemento)
        console.log(elementos);
        actualizarLista()
        limpiarInputs()
    }else{
        // alert('incorrecto')
    }
}

function actualizarLista(){
    const tabla = document.getElementById('contenidoTabla')
    let htmlTabla = ''
    elementos.map((item)=>{
        htmlTabla += `<tr>
            <td>${item.descripcion}</td>
            <td>${item.calorias}</td>
            <td>${item.carbohidratos}</td>
            <td>${item.proteina}</td>
        </tr>`
    })
    tabla.innerHTML = htmlTabla

    // Mostrar la fila de resultados
    document.getElementById('totalCalorias').innerText = sumarValores(elementos, 'calorias')
    document.getElementById('totalCarbohidratos').innerText = sumarValores(elementos, 'carbohidratos')
    document.getElementById('totalProteina').innerText = sumarValores(elementos, 'proteina')
}

const sumarValores = (objeto, columna) => objeto.reduce((a,b)=>a[columna]+b[columna])
