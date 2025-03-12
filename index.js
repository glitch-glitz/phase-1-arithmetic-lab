//Incrementing and Decrementing
let counter = 0;
counter++;
counter;

let tat = 2;
++tat;
tat;

//Assignment operators
let dough = 0;
console.log(dough);
dough += 10;
console.log(dough);
dough -= 2;
console.log(dough);
dough *= 4;
console.log(dough);
dough /= 2;
console.log(dough);
dough %= 6;
console.log(dough);
dough **= 3;
console.log(dough);

//Explain What NaN Is
let dave;
dave++;
console.log(dave);

//Use built-in objects like Math and Number to accomplish complex tasks
/**
 *  Number.isFinite() 
 * Number.parseFloat()
 * Number.parseInt()
 * Number.isNaN()
 *  Number.isInteger()
Checks whether the provided argument is an integer:
 */
Number.isInteger(6);
console.log(Number.isInteger(6));

// Math.ceil() / Math.floor() / Math.round()
// Math.max() / Math.min()
Math.max(1, 2, 3, 4, 5);
// Math.random()

//Assignment

// Multiply

let num1 = 1;
let num2 = 62;
let multiply = num1 * num2;

//random number, greater than 0
let random = Math.floor(Math.random() * 100);

//remainder
let num3 = 40;
let num4 = 6;
let mod = num3 % num4;

//max
let max = Math.max(5, 10, 15, 20);
