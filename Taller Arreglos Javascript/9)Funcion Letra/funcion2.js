function recibirLetra(letra) {

    arreglo = ["a", "b", "c", "d", "e", "f", "g"];

    for (let index = 0; index < arreglo.length; index++) {
        if (letra === arreglo[index]) {
            return true;
        }
    }
    return false;
}

let letraEjemplo = prompt("Ingrese una letra del alfabeto");
let verificacion = recibirLetra(letraEjemplo);
console.log(verificacion);


