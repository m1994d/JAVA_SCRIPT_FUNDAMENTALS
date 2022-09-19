var nuevoParrafo = document.createElement('p');

var textoNuevo = document.createTextNode('Hola, soy un nuevo texto');

nuevoParrafo.appendChild(textoNuevo);

nuevoParrafo.setAttribute('class', 'texto');

// var contenedor = document.getElementsByClassName('contenedor')[0];





//  SELECCIONAR EL ELEMENTO PADRE DE UN ELEMENTO

var primerParrafo = document.getElementsByClassName('texto')[0];

var padreParrafos = primerParrafo.parentNode;

padreParrafos.className = 'contenedor';


//UBICAR EL ELEMENTO ANTES DEL SELECCIONADO


var parrafos = document.getElementsByClassName('texto');

padreParrafos.insertBefore(nuevoParrafo, parrafos[0]);



// contenedor.appendChild(parrafoNuevo);