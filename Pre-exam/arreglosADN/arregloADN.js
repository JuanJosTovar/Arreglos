function baseADN() {
    let arreglo = [];
  
    for (let index = 0; index < 4; index++) {
      let cadena = "";
  
      while (cadena.length !== 7) {
        cadena = prompt("Ingresa la cadena de ADN #" + (index + 1) + " (longitud 7):").toUpperCase();
        if (cadena.length !== 7) {
          alert("La cadena de ADN debe tener una longitud de 7 caracteres.");
        }
      }
      arreglo.push(cadena);
    }
  
    let validacion = true;
  
    for (let index = 0; index < arreglo.length; index++) {
      for (let j = 0; j < arreglo[index].length; j++) {
        if (arreglo[index][j] !== "A" && arreglo[index][j] !== "C" && arreglo[index][j] !== "T" && arreglo[index][j] !== "G") {
          validacion = false;
        }
      }
    }
  
    if (!validacion) {
      console.log("Una o más cadenas de ADN contienen caracteres inválidos.");
      return arreglo;
    }
  
    let A = 0;
    let C = 0;
    let T = 0;
    let G = 0;
  
    for (let index = 0; index < arreglo.length; index++) {
      for (let j = 0; j < arreglo[index].length; j++) {
        if (arreglo[index][j] == "A") {
          A++;
        }
        if (arreglo[index][j] == "C") {
          C++;
        }
        if (arreglo[index][j] == "T") {
          T++;
        }
        if (arreglo[index][j] == "G") {
          G++;
        }
      }
    }
  
    if (A > C && A > T && A > G) {
      console.log("La base que más se repite es A.");
    } else if (C > A && C > T && C > G) {
      console.log("La base que más se repite es C.");
    } else if (T > A && T > C && T > G) {
      console.log("La base que mas se repite es T");
      
    } else if(G > A && G > C && G > T){
      console.log("La base que mas se repite es G");
    }
    return arreglo;
  }
  
  let resultado = baseADN();
  console.log(resultado);