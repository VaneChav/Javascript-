/* 

1. Función Declarada

Es la forma mas comun de definir funsiones. Se puede llamar a la función abtes de su definición debudo al hoisting, es decir que se "elevan" eb el contexto de ejecución.

Sintaxis:

function nombreFuncion() {
//Cuerpo de la función
}

*/

function saludar () {
  console.log("Hola nariz de bola!😺")
}

saludar();

/* 

2. Función Expresada (Anónimas)

Este tipo de funsiones se asignan a una variable. No puede ser llamada antes de su definición.

Sintaxis:

const nombreConstante = function() {
  //Cuerpo de la función
  ...
}

Llamada:

nombreConstante();

*/

const despedir = function () {
  console.log("Adiós te voy a extrañar!😿")
}

despedir();

/* 

3. Funciones Flecha (Arrow Function)

Tiene una sintaxis más consisa, son útiles para ejecuciones cortas. Generalmente se asignan a una variable.

Sintaxis:

const nombreConstante = () => {
  // Cuerpo de la función
  ...
  }

Llamada:

nombreConstante();

*/

const mensaje = () => {
  console.log("Ya muero de hambre!🙉")
}

mensaje();

/* 

Parámetros y Argumentos

Las funciones pueden aceptar parametros para recibir datos cuando son llamadas.

Sintaxis:

function nombreFuncion(parametro1, parametro2) {
  //Cuerpo de la función
}

*/

function sumar(num1, num2) {
  console.log(`El resultado de la suma es: ${num1 + num2}`)
}

sumar(2,3);
sumar(245,674);
sumar(.45,.76);

function saludito(nombre) {
  console.log(`¡Hola! ${nombre}`)
}

saludito("Esteban");
saludito("Yukio");
saludito("Ariel");
saludito("Danna");

/* 

Parametros por defecto

En las funciones podemos tener valores por defecto si no se proporcionan argumentos al llamar a la función.

Sintaxis:

function nombreFunción(parametro1 = ValorDefault) {
  //Cuerpo de la función
  ...
  }

Llamada:

nombreFunción(); //usa los valores por defecto
nombreFunción(argumento1) // usael valor del argumento

*/

const multiplicar = function(num1, num2 = 2) {
  console.log (`El resultado de multiplicar ${num1} por ${num2} es: ${num1*num2}`)
}

multiplicar();
multiplicar(8,5);
multiplicar(10,46);
multiplicar();

/* Crear una función que de la bienvenida a un usuario personalizado su nombre y que muestre un mensjae de invitado si no se tiene el nombre del usuario. */

const bienvenida = (usuario = "invitad") => {
  if(usuario == "invitado") {
    console.log("Registrate o continua comoinvitado")
  } else {
    console.log(`¡Bienvenido ${usuario}!`)
  }
}

bienvenida();
bienvenida("Ariel");
bienvenida("Sherry");
bienvenida("Josh");

/* 

Valor de Retorno

Las funciones pueden devolver un valor utilizando la palabra "return"

Sintaxis:

funcion nombreFunción() {
  //Cuerpo de la función
  ...
  return valor;
}

Llamada:

const nombreConstante = nombreFuncion();

*/

function despedida() {
  return "¡Adios mundo cruel!"
}

const resultado = despedida(); 

console.log(resultado)

/* 

Return Implicito

Las funciones flecha no necesita la palabra return, en su estructura más simple (una sola línea)

Sintaxis:

const nombreConstante = () => valor;

*/

const restar = (num1, num2) => num1 - num2;

const resultadoResta = restar(10,5);

console.log(restar(10,5));
