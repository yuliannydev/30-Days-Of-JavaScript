/**
 * A traves del uso de corchetes y o parentesis caudrados podemos identificar
 * consjuntos y rangos en una expresion regular
 */

/**
 * Un conjunto es una convinación de distintas opciones para hacer búsqueda de un
 * caracter o de un patrón
 */

//Este hace match con la primera instancia que consiga que tenga a, b, c o d
/* /[abcd]/

//Hace match con el primero que encuentre que sea literal abcd
/abcd/ */

/* console.log('abcd'.match(/[abcd]/));

console.log('abcd'.match(/abcd/));

console.log('b'.match(/[abcd]/));

console.log('b'.match(/abcd/)); */
/* 
console.log('a'.match(/a|b/));

//Imprime la primera incidencia
console.log('https'.match(/http|https/));

//Así toma primero a https
console.log('https'.match(/https|http/));

//Exercise
let text = 'Hola';

console.log(text.match(/H[ol]a/));
//En este ejercicio no hay ninguna ocurrencia porque el conjunto buscara
//por una isntancia 
//Buscara un patron po Hoa o Hla

//Exercice
console.log('b'.match(/[a-d]/));
//Encuentra la b porque - indica de a hasta d
//pero a tiene que ir pegado de - y de d
//No a - d

//Tambien funciona con digitos
console.log('3'.match(/[0-5]/)); */

/**
 * Cuando el guion aparece en medio de los caracteres crea un rango
 * cuando aparece al principio o al final, es parte del conjunto a buscar
 */
