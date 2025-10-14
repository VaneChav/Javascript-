/* 

Bucles 


  Son estructuras de control que permiten repetir un bloque de codigo varias veces, hasta que se arregla una condición especifica.

  Las más comunes en JS son for.while y do...while

  1. Bucle for 

  En bucle se utiliza cuando sabemos cuantas veces queremos repetir un bloque de codigo. La sintaxis es:

  for (incialización; condición;) {
    // el codigo que se va a repetir su ejecución
    ...
  }

  inicialización 👉🏻 variable con un valor inicial
  condición 👉🏻 se evalua una expresión si es true se ejecuta el bucle
  incremento 👉🏻 aumenta el valor de la variable en cada interación
*/

for (let i = 0; i < 10; i++) {
  console.log("Repetición" + i + ";Oye Cucú, Papá se fue!")
}

/* 

2. Bucle while

El bucle while se utiliza cuando no sabemos cuántas veces queremos repetir un bloqueo de código, pero si queremos que se repita mientras una condición es verdadera. Sintaxis:

inicialización

while (condición) {
  // código que se repite su ejecición
  incremento
}

*/

let j =0; // inicialización
while (j < 5) {
  //codigo a ejecutar en bucle 
  console.log("Otro buclecito");
  j++; //incrementar
}

/* 

3. Bucle do...while

  Este bucle es similar al bucle while, pero garantiza que el bloqueo de código se ejecute al menos una vez. Ya que la condición se evalua después de la ejecución. Sintaxis:

  do {
  // Código que se ejecuta al menos una vez
  incremento
  } while (condición);

*/

let k = 0;

do {
  console.log("Twice Rules!");
  k++;
} while (k < 5);