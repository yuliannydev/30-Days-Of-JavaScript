let array = [1, 2, 3, 4, 5];

for (num of array){
    console.log(num);
}

//La variable num va adquiendo cada uno de los
//elementos del iterable

function saludarATodos(){
    for(nombre of arguments){
        console.log('Hola ' + nombre);
    }
}

saludarATodos('Yulianny', 'CodigoFacilito', 'Compañeros');

//En este ejemplo no se pasa ningun argumentos a la funcion
//y con arguments recibe todos los argumentos que se quieran

