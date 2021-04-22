const promise1 = new Promise(function(resolve, reject){
    setTimeout(resolve, 500, "Holiii en 5seg ");
})

const promise2 = new Promise(function(resolve, reject){
    setTimeout(resolve, 600, "Holiii en 6seg");
})

const promise3 = new Promise(function(resolve, reject){
    setTimeout(reject, 800, "He fallado");
})

Promise.any([promise1, promise2, promise3])
    .then(function(response){
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    })


//El método Promise.any recibe un array de promesas y se resuelve tan
//pronto como una de ellas haya sido resuelta. 
//La primera promesa que se cumple, es la que se muestra