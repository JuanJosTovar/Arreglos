const arreglo = [5, 7, 90, 2, 5, 3, 8, 99];
let numerosConsecutivos = [];

arreglo.forEach((a) => {
  arreglo.forEach((b) => {
    if (a + 1 === b) {
      numerosConsecutivos.push([a, b]);
    }
  });
});

console.log(numerosConsecutivos);