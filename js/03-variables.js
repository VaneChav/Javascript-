/* 

    VARIABLES

    Las variables son contenedores que almacenan datos. En JS, se pueden declarar variables utilizando las palabras clave "var", "let" o "const".

    1. Declaracion de variables 

    👉🏻 var: es la forma más antigua de declarar variables. Tiene un alcance global o de función y pueden ser redeclarada y actualizada.
    
    👉🏻 let: Introducida en ES6, tiene un alcance de bloque y puede ser actualizada pero no redeclararse dentro del mismo alcance 

    👉🏻 const: Tambien introducida en ES6, tiene un alcance de bloque y no puede ser ni redeclarada ni actualizada, se utiliza para valores que no deben cambuiar.

*/

/* Declaracion con var */
var nombre = "VANE";
console.log(nombre); // VANE

nombre = "CUCHURRUMINO"; //Actualización

/* Declaracion con let */

let edad = 93;
console.log(edad);

edad = 23; // Actualización
console.log(edad);

/* Declaracion con const */

const PI = 3.1416;
console.log(PI);

PI = 4.0401 // ERROR de Tipo. No se puede actualizar una constante