var boton = document.getElementById('boton');

boton.addEventListener('dblclick', function(){

	var nuevoParrafo = document.createElement('p');
	var textoNuevo = document.createTextNode('Hola, soy un texto nuevo');

	nuevoParrafo.appendChild(textoNuevo);

	nuevoParrafo.className = 'texto';

	var contenedor = document.getElementsByClassName('contenedor')[0];

	contenedor.appendChild(nuevoParrafo);

});