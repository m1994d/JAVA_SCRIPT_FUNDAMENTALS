/* for(variable inicio; longitud o condicion; incremento){

Codigo que queremos repetir

}
*/

// for(var i = 0; i <= 10; ++i){

// 	console.log(i);

// }

// var semana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado']

// for(var i = 0; i < semana.length; i++){

// 	console.log(semana[i]);

// }
//_________________________________________________
//FOR IN


var semana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado']

for(dia in semana){

	console.log(semana[dia]);

}