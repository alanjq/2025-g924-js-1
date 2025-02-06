// Clase padre
class Figura{
    constructor(){
        console.log("Soy una figura geométrica");
    }
    setArea(area){
        this._area = area
    }
    getArea(){
        return this._area
    }
}

// Clase hija
class Triangulo extends Figura {
    constructor(){
        super()
        console.log("Soy un triangulo");
        
    }
}
