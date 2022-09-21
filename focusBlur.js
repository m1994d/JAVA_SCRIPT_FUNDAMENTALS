// EVENTO FOCUS

var campoNombre = document.getElementById('nombre');

campoNombre.addEventListener('focus', function(){

	campoNombre.setAttribute('value', 'Tengo el foco');

});

// EVENTO BLUR

campoNombre.addEventListener('blur', function() {

	campoNombre.setAttribute('value', 'Ya no tengo el foco');

	// alert('El campo nombre ha perdido el foco');

});