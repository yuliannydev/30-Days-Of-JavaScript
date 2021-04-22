//Cadena de promesas

function calcular(){
    return new Promise((resolve, reject) =>{
        setTimeout(resolve, 400, 5);
    })
}

function segundoCalculo(numero){
    console.log(numero);

    return new Promise((resolve, reject)=>{
        setTimeout(resolve, 200, 'Segunda promesa obtenida en los 6 seg');
    })
}


//Lo que sucede aca, es que se ejecuta la funcion calcular, que 
//retorno la primera promesa, sobre esta promesa
//se ejecuta el metodo then, al que se le envia como argumento
//el segundo calculo recibiendo el resultado
//de la primera promesa.
//Terminado el segundo calculo, se puede ejecutar la otra promesa
//anidando el metodo then, y para esta promesa al callback se le envio
//el console.log
calcular().then(segundoCalculo).then(console.log);