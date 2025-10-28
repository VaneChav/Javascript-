/* 

  Las clases son una forma de definir objetos, sus propiedades y métodos creando un prototipo del cual se generan varios objetos , heredando su comportamiento.

  Los nombres de las clases comienzan con mayúscula.

  Sintaxis:
  class nombreObjeto {
  
  //Utilizamos el método contructor especial para incializar objetos.
  
  contructor(prop1, prop2){
    this.key = prop1;
    this.key = prop1;
  }

*/

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  // Método

  saludar() {
    alert(`Hola soy ${this.nombre} y tengo ${this.edad} años!`)
  }
}

/* 

  Crear instancias de la clase 

  Vamos a utilizar una contante y a crear una nueva instancia con la siguiente sintaxis:

    const nombreConstante = new NombreClase(prop1, prop2)

*/

const persona1 = new Persona('Juanito', 24);
const persona2 = new Persona('Javier', 22);
const persona3 = new Persona('Maria', 23);

/* Mostramos objetos por consola*/

console.log(persona1);
console.log(persona2);
console.log(persona3);

/* Accedemos a los datos */

console.log(`El es ${persona1.nombre} y tiene ${persona1.edad}.`);
console.log(`El es ${persona2.nombre} y tiene ${persona2.edad}.`);
console.log(`Ella es ${persona3.nombre} y tiene ${persona3.edad}.`);

persona1.saludar();
persona2.saludar();
persona3.saludar();