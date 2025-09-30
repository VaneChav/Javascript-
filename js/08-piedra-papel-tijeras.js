/* 

 Juego Piedra, papel o Tijeras

Crear un juego interactivo donde el usuario pueda jugar contra la computadora.

Reglas:

- Piedra vence a tijeras
- Tijeras vence a papel
- Papel vence a piedra
- Si ambos elijen los mismo es empate.

Pasos para implementar 

- Definir las opciones del jugador.
- Generar una opción aleatoria para la computadora.
- Comparar estas opciones y determinar el ganador. 
- Mostrar el resultado

Estructuras a utilizar: 

- Variables
- Condicionales 
- Generación de un número aleatorio (Math.random)
- Operadores lógicos
- Concatenación de cadenas (strings)
- Ploantillas literales (template strings)
- Comentarios

*/

// 1. Variables - Opciones del jugador
const opcionJugador = prompt("¡Para jugar escribe: piedra, papel o tijera!"); // piedra, papel o tjeras 

// 2. Opción de la computadora 
const numeroAleatorio = Math.random(); // Genera un número aleatorio entre 0 y 1
let opcionComputadora

// 3. Condicional - Asignamos opción según el número
if (numeroAleatorio < 0.33) {
  opcionComputadora = "piedra"
} else if (numeroAleatorio < 0.66) {
  opcionComputadora = "papel";
} else {
  opcionComputadora = "tijera";
}

// 4. Mostrar las elecciones
console.log("piedra, papel o tijeras");
console.log("Tu eleccion es:" + opcionJugador);
console.log("La  compu elegió:" + opcionComputadora);
console.log("-----------------------------------------");

// Determinar el ganador a partir de codicionar
let resultado;

if (opcionJugador === opcionComputadora) {
  resultado = `¡EMPATE! ambos eligieron ${opcionJugador}`;
} else if (opcionJugador === "piedra" && opcionComputadora === "tijera" ) {
  resultado = `¡GANASTE piedra vence a tijera!`;
} else if (opcionJugador === "papel" && opcionComputadora === "piedra") {
  resultado = `¡GANASTE! papel vence a piedra`;
} else if (opcionJugador === "tijeras" && opcionComputadora === "papel") {
  resultado = `¡GANASTE! tijeras vence a papel`;
} else {
  resultado = "¡PERDISTE! La compu te gano.";
}

// 6. Mostramos el resultado

console.log(resultado)