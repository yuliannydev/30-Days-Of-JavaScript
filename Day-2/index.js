/**
 * Require es la sintaxis que se hereda de la
 * libreria request para importar paquetes externos.
 * No le pertenece a JS
 * */
const request = require('request');

//Solicitud a la pagina de Google 
request('http://google.com', function(){
    console.log('Termine la peticion de Google');
})

//El metodo request es asincrono y recibe como segungo
//argumento el callback function(){}

//El callback sintacticamente no tiene nada especial, es solo una funcion
//Internamente Js hara saber que cuando termine la peticion a google
//se debe dejar un mensaje en la cola de mensajes para ejecutar la funcion 
//anonima 

//Una vez que se deja el mensaje en la cola, el event loop se encarga
//de leer el mensaje y ejecutar la funcion

/**
 * Para corroborar que el codigo se ejecuta asincronamente,
 * despues del codigo se colocara un mensaje 
 */

console.log("Soy el mensaje que va despues de la peticion a Google");

console.log("Soy el tercer mensaje");

console.log("Soy el cuarto mensaje");

//Lo que sucede es que primero aparece el segundo mensaje, porque la 
//primera peticion no bloquea el codigo. Lo que quiere decir que el 
//programa sigue evaluando instrucciones sin esperar que la peticion a
//la pag de google termine



