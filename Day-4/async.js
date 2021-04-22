//En este ejemplo se convierte la fn a asincrona
//Y lo que sucede es que implicitamente(inrternamente) lo que retorna
//es una promesa resulta con el resultado de resolve,
//lo que viene a ser Promise.resolve

async function suma(valor1, valor2) {
    return valor1 + valor2;
}


//Esta funcion explicitamente esta retornando una promesa
async function calcular(){
    return new Promise((resolve, reject) =>{
        setTimeout(resolve, 400, 5)
    });
}