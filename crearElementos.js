// CREAR UN NUEVO ELEMENTO O NODO

//<p class="texto">'Hola, soy un nuevo texto'</p>	

//CREAMOS UN NUEVO PARRAFO
var parrafoNuevo = document.createElement('p');

//CREAMOS UN NUEVO TEXTO PARA EL PARRAFO
var textoNuevo = document.createTextNode('Hola, soy un nuevo texto');

//AGREGAR TEXTO NUEVO EN EL PARRAFO

parrafoNuevo.appendChild(textoNuevo);

//AGREGAR UN NUEVO ATRIBUTO DE CLASE

parrafoNuevo.setAttribute('class', 'texto');

//SELECCIONAR CONTENEDOR

var contenedor = document.getElementsByClassName('contenedor')[0];

//AGREGAR NUEVO PARRAFO N EL CONTENEDOR

contenedor.appendChild(parrafoNuevo);