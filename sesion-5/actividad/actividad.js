class Libro {
    constructor(precio, titulo, autor){
        this._precio = precio
        this._titulo = titulo
        this._autor = autor
    }

    setPrecio(precio){
        this._precio = precio
    }

    getPrecio(){
        return this._precio
    }

    setTitulo(titulo){
        this._titulo = titulo
    }

    getTitulo(){
        return this._titulo
    }

    setAutor(autor){
        this._autor = autor
    }

    getAutor(){
        return this._autor
    }

    obtenerTodosLosDatos(){
        // `Titulo: ${this.getTitulo()}, Autor: ${this.getAutor()}, Precio: ${this.getPrecio}`
        return `Titulo: ${this._titulo}, Autor: ${this._autor}, Precio: ${this._precio}`
    }

}

class Comic extends Libro {

    _ilustradores = []

    constructor(ilustradores, precio, titulo, autor){
        super(precio, titulo, autor)
        this._ilustradores = ilustradores
    }

    agregarIlustrador(ilustrador){
        this._ilustradores.push(ilustrador)
    }

    obtenerIlustradores(){
        return this._ilustradores.join(', ')
    }
}

let miComic = new Comic(['Tom', 'Juan', 'Paco'], 50, "Historia", "Todos")
miComic.agregarIlustrador('Otro más')
console.log( miComic.obtenerIlustradores())
