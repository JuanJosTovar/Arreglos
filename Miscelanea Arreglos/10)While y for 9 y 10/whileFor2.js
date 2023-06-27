let array = [true, true, false, true, false, false];
let contador = 0;
let contador2 = 0;

while (contador2 < array.length) {
    if (array[contador2] == false){
        contador++
    }
    contador2++
}
console.log(contador);


let array2 = ["z", "p", "s", "z", "o", "b", "a", "w", "d"];
let contenedor = 0;

for (let index = 0; index < array2.length; index++) {
    if (array2[index] === "a"){ 
        contenedor++;
    }
    if (array2[index] === "d") {
        contenedor++;
    }
    if (array2[index] === "s") {
        contenedor++
    }
    if (array2[index] === "o") {
        contenedor++
    }
}

if (contenedor == 4) {
    console.log("Con los elementos del arreglo es posible formar adso");
}else{
    console.log("Con los elementos del arreglo no es posible formar adso");
}
