
(async function() {
    
    const promise1 = await new Promise(function (resolve, reject){
        setTimeout(resolve, 500, 'Promesa con Async y Await')
    }); 

    const promise2 = await new Promise(function (resolve, reject){
        setTimeout(resolve, 100, 'Segunda promesa con Async y Await')
    });
    
    console.log(promise1, promise2);
})();


