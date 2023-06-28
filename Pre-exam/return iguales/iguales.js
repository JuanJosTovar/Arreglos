function devolverIguales(arreglo,arreglo2) {
  let suma ="";
  let array1 = "";
  let array2 = "";
  let repetidos = []

  for (let index = 0; index < arreglo.length; index++){
    array1 = arreglo[index];
    for (let index1 = 0; index1 < arreglo2.length; index1++) {
        array2 = arreglo2[index1];
        if (array1 == array2) {
            suma = array1 + array2;
            repetidos.push(suma)
        }
        
    }
  }
  return repetidos;
}

console.log(devolverIguales(["s", "w", "@", "3", "a", "p"],["# ", "p", "a", "z", "@"]));