/* Selectores
 . clases
 # ids
   tag /etiqueta
 [] atributo
*/

function compararNumeros() {
    let valor1 = parseInt(document.querySelector("#valor1").value)
    let valor2 = parseInt(document.querySelector("#valor2").value)
    let resultado = ""

    if (valor1 === valor2) {
        resultado = "Los dos números iguales"
    } else if (valor1 > valor2) {
        resultado = `El valor1 (${valor1}) es mayor que valor2 (${valor2}).`
    } else {
        resultado = `El valor2 (${valor2}) es mayor que valor1 (${valor1}).`
    }

    // Mostrar el mensaje
    document.querySelector("#mensaje").innerText = resultado
}

function getMovimientos() {
    return [{
        ingreso: 'Depósito',
        cantidad: 400
    }, {
        egreso: 'Compra en tienda',
        cantidad: 30
    }, {
        ingreso: 'Transferencia',
        cantidad: 2300
    }, {
        egreso: 'Transferencia a alguien',
        cantidad: 900
    }, {
        egreso: 'Pago colegiatura',
        cantidad: 500
    }]
}

function verTabla() {
    let movimientos = getMovimientos()
    let htmlTableBody = ""
    movimientos.forEach(mv => {
        htmlTableBody += `<tr>
        <td>${mv.ingreso ? mv.cantidad : ''}</td>
        <td>${mv.egreso ?  `-${mv.cantidad}` : ''}</td>
        <td>${mv.egreso ?? mv.ingreso}</td>
        </tr>`
    });
    document.getElementById("tableContent").innerHTML = htmlTableBody
}
