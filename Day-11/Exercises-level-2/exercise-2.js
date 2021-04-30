//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

let float = parseFloat('9.8');


if(float === 10){
    //let result = float;
    console.log('Son iguales')

} else{
    console.log(`${float} no es igual a 10. Aplicar el método Math.ceil para redondear.`)
}

let = equal = Math.ceil(float);

if(equal === 10){
    console.log(`Excelente, ahora ${equal} es igual a 10.`);
}