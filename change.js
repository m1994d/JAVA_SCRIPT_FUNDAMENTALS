


function elegirColor() {

	var estadoActivador = document.getElementById('colorFavorito').checked;

	if (estadoActivador == true) {

		document.getElementById('verde').disabled = false;
		document.getElementById('azul').disabled = false;
		document.getElementById('rojo').disabled = false;
		document.getElementById('otro').disabled = false;

	}else{
		document.getElementById('verde').disabled = true;
		document.getElementById('azul').disabled = true;
		document.getElementById('rojo').disabled = true;
		document.getElementById('otro').disabled = true;
	}
}



// EVENTO CHANGE

var inputColorFavorito = document.getElementById('colorFavorito');

inputColorFavorito.addEventListener('change', elegirColor)