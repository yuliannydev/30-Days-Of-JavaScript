//Manejar errores en la promesas

/* let promesa = fetch ('API');

promesa.then(() => {}).catch((err) => {console.log(err)}); */

//Manejar errores en promesas con Await

//Funcion asincrona anonima
(async function (){
    try{
        let promesa = await Promise.reject("Error");
    } catch(err){
        console.log(err);
    }
})();

//Funcion 
async function example(){
    try{
        let promise = await Promise.reject("Err");
    } catch(err){
        console.log(err);
    }
}
example();
