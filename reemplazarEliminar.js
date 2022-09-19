var nuevoParrafo = document.createElement('p');

var nuevoTexto = document.createTextNode('Hola, Bienvenido');

nuevoParrafo.appendChild(nuevoTexto);

nuevoParrafo.setAttribute('class', 'texto');

//-------------------------------------

var parrafos = document.getElementsByClassName('texto');

var padreParrafos = parrafos[0].parentNode;


//REEMPLAZAR UN ELEMENTO

padreParrafos.replaceChild(nuevoParrafo, parrafos[2]);

//ELIMINAR UN ELEMENTO

padreParrafos.removeChild(parrafos[0]);