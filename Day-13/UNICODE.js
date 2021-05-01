function toCodePoint(char){

    //Convierte el caracter a Hexadecimal
    let hex = char.charCodeAt(0).toString(16); 

    //Agrega los 0's faltantes al inicio 
    return "\\u" + "0000".substring(0, 4 - hex.length) + hex;
}

/**
 * EL sistema UNICODE Permite representar los caracteres como puntos de codigos
 * que a su vez son traducidos a al compurtadora por unidades de codigos
 * representadas en bits.
 * 
 * En el sistema UNICODE Hay 1,111,998 caracteres.
 * 
 *  - Cada caracter de texto en cualquier idioma, se representa en un rando que va de
 * U+0000 a U+10FFF
 */

console.log(toCodePoint('a'));
console.log("\u0061");

//With padStart
function toCodePoint2(char){
    var hex = char.charCodeAt(0).toString(16); //Convierte el caracter a hex
    return "\\u"+hex.padStart(4,"0"); //Agrega los 0's faltantes al inicio
  }
  console.log(toCodePoint2('b'));
  console.log("\u0062");

  console.log("a == \u0061");

  let a = typeof("\u0061");

  console.log(a);

  /**
   * Los 1,111,998 valores estan divididos en 17 planos
   *  Pimer plano: BPM Basic Multilingual Plane = 16bits
   * Sehunfo plano: PLanos astrales (En este estan los emojos)
   * En este los 32bits => Surrogate pair o par sustituto
   * Este esta compuesto por el High surrogate pair y el low 
   * surrogate pair
   */ 