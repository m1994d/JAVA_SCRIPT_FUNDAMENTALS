// addEventListener(); - AÑADIR UN ESCUCHADOR

var boton = document.getElementById('boton');
var boton2 = document.getElementById('boton2');

function alerta() {
	alert('Hola binevenido');
}

boton.addEventListener('click', alerta);

// removeEventListerner(); - ELIMINAR EL EVENTO

function removerAlerta(){

	boton.removeEventListener('click', alerta);
}

boton2.addEventListener('click', removerArlerta);

//https://developer.mozilla.org/en-US/docs/Web/Events