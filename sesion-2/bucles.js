// Bucles
//  while
//  do while
//  for

function iniciarBucleWhile(){
    let limiteBucle = document.getElementById("inputBucleWhile").value
    let contador = 0
    let cadenaHTML = ""

    // While
    while (contador < limiteBucle) {
        cadenaHTML += `<li>Contador vale ${contador}</li>`
        // Aumentar el valor de contador en 1 al ejecutar cada iteración del código
        
        // Salir del elemento cuando se alcance el valor indicado
        // if(contador == 4){
        //     console.log('salir');
            
        //     break;
        // }
        contador++
         // Evitar que se cicle al alcanzar determinada can
        //  if(contador === 1000){
        //     break;
        // }
    }
    console.log(cadenaHTML);
    alert("El ciclo WHILE finalizó.")
    // Imprimir el HTML dentro del div bucles
    document.getElementById("bucleWhileContainer").innerHTML = cadenaHTML
}

function iniciarBucleFor(){
    let limite = document.getElementById("inputBucleFor").value
    let codigoHTML = ""

    for( let contador = 1; contador <= limite; contador++){
        codigoHTML+= `<li>Elemento ${contador} de ${limite}</li>`
    }
    
    document.getElementById("bucleForContainer").innerHTML = codigoHTML
}


const libro = {
    titulo: "Javascript",
    autor: "David Flanagan",
    paginas: 323
}

for(prop in libro){
    console.log(prop, libro[prop]);

}

