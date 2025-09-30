/* 

switch (variable) {
// Casos según se comparen

case valor1:
  // El codigo a ejecutar
  brak;
case valor2:
  // El código a ejecutar
  break;
case valor3:
  // El código a ejecutar
  break;
default:
  // Este es el código que se ejecuta si la exposión no coincide con ningun caso.
  break; // Esto es opcional  
  }

*/

// Variable a evaluar
let licenciatura = prompt("Escribe la licenciatura que te interesa: televisión, diseño o consultoría"); // televisión, diseño, colsultoría

switch (licenciatura) {
  case "televisión":
    console.log("Haz elegido la licenciatura de Televisión, que mal por ti!");
  case "diseño":
    console.log("Haz elegido la licenciatura de Diseño, serás muy fregón!")
  case "imagen":
    console.log("Haz elegido la licenciatura de Imagen que bien por ti!")
  default:
    console.log("Estas loquitx")
  
}
