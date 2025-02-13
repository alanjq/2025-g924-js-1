function interseccion(a, b){
    var resultado = []

    for(var i=0; i < a.length; i++ ){
        for(var j = 0; j < b.length; j++){
            if(a[i] === b[j]){
                resultado.push(a[i])
                break
            }
        }
    }
    return resultado.sort()
}

let A = ["a", "c", "b"]
let B = ["f","a"]

console.log(interseccion(A, B))
