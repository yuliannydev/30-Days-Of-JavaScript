//Ejemplo de promise.all con un reject

const promise3 = new Promise((resolve, reject)=> setTimeout(resolve, 600, 'Segundo hola mundo') );

const promise4 = new Promise((resolve, reject)=> setTimeout(resolve, 800, 'Ultimo hola mundo') );

const promise5 = Promise.reject();

const saluda2 = ()=> console.log('Hola soy la funcion más corta para pruebas');


//Promise.all con arrow function
Promise.all([promise3, promise4, promise5]).then(resultados=>{
    console.log(resultados);
    saluda2();
}).catch(()=> console.log('He fallado :C'))


//promise.all con una funcion normal
Promise.all([promise3, promise4, promise5])
    .then(function(resultados){
        console.log(resultados);
    }).catch(function(err){
        console.log("Falle x2");
    });