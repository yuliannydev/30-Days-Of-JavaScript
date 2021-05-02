/**
 * El uso de las expresiones regulars nos pueden ayudar cuando queremos reemplazar
 * las instancias de un patrón por una nueva cadena o por un nuevo patrón
 */

/* let text = 'codigofacilito es una linda escuela de Programación, codigofacilito es muy genial.';

//Con expresiones regulares
let newText = text.replace(/codigofacilito/g, 'CodigoFacilito');
console.log(newText);

//Con string
let newText1 = text.replaceAll('codigofacilito', 'CodigoFacilito');
console.log(newText1);

//Agregar comas con expresiones regulares


/**
 * El signo de indicadores $1 y $2, estos valores hacen referencia a 
 * los grupos encontrado
 */

let text1 = '1000 numeros disponibles, 2000 numeros disponibles.';

let newText2 = text1.replaceAll(/(\d)(\d{3})/g, '$1,$2');

console.log(newText2); 

/**
 * replaceAll recibiendo una funcion como segunfo argumento
 */