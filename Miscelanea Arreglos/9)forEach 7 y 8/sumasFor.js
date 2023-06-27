let array = [15, 7, 9, 12, 1];
let contador = 0;

array.forEach(element => {
    contador = contador + element;
})
console.log("La suma de los elementos es :",contador);


let array2 = [-2, 8, 99, 1, 7];
let contador2 = 0;

array2.forEach(element => {
    op = element * element;
    contador2 = contador2 + op
});

console.log(contador2)

