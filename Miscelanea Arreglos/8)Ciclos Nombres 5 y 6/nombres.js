let array5 = ["Maria", "Pedro", "Juan", "Pablo", "Diana"];
let condicion = false;

for (let index = 0; index < array5.length; index++) {
     if (array5[index] === "Juan"){
        condicion = true;
        break;
    }
}

if (condicion){
    console.log("El nombre Juan se encuentra dentro del arreglo");
}else{
    console.log("El nombre Juan no se encuentra dentro del arreglo");
}

let array6 = ["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"];
let contador = 0;

for (let index = 0; index < array6.length; index++) {
    if (array6[index] === "Maria"){
        contador++
    };
    
}
console.log("El nombre Maria se encuentra :",contador,"veces");