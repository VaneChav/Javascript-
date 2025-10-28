/* 

Objetos

  Son colecciones de propiedades. Una propiedad es una asociación entre un nombre (clave o key) y un valor (value.)

  Los valores puede ser de distintos tipos números, cade de texto, boleanos, arreglos, funciones...

  Sintaxis:

  nombreObjeto {
    // Propiedades
    clave1: valor,
    clave2: valor,
    clave3: valor,
  }

*/

const persona = {
  nombre: 'Vanessa',
  apellido: 'Chavarría',
  edad: 20,
  esInvitado: false,
  moustros: ['Pumking Head', 'Vampiro', 'Frankestain'],
  

  saludar: function() {
    /* This es una palabra reservada que autoreferencia al objeto */
    console.log('Hola mi nombre es ' + this.nombre + ' y me gusta ' + this.moustros[1]);
  }
};

//Mostrando el objeto en la consola
console.log(persona)

/* 

  Acceder a las propiedades de un objeto utilizamos los punto o corchetes.

  objeto.clave 👉🏻 notación de punto
  objeto[clave] 👉🏻 notación de corchetes

*/

console.log(persona.nombre);
console.log(persona['apellido']);

// Concatenamos Valores

console.log('Hola mi nombre es' + persona.nombre + ' ' + persona.apellido + ' y tengo ' + persona.edad + ' años ');

// Plantillas Literales

console.log(`Hola mi nombre es ${persona.nombre} y tengo ${persona.edad} años`);

// Accedemos al boleano

console.log(persona.esInvitado); 

if(persona.esInvitado) {
  console.log('Puede pasar y disfrutar del Halloween de Enfoco');
} else {
  console.log('No puedes pasar, regresate a tu casita')
}

// Accede al array 

console.log(persona.moustros[0]);

console.log(`Hola soy ${persona.nombre} ${persona.apellido} y tengo ${persona.edad} años e ire al Halloween disfrasado de ${persona.moustros[1]}`);

/* 

  Metodos de los objetos.

  Los métodos son funciones que están asociadas a un objeto. Se pueden llamar utilizando la notación de punto.

  objeto.metodo()

*/

persona.saludar();