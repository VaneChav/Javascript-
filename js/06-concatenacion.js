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

let nombreNuevo = `Mi nombre es ${miNombre} ${miApellido}`
