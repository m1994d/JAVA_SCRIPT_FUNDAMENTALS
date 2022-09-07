// CONTINUE - PERMITE SALTAR A LA SIGUIENTE EJECUCION DEL CICLO

var semana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];

for (var i = 0; i < semana.length; i++) {
	
	if (semana[i] == 'Jueves'){
		continue;
	}

	console.log(semana[i]);
}