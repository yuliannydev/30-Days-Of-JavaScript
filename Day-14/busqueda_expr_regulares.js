/**
 * Una expresion regualar puede utilizarse en 8 posibles métodos
 * Estos son:
 * - exec()
 * - test()
 * - match ()
 * - matchAll()
 * - search()
 * - replace()
 * - replaceAll()
 * - split()
 */

/**
 * Busqueda de expresiones regulares:
 * Se usan para buscar un patrón en un texto
 */

/**
 * Search es un método muy similar a indexOf, y su diferencia es que serach recibe una expresion regular.
 * indexOf recibe unna cadena.
 */

let texto = 'Hola me llamo Yulianny y tengo 31 años.';

/**
 * Pa buscar un numero en una cadena, o un caracter especial se uiliza
 * glag y el 'd' Ej:
 */
//console.log(texto.search(/\d/));

/**
 * \d representa cualquier digito de la cadena
 */

/**
 * Para encontrar multiples instancias de un mismo patrón se puede utilizar el método match o matchAll
 * Ambos métodos encuentran todas las instancias que coincidad con el patrón de búsqueda
 * La diferencia entre ambos es que match retorna un arreglo, y matchAll un iterador.
 */

//Retorna el digito completo, el + es un cuatificador que une al 3 y 1.
//g significa que hará una búsqueda global
 //console.log(texto.match(/\d+/g));

//Retornando un objeto iterador RegExp
 //console.log(texto.matchAll(/\d+/g));

/**
 * Esto se puede reutilizar con un ciclo for
 */

let iterador = texto.matchAll(/\d+/g);

for (instancia of iterador) {
    console.log(instancia);
}