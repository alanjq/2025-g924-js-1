// Objetos
function getPropertyNames(i, r){
    /*
    // Asignarle un valor a r cuando [r] no está definido
    r = r === undefined ? [4] : r

    // if en una sola línea
    if(r === undefined) r = [3]

    // Asignar valor usando or
    r = r || [2]
    
    // Asignar valor usando nullish
    r = r ?? [1]
    */

    if(r === undefined) r = []
    for(let property in i){
        r.push(property)
    }
    return r
}

let i = {
    x: 1
}
let t = {
    y: 2,
    z:3
}

console.log(getPropertyNames(i))

let r = getPropertyNames(i)
console.log(getPropertyNames(t, r))
