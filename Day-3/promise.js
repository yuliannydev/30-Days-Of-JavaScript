const request = require('request');



function leer(url){

    //El constructor promise nos permite generar promesas nuevas
    //Ademas al agregar la palabra return, indicamos que el metodo return
    //esta retornando la promesa new promise
    return new Promise(function(resolve, reject){

        //argumento de resolve. Esta funcion marca la promesa como fullfile 
        resolve("Todo ha salido bien xD");

        //Argumento de reject, marca la promesa como rechazada
        //Se llama cuando hubo un error en la operacion asincrona, y
        //se quiere hacer saber que la promesa no pudo completarse
        reject(new Error('No se pudo completar la promesa'));
    });
}

//ANOTACIONES
//Promise recibe una funcion executor con dos argumentos
//que pueden tener el nombre que nosotros querramos
//Estas funciones tienen la habilidad de  resolver o
//rechazar una promesa como su nombre lo indica

//resolve se debe mandar a llamar cuando la operacion
//asincrona termino y fue exitosa. Dicha funcion ademsa recibe como
//argumento el resultado que queremos enviar de la peticion asincrona
//

//Reject recibe como argumento un error o una razon de
//porque no pudo cumplir la promesa