var parrafos = document.getElementsByClassName('texto');

// parrafos[0].addEventListener('click', function(e) {
// 	parrafos[0].className = 'texto fondo-rojo';
	
// });

// parrafos[1].addEventListener('click', function(e) {
// 	parrafos[1].className = 'texto fondo-rojo';
	
// });

// parrafos[2].addEventListener('click', function(e) {
// 	parrafos[2].className = 'texto fondo-rojo';
	
// });

for (var i = 0; i < parrafos.length; i++) {

	parrafos[i].addEventListener('click', function () {
		this.className = 'texto fondo-rojo';
	})
}


