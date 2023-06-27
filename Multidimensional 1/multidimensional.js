let arregloBidimensional = [ ["a", "z", "t"], [789, 887, 451], [true, false, 0] ];

console.log(arregloBidimensional [0][1]);
console.log(arregloBidimensional [1][0]);
console.log(arregloBidimensional [2][2]);
console.log(arregloBidimensional [2][1]);

let arregloBidimensional2 = [ [ ["%", 7, true, "#"] ], [ [false, 0, 99, "?"] ], [ [44, 55, 66, 77] ] ];

console.log(arregloBidimensional2 [1][0][3]);
console.log(arregloBidimensional2 [2][0][2]);
console.log(arregloBidimensional2 [0][0][2]);
console.log(arregloBidimensional2 [0][0][0]);
/*console.log(arregloBidimensional2 [0][0][2]); imprimira 2*/
/*console.log(arregloBidimensional2 [2][0][0]); imprimira 44*/
/*console.log(arregloBidimensional2 [1][0][3]); imprimira ?*/
/*console.log(arregloBidimensional2 [0][1][1]); error*/

let arregloBidimensional3 = [ [ [0], [2, 77] ], [ ["&", true, "!!"], [[88]] ], [ [ [ [1] ] ] ], "¿" ];

console.log(arregloBidimensional3 [1][0][1]);
console.log(arregloBidimensional3 [2][0][0][0][0]);
console.log(arregloBidimensional3 [0][1][1]);
console.log(arregloBidimensional3 [1][1][0][0]);
console.log(arregloBidimensional3 [3]);

let arregloBidimensional4 = [ [50, 60, 70], ["q", "%", "$"], ["?", ">", "<"], [1 , -8, -2] ];

arregloBidimensional4 [1][1] = "?";
arregloBidimensional4 [3][1] = 9;
arregloBidimensional4 [0][0] = "¡";

console.log(arregloBidimensional4);

arregloBidimensional4 [1].splice(2,1);
arregloBidimensional4 [0].splice(2,1);
arregloBidimensional4 [3].splice(2,1);
console.log(arregloBidimensional4);