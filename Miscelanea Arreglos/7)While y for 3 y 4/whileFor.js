let array4 = [3, 50, 70, 600, 40];
let contador = 0;

while (contador < array4.length) {
    console.log(array4[contador]);
    contador++;
}

for (let index = 0; index < array4.length; index++) {
    let numero = array4[index];
    if (numero % 2 == 0) {
        console.log(numero);
    }
}