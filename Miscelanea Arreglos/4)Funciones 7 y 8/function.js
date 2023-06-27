function imprimirElementos(argumento) {
    for (let index = 0; index < argumento.length; index++) {
        console.log(argumento[index]);
    }
}

let argumentosCons = imprimirElementos([2, 5, 7, 9]);

function contarElementos() {
    let arregloEjemplo = prompt("Ingrese los elementos del arreglo con espacios entre ellos").split(",");
    return arregloEjemplo.length;
}

let cantidadElementos = contarElementos();
console.log("La cantidad de elementos que introdujo son: ",cantidadElementos);
