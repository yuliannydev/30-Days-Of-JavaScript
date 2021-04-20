/**
 * Request-promise es una adaptacion de la libreria
 * request
 * */

const requestpromise = require('request-promise');


//En este caso no se envia una funcion como argumento,
//dado que ya no se está utilizando CallBack
//Unicamente se envia como argumento un string
requestpromise('http://google.com')

//Sobre requestpromise se llama al metodo then,
//Esto quiere decir que el resultado de ejecutar requestpromise
//es un objeto del tipo promise, es el que representa una promesa
.then(function(html){
    console.log("Termine la peticion a google con request promise");
}).catch(function(err){
    console.log(err);
})


//A diferencia de los CallBack, las promesas si son
//un tipo de objeto en Js

//Las promesas tienen un metodo then, al cual se le envia una funcion
//Esta funcion se ejecutara si la promesa se cumplio sin errores

//Ademas el metodo catch al que tambien se le puede enviar una funcion
//que se ejecutara si la promesa falla