let cadena = "Javascript es genial";
let contadorPalabras = 0;

for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] === " ") {

    if (i > 0 && cadena[i - 1] !== " ") {
      contadorPalabras++;
    }
  }
}

if (cadena[cadena.length - 1] !== " ") {
  contadorPalabras++;
}

console.log("La cadena está compuesta por " + contadorPalabras + " palabras.");