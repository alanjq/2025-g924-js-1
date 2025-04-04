let presupuesto = {
    objetos: [],
    agregar(tipo, descripcion, cantidad){
        this.objetos.push({tipo, descripcion, cantidad})
    },
    agregarIngreso(descripcion, cantidad){
        this.agregar('+', descripcion, cantidad)
    },
    agregarEgreso(descripcion, cantidad){
        this.agregar('-', descripcion, cantidad)
    },
    sumar(tipoSuma){
        return this.objetos.filter((tipo)=>tipo===tipoSuma).reduce((total, cur)=>total+cur)
    },
    sumarIngresos(){
        return this.sumar('+')
    },
    sumarEgresos(){
        return this.sumar('-')
    }
}
window.presupuesto = presupuesto
presupuesto.agregarIngreso('vender articulo', 300)
presupuesto.agregarEgreso('renta', 300)

presupuesto.agregarIngreso()
presupuesto.sumarIngresos
