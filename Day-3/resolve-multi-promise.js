//Promesas con funcion declarativa

const promise1 = new Promise(function (resolve, reject){
    setTimeout(resolve, 500, 'Hola mundo')
}); 

const promise2 = new Promise(function (resolve, reject){
    setTimeout(resolve, 700, 'Tercer hola mundo')
}); 

//Promesas con arrow function

const promise3 = new Promise((resolve, reject)=> setTimeout(resolve, 600, 'Segundo hola mundo') );

const promise4 = new Promise((resolve, reject)=> setTimeout(resolve, 800, 'Ultimo hola mundo') );

//setTimeout simula dos operaciones asincronas
//El tercer argumento que recibe setTimeout es el que se enviara a resolve como valor resultado de la promesa

//funcion declarativa
function saluda(){
    console.log("Hola soy una funcion normal");
}

//arrow funtion que hace lo mismo que la de arriba
const saluda2 = ()=> console.log('Hola soy la funcion más corta');

//Esto es un callback hell
promise1.then(function(){
    promise2.then(function(){
        saluda2();
    })
})

//Promise.all
//Una mejora para solucionar el callback hell
Promise.all([promise1, promise2]).then(resultados=>{
    console.log(resultados);
    saluda();
})
