/* 

Concatenación de cadenas de texto 

Es el proceso de unirver dos o más cadenas de texto en una sola. 
Esto se hace utilizando el operador + o las plantillas literales (template strings) se usan con backticks `` (acento invertido o comillas agudas) ^

*/

let miNombre = "Vanessa"
let miApellido = "Chavarria"

// Usando el operador +

let nombreCompleto = miNombre + miApellido;

console.log(nombreCompleto); 

// Usando plantillas literales 

let nombreNuevo = `Mi nombre es ${miNombre} ${miApellido} y tengo ${10*2}años`;

console.log(nombreNuevo);

/* 

Si se utiliza el operador + con valor numerico se suman. Pero si se usa con cadenas de caracter se conectan.

*/

let resultado = 5 + 10;

console.log(resultado); //15

let resultados = "5" + 10;

console.log(resultados)