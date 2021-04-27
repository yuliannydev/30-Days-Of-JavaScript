export const name = 'Yulianny';
export let eigh = 31;


//Cambiar el valor de una variable en su mismo modulo,
//para exportarla
eigh = 32;

//Asumiendo que quisieramos exportar esta variable para utilizarla
//en otro archivo, se coloca la palabra reservada export antes de 
//la declaracion de la variable para indicar que estoy exportando dicha
//variable 

/**
 * Este cambio tan sencillo es lo que transforma esto en un modulo de JS
 */

//El nombre de la variable name se combierte en el identificador del valor
//Yulianny

//Este identificador es importante, porque será a través de este
//identificador que podamos exportar el dato pero en otros archivos

/////////////////////////

/**PARTE II */

//VALORES POR DEFAULT

/**
 * La sintaxis apra asignar un valor por defecto de un modulo
 * es muy parecida a la anterior 
 */

 let valorPorDefault = 250;

 export default valorPorDefault; 
 
 //El resultado de la expresion será lo que se exportará por defecto
 
 //En la expresion podemos pasar la delaracion de una clase, de una funcion,
 //alguna variable, una operacion, etc

