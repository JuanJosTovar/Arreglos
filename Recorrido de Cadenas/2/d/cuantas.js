const cadena = "Somos SENA";
let contador = 0;

for (let index = 0; index < cadena.length; index++) {
    if (cadena[index] == "o") {
        contador++
    }
}

console.log("La o se encuentra",contador,"veces");