var parrafo = document.getElementsByClassName('texto')[0];

// Evento mouseover

parrafo.addEventListener('mouseover', function() {

var nuevoParrafo = document.createElement('p');

var textoNuevo = document.createTextNode('Hola, soy un texto nuevo');

nuevoParrafo.appendChild(textoNuevo);

nuevoParrafo.setAttribute('class','texto');

nuevoParrafo.id = 'parrafoAgregado';

var contenedor = document.getElementsByClassName('contenedor')[0];

contenedor.appendChild(nuevoParrafo);

});

// EVENTO MOUSE OUT

parrafo.addEventListener('mouseout', function() {

	var parrafoAgregado = document.getElementById('parrafoAgregado');
	var contenedor = document.getElementsByClassName('contenedor')[0];

	contenedor.removeChild(parrafoAgregado);

});