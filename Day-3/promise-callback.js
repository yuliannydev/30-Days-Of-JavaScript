const request = require('request');

function leer(url){

    return new Promise(function(resolve, reject){

        //Cuando se ejecuta una promesa,
        //Aqui va la operacion asincrona
        request(url, function(err, response){
            if(err){
                reject(err);
            }else{
                resolve(response);
            }
        });
    });
}

//RECORDAR: request usa callback

//El patron que se utilizaen NodeJS,
//cuando se trabaja con callback, las librerias suelen 
//pasar como primer argumento errores que haysn sucedido
//dentro de la ejecucion 


//Utilizacon del metodo leer
leer('http://raydesite.com')
    .then(function(response){
        console.log("response");
    })
    .catch(function(err){
        console.log("err");
    });

    //Con esto se puede tomar cualquier metodo asincrono con callback y convertirlo en promesas