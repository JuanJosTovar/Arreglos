const cadena = "Somos SENA";
let element = false;

for (let index = 0; index < cadena.length; index++) {
    if (cadena[index] == "E") {
        element = true; 
    }
}

if (element) {
    console.log("La cadena contiene la letra E");
}else{
    console.log("La cadena no contiene la letra E");
}


