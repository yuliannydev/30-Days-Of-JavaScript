//EJERCICIO DE PRUEBA

let numbers = [2, 3, 5];

function sum(n1, n2, n3){
    return n1 + n2 + n3;
}

//Como podria llenar los 3 argumentos de la fn suma
//con el arreglo, sin sacar los elementos del arreglo numbers



//Con apply
//let result = sum.apply(this,numbers);


//Apply recibe como argumento un arreglo, que mandara
//despues a sum

//Y de una manera mas facil con Spread operator
let resultado = sum(...numbers);

console.log(resultado);

//Tambien es util para combinar dos arreglos
let array = ['Hola', 'mundo'];

console.log([...numbers, ...array]);


