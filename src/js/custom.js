// test = () => alert("no mas Porro");
// Clases predefinidas del lenguaje
// var ahora = new Date();
// console.log('Año:'+ahora.getFullYear());
// Objetos Literales Js
// var generico = {
//     nombre: 'Mi objeto',
//     edad: 15,
//     saludar: function(nombre){
//         console.log('Hola '+nombre);
//     }
// };
// console.log(generico.nombre);
// generico.saludar ('Marcos');
// Clases de Js Definidas por el Usuario
// DOM en jascript
// var elemento = document.querySelector('h1');
// var timeout = setTimeout(function (){
//     elemento.innerHTML = 'Hola desde Javascript';
// }, 1000);

// DOM en jQuery
// var elemento = $('h1');
// var timeout = setTimeout(function(){
//     elemento.text('Hola desde Jquery');
// }, 1000);
/**
 * Escuchar elementos del DOM (content loader)
 */
document.addEventListener('DOMContentLoaded', function(){
    console.log('DOM Cargado');
});

var enlace = document.querySelector('a');
enlace.addEventListener('click', function(event){
    console.log('click');
});