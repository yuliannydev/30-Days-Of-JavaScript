/**
 * Podemos usar parentesis en una expresión regular para agrupar una parte del patrón
 * - Recordar parte de un patrón por separado.
 * - Aplicar cuantificadores a un grupo.
 * 
 */

/*
 * Cuando aplicamos un metacaracter en una expresión regular, este applica al que aparece
 * inmediatamente antes del del caracter especial. Ejemplo:
 */

El cuantificador '*' quiere decir cero o muchos, y está aplicando al caracter que aparece antes de el. Esto se lee como cualquier cantidad de digitos apartir de cero
/\d*/ 

Aplicar el modificador a un grupo de caracteres, se encierra en un grupo,
esto quiere decir cualquier cantidad de guiones y de digitos desde cero
/(\d-)*/g

Los asterisco hacen match apartir de cero, con cualquier cosa.

El cuantificador '+' dice apartir de uno en adelante
/(\d-)+/g


El motor de búsqueda de las expresiones regulares recuerda las agrupaciones en caso de que 
se quieran usar mas adelante.

Cuando agregamos grupos viene con un costo de rendiemiento del analisis al string,
por lo que es importante solo usar grupos cuando se necesiten.