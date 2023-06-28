let edades = [20, 16, 19, 17, 20, 18, 22, 17];
let mayores = 0;

for ( i in edades) {
    if (edades[i] >= 18) {
        mayores++;
    }
}

console.log(mayores);