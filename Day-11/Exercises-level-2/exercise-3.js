//I hope this course is not full of jargon. Check if jargon is in the sentence.

/* let sentences = 'I hope this course is not full of jargon';

console.log(sentences.includes('jargon')); */

//Random number function generate

function randomInt(min, max){

    return Math.ceil(Math.random() *(min - max)) + max;

}

//Generate a random number between 0 and 100 inclusively.
console.log(randomInt(0, 100));

//Generate a random number between 50 and 100 inclusively.
console.log(randomInt(50, 100));

//Generate a random number between 0 and 250 inclusively.
console.log(randomInt(0, 250));


//Access the 'JavaScript' string characters using a random number. */