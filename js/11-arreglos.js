/* 

Un arreglo es una colección de datos, es decir, una lista

En JS los arreglos se definen utilizando los corchetes [] internos se separan comas.

Pueden contener el mismo tipo de datos o de diferentes tipos incluso puede contener arreglos anidados.

*/

let frutas = ["manzana", "sandia", "piña", "pera", "kiwi"];
let calificaciones = [10, 8, 4, 10];
let misDatos = ["Vanessa", 20, true];
let coordenadas = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]

console.log(frutas);
console.log(calificaciones);
console.log(misDatos);
console.log(coordenadas);

/* 

Propiedades Length

length 👉🏻 Nos indica la cantidad de elementos que tenemos dentro del arreglo.
indice 👉🏻 Nos indica la "posición" del elemento dentro del arreglo.

Para acceder a los elementos de un arreglo utilizando su indice. Los arreglos siempre comienzan con el indice 0.

*/

console.log(frutas.length); // Cantidad de datos
console.log(calificaciones.length);
console.log(misDatos);
console.log(coordenadas.length);

/* 

indice 👉🏻 Nos indica la "posición" del elemento dentro del arreglo.

Para acceder a los elementos de un arreglo utilizamos su indice. Los arreglos siempre comienzan con el indice 0 y se coloca el valor entre corchetes [].

*/

console.log("Mi fruta favorita es:" + frutas [1])
console.log(" Con Limón saque " + calificaciones [2] + " de calificacion ");
console.log(" Me llamo " + misDatos [0] + " y tengo " + misDatos[1] + " años! ")
console.log(" Este dato esta en un arreglo anidado " + coordenadas[1][2]);

/* 

Metodos de los arreglos:

push() 👉🏻 Agrega uno o más elementos al final del arreglo.
pop() 👉🏻 Elimina el último elemento del arreglo y lo devuelve.
shift() 👉🏻 Elimina el primer elemento del arreglo y lo devuelve.
unshift() 👉🏻 Agrega uno o más elementos al inicio del arreglo.
indexOf() 👉🏻 Devuelve el índice del primer elemento que coincida con el valor especificado o regresa -1 si no encuentra nanais.

*/

console.log(frutas.length); //5

frutas.push("uvas", "papaya");

console.log(frutas.length)//7

let ultimaFrutas = frutas.pop();

console.log(frutas.length)//6
console.log(ultimaFrutas); //papaya 

let primeraFruta = frutas.shift();

console.log(frutas.length);//5
console.log(primeraFruta); 

frutas.unshift("maracuya", "fresa", "Mango");

console.log(frutas.length);//8

let indiceFruta = frutas.indexOf("mangp");

console.log(indiceFruta);

/* 

Iteración sobre arrays

Tomamos una lista de datos y accedemos a sus datos, a través

*/

for (i = 0; i < frutas.length; i++){
  console.log(" Se me antojo una " + frutas[i]);
}