/* Tablero de ajedrez
Escribe un programa que cree un string que represente una cuadrícula de 8 × 8, usando caracteres de nueva línea para separar las líneas. En cada posición de la cuadrícula hay un espacio o un carácter "#". Los caracteres deberían de formar un tablero de ajedrez.

Pasar este string a console.log debería mostrar algo como esto:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # # */

for (let linea = 0; linea <=8; linea++) {
let result = ''; 
for (let columna = 0; columna <=8; columna++) {
    if (linea % 2 == 0) {
        if (columna % 2 == 0) {
            result += ' ';
        } else{
            result += '#';
        }
    } else {
        if (columna % 2 == 0) {
            result += '#';
        } else{
            result += ' ';
        }
    }
}
console.log(result);
}
