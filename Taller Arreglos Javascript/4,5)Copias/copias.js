/*Copia dependiente*/
let c = ["abc", 4, 88, 99];
let d = c;
console.log("Copia sin modificar :",d);

c.push(false);
console.log("Copia modificando el original :",d)





/*Copia independiente*/
let a = [2, 6, 9, 0, 5];
let b = a.slice()

a[0] = 10;

console.log(a)
console.log(b)

b[2] = 12

console.log(a)
console.log(b)

