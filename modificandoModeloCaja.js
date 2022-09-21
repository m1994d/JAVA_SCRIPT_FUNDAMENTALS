var parrafos = document.getElementsByClassName('texto');

parrafos[0].style.width = '80%';
parrafos[0].style.height = '200px';
parrafos[0].style.padding = '0';
parrafos[0].style.border = '2px solid black';

var boton = document.getElementById('boton');

boton.addEventListener('click', function() {

	parrafos[0].style.width = '100%';

	
});