/* 

Condicionales

  Son las estructuras de control que permiten ejecuta diferentes bloques de codigo segun una condicion (Verdadera o Falsa).
  
  1. if

  Evala una condicion y si es verdadera, ejecuta el bloque de codigo dentro de sus llaves.

  Sintaxis:

  if (condicion) {
    // Bloque o codigo que se ejecuta

*/

let edad = 18;
if (edad >= 18) {
  // Codigo que se ejecuta:
  alert ("Eres mayor de edad date! 😉")
}

/* 

2. else

Permite ejecutar un bloque de codigo si la condición es falsa.

Sintaxis:

if (condicion) {
  // código que se ejecuta si la condición es verdadera.

} else {
  // código que se ejecuta si la condición es falsa
}

*/

let hora = 10;

if (hora < 12) {
  console.log("Buenos dias solecito! 🌞")
} else {
  console.log("Buenos tardes chifurimpulo! 🌆")
}

/* 

3. else if

Nos va a permitir tener más de una condición a ser evaluada, esta evaluacón es en secuencia, si una condición es verdadera se ejecuta su bloque de código.

Sontaxis

if (condicion) {
  // codigo que se ejecuta si es verdadera la condición
} else if (condicion2) {
  //codigo que se ejecuta si la anterior es falsa y esta condición es verdadera.
} else {
  // codigo que se ejecuta si ninguna de las anteriores es verdadera.
}

*/

let calificacion = 10;

if (calificacion >=9) {
  console.log("Eres un exelente programador! 😺");
} else if (calificacion >= 7) {
  console.log("Ahí la llevas, ya casi te sale! 😊");
} else if (calificacion >= 5) {
  console.log("Echale más ganitas onos veremos en el extra! 😥")
} else {
  console.log("Ya valio barriga, bienvenido al estra! 🔥")
}