//SCOPE

// El scope es el alcance de una variable, que puede ser local o global.


// Variable global - se declara fuera de una funcion.

var mensaje = 'Hola, soy una variable';

function saludar (){
	alert(mensaje);
}

// saludar();


// Variable local - se declara dentro de una funcion.

function despedirse(){

	var despedida = 'Adios, hasta luego.';

	alert(despedida);
}

despedirse();


// -----------------------------


/*
Se puede acceder a una variable desde dentro hacia afuera

Esto permite proteger nuestro codigo, para que desde afuera no lo modifiquen.
*/

//------------------------------