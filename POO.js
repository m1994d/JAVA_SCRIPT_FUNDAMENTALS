// PROGRAMACION ORIENTADA A OBJETOS O POO


// ES UNA SERIE DE NORMAS DE REALIZAR LAS COSAS
// DE MANERA QUE OTRAS PERSONAS PUEDEN UTILIZARLAS
// Y ADELANTAR SU TRABAJO, DE MANERA QUE CONSIGAMOS
// QUE EL CODIGO SE PUEDA REUTILIZAR.

// CLASES
// Son funciones contructoras y se escriben iniciando con Mayusculas.

// var texto = 'Hola, soy un texto';

// CLASES DE JACASCRIPT

// var texto = new String('Hola, soy un texto');
// console.log(texto);

// var numero = new Number(5);

// var boleano = new Boolean(true);

// CLASES DE JAVASCRIPT COPMPUESTAS

// var arreglos = new Array('Marlon', 'Lady', 'Akane');

// var objeto = new Object({color: 'verde', tamaño: 'grande'});

// CLASES PERZONALIZADAS

// function Persona(nombre, edad){

// 	this.nombre = nombre;
// 	this.edad = edad;

// }

// var persona1 = new Persona();
// persona1.nombre = 'Marlon';
// persona1.edad = 27;

// var persona2 = new Persona();
// persona2.nombre = 'Lady';
// persona2.edad = 33;

// var persona3 = new Persona();
// persona3.nombre = 'Akane';
// persona3.edad = 1;

// var persona1 = new Persona('Lady', 33);
// console.log(persona1);



// OBJETOS

// Es una coleccion de propiedades y metodos


var planta = {

	color: 'verde', 
	tamaño: 'grande',
	escribeInformacion: function(precio){
		console.log('El color de la planta es ' + planta.color + ' y su tamaño es ' + planta.tamaño + ', y su precio es ' + precio);
	}

}

// console.log(planta.color);
// console.log(planta.tamaño);
planta.escribeInformacion('$2000');