/* Problem 1 Welcome Stranger
Create a function that takes 2 arguments, an array and an object. The array
will contain 2 or more elements that, when combined with adjoining spaces, will
produce a person's name. The object will contain two keys, "title" and
"occupation", and the appropriate values. Your function should return a
greeting that uses the person's full name, and mentions the person's title. */
/*
function greetings(arr,obj) {
  return (`Hello, ${arr.join(' ')}! Nice to have a ${obj.title} $
  {obj.occupation} around.`);
}
console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around. */

/* Problem 2 Greeting a user
Write a program that will ask for user's name. The program will then greet the
user. If the user writes "name!" then the computer yells back to the user. */

/*
const readline = require('readline-sync');
const prompt = (line) => console.log(line);

prompt('What is your name?');
let userName = readline.prompt();

if (userName[userName.length - 1] === '!') {
  console.log(`HELLO ${userName.substring(0,userName.length - 1).toUpperCase()}
  . WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${userName}.`);
} */

/* Problem 3 Multiplying Two Numbers
Create a function that takes two arguments, multiplies them together, and
returns the result.
*/
/*
const multiply = (num1,num2) => num1 * num2;
console.log(multiply(5, 3) === 15); // logs true
*/
/* Problem 4 Squaring an Argument
Using the multiply() function from the "Multiplying Two Numbers" problem, write
a function that computes the square of its argument (the square is the result
of multiplying a number by itself).
 */
/*
const square = (num) => multiply(num,num);

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true
*/
/* Problem 5 Arithmetic Integer
Write a program that prompts the user for two positive integers, and then
prints the results of the following operations on those two numbers: addition,
subtraction, product, quotient, remainder, and power. Do not worry about
validating the input. */

/* const readline = require('readline-sync');
const prompt = (line) => console.log(`==> ${line}`);

function arith(firstNum, secondNum) {
  let sum = firstNum + secondNum;
  let difference = firstNum - secondNum;
  let product = firstNum * secondNum;
  let quotient = Math.trunc(firstNum / secondNum);
  let remainder = firstNum % secondNum;
  let power = firstNum ** secondNum;

  prompt(`${firstNum} + ${secondNum} = ${sum}`);
  prompt(`${firstNum} - ${secondNum} = ${difference}`);
  prompt(`${firstNum} * ${secondNum} = ${product}`);
  prompt(`${firstNum} / ${secondNum} = ${quotient}`);
  prompt(`${firstNum} % ${secondNum} = ${remainder}`);
  prompt(`${firstNum} ** ${secondNum} = ${power}`);

}
prompt('Enter the first number:');
let num1 = parseInt(readline.prompt(),10);

prompt('Enter the second number:');
let num2 = parseInt(readline.prompt(),10);

arith(num1, num2);
*/

/* Problem 6 The End is Near But Not Here
Write a function that returns the next to last word in the String passed to it
as an argument.
Words are any sequence of non-blank characters.
You may assume that the input String will always contain at least two words.
*/
/*
function penultimate(str) {
  let array = str.split(" ");
  return array[array.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
 */

/* Problem 7 Exclusive Or
The || operator returns a truthy value if either or both of its operands are
truthy, a falsey value if both operands are falsey. The && operator returns a
truthy value if both of its operands are truthy, and a falsey value if either
operand is falsey. This works great until you need only one, but not both, of
two conditions to be truthy: the so-called exclusive or.

In this exercise, you will write a function named xor that takes two arguments,
and returns true if exactly one of its arguments is truthy, false otherwise.
Note that we are looking for a boolean result instead of a truthy/falsy value
as returned by || and &&.
*/

/* function xor(val1, val2) {
  if ((val1 && !val2) || (!val1 && val2)) {
    return true;
  }
  return false;
}
console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true */

/* Problem 8 Odd Lists
Write a function that returns an Array that contains every other element of an
Array that is passed in as an argument. The values in the returned list should
be those values that are in the 1st, 3rd, 5th, and so on elements of the
argument Array. */
/*
function oddities(arr) {
  let tempArr = [];
  for (let index = 0; index < arr.length; index += 2) {
    tempArr.push(arr[index]);
  }
  return tempArr;
}
console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs [] */

/* Problem 9 How Old is Teddy?
Build a program that randomly generates Teddy's age, and logs it to the
console. Have the age be a random number between 20 and 120 (inclusive). */

// console.log(`Teddy is ${Math.ceil((Math.random() * 100) + 20)}`);

/* Problem 11 Get Middle Character
Write a function that takes a non-empty string argument and returns the middle
character(s) of the string. If the string has an odd length, you should return
exactly one character. If the string has an even length, you should return
exactly two characters.
*/

/* function centerOf(str) {
  let lenStr = str.length;
  let middleIndex = str.length / 2;
  return lenStr % 2 === 0 ? str.substring( middleIndex - 1,(middleIndex) + 1) :
    str.substring(middleIndex, (middleIndex) + 1);
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x" */

/* Problem 12 Always return negative
Write a function that takes a number as an argument. If the argument is a
positive number, return the negative of that number. If the argument is a
negative number, return it as-is. */

function negative(num) {
  if (num < 0) {
    return num;
  }
  return Number(-num);
}
console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0