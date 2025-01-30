const jugador = {
    nombre: 'Ryu',
    vida: 1,
    totalVida: 6,
    toString(){
        return `${this.nombre} (${this.vida}/${this.totalVida})`
    }
}

console.log("Jugador: ", jugador.toString());

