// BREAK PERMITE DETENER EL CICLO

var semana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];

for (var i = 0; i < semana.length; i++) {
	console.log(semana [i]);

	if (semana[i] == 'Miercoles') {
		break;
	}
}

