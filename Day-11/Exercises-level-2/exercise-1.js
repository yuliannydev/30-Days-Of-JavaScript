/* let sentences = 'There is no exercise better for the heart than reaching down and lifting people up.';

console.log(sentences);

let quote = `Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same \
-- with charity you give love, don't just give money but reach out your hand instead.`;

console.log(quote); */

//Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

let numberString = '10';

let num = parseInt(numberString);

if (typeof(numberString) === num){
    console.log('Son iguales')
} else {
    console.log(`'10' no es exactamente igual a 10`);
}

console.log(`Utilice parseInt para parsear de string a int, y el resultado es: ${num}`);