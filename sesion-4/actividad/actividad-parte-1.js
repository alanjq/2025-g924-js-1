const PIEDRA = 2
const PAPEL = 1
const TIJERA = 0

const NOMBRE_JUGADOR_1 = "Jugador 1"
const OPCIONES = {
    0: "Tijera",
    1: "Papel",
    2: "Piedra"
}
const jugadores = {
    jugador1: NOMBRE_JUGADOR_1,
    jugador2: "Computadora"
}
const scores = {
    puntosJ1: 0,
    puntosJ2: 0
}

// ([a-zA-Z 0-9]+\w+)
function esNombreValido(eltexto) {
    let REGEXP = new RegExp(/^([a-zA-Z 0-9]+\w+)$/)
    return REGEXP.test(eltexto)
}


// Solicitar el nombre del usuario
const pedirNuevoNombre = () => prompt("Ingresa el nombre del jugador 1")

function cambiarNombre() {
    let elnombre = pedirNuevoNombre()
    if (esNombreValido(elnombre)) {
        jugadores.jugador1 = elnombre
        console.warn(`Bienvenido ${jugadores.jugador1}`);
    } else {
        console.warn(`Mejor te llamaré: ${NOMBRE_JUGADOR_1}`);
        jugadores.jugador1 = NOMBRE_JUGADOR_1
    }
}

function generaAleatorio() {
    const MINIMO = 0
    const MAXIMO = 2
    return Math.floor(Math.random() * (MAXIMO - MINIMO + 1)) + MINIMO;
}

function imprimirManoAleatoria() {
    let manoJugador1 = generaAleatorio()
    let manoComputadora = generaAleatorio()
    console.log(jugadores.jugador1, 'Usa', OPCIONES[manoJugador1], ",", jugadores.jugador2, 'Juega con', OPCIONES[manoComputadora]);

    return [manoJugador1, manoComputadora]
}

// 0: empate
// 1: jugador 1
// 2: jugador 2
function obtenerResultado(manoJugador1, manoComputadora) {
    if (manoComputadora == manoJugador1) {
        return;
    }

    // 0: "Tijera",
    // 1: "Papel",
    // 2: "Piedra"
    // Computadora: tijera. Jugador: papel. Ganador: Computadora+
    // Si computadora juega con 0 - Tijera
    if (manoComputadora == 0) {
        // Gana contra papel a jugador1
        if (manoJugador1 == 1) {
            scores.puntosJ2++
        }
        // Si Jugador 1 gana con piedra
        if (manoJugador1 == 2) {
            scores.puntosJ1++
        }
    } else if (manoComputadora == 1) {
        // Jugador 1: tijera.
        if (manoJugador1 == 0) {
            scores.puntosJ1++
        }
        // Jugador 1: piedra
        if (manoJugador1 == 2) {
            scores.puntosJ2++
        }
        // Computadora: Piedra
    } else if (manoComputadora == 2) {
        // Jugador 1: Tijera
        if (manoJugador1 == 0) {
            scores.puntosJ2++
        }
        // Jugador 1: Papel
        if (manoJugador1 == 1) {
            scores.puntosJ1++
        }
    }

}

const GAME_OVER = 2 // A las cuantas victorias se termina el juego

pedirNuevoNombre()

while (scores.puntosJ1 <= GAME_OVER && scores.puntosJ2 <= GAME_OVER) {
    let [manoJ1, manoJ2] = imprimirManoAleatoria()
    obtenerResultado(manoJ1, manoJ2)
}
if (scores.puntosJ1 > scores.puntosJ2) {
    console.log('El ganador es', jugadores.jugador1, 'con', scores.puntosJ1, 'victorias');
} else {
    console.log('El ganador es', jugadores.jugador2, 'con', scores.puntosJ2, 'victorias');
}


