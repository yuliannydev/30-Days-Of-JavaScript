//Para importar necesitamos la instruccion import


/**
 * Un import se compone de dos elementos principales.
 * Por un lado, los elementos que vamos a importar, mismos
 * que se colocan dentro de llaves, y separados por comas
 * luego de la instrucción import
 */

 import { name } from './modulo_dos.mjs'

 /**
  * Dentro de las llaves podemos identificar mas de un elemento a importar
  * del mismo modulo
  */

 //Ademas de este elemento la instruccion contiene lo que se llama module scifyer,
 //o especificador de modulos, donde se coloca la url de donde se debe buscar el modulo

 /**
  * En otras palabras el especificador de modulos indica dn que archivo podemos
  * encontrar el elemento a importar
  * 
  */

 //Para hacer esto funcional, se necesita colocar un punto de entrada
 //Siempre que se trabaje con modulos, la ejecución debe iniciar por un punto
 //a partir del cual se van a empezar a leer los modulos

 //En este caso se utiliza como modulo de entrada el modulo_base.js

 /**
  * Para apoyarnos, se usara un index.html, aunque los modulos no están ligados
  * al frontend, se pueden utilizar en otros lados también
  */

 //Tecnicamente todas las plataformas de ejecuciónd de lenguaje, deberían poder
 //ejecutar modulos pero no todas soportan el manejo de modulos.

    console.log(name);

//////////////////////////////////////

