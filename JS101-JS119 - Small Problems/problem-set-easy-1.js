/* Problem 1
Write a function that takes one integer argument, which may be positive,
negative, or zero. This method returns true if the number's absolute value is
odd. You may assume that the argument is a valid integer value.
*/
/*
 function isOdd(num) {
  return (num % 2 !== 0);
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true
*/
// Problem 2
/*
function logOdd() {
  for (let iter = 0; iter <= 99; iter++) {
    // if iterator is even then move to next increment
    if (iter % 2 === 0) {
      continue;
 } else {
      console.log(iter);
    }
  }
}

logOdd();
*/

// Problem 3
/*
for (let iter = 1; iter <= 99; iter++) {
  if (iter % 2 !== 0) {
    continue;
  } else {
    console.log(iter);
  }
}
*/


/* Problem 4
Build a program that asks the user to enter the length and width of a room
in meters, and then logs the area of the room to the console in both square
meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the
readlineSync.prompt method to collect user input.
*/
/*
const readline = require('readline-sync');
const SQMETERS_TO_SQFEET = 10.7639;
const prompt = (line) => console.log(`${line}`);

function roomArea(length,width) {

  let areaMeter = length * width;
  let areaFeet = areaMeter * SQMETERS_TO_SQFEET;

  console.log(`The area of the room is ${areaMeter.toFixed(2)} square meters ($
    {areaFeet.toFixed(2)} square feet).`);

}

prompt('Enter the length of the room in meters:');
let roomLength = readline.question();

prompt('Enter the width of the room in meters:');
let roomWidth = readline.question();

roomArea(roomLength,roomWidth);
*/

/* Problem 5
Create a simple tip calculator. The program should prompt for a bill amount
and a tip rate. The program must compute the tip, and then log both the tip and
the total amount of the bill to the console. You can ignore input validation
and assume that the user will enter numbers. */

/*
const readline = require('readline-sync');

const prompt  = (line) => console.log(`${line}`);

prompt('What is the bill?');
let billAmt = parseInt(readline.question(),10);
prompt('What is the tip percentage?');
let tipAmt = parseInt(readline.question(),10) / 100;

prompt(`The tip is $${(billAmt * tipAmt).toFixed(2)}`);
prompt(`The total is $${((billAmt * tipAmt) + billAmt).toFixed(2)}`);
*/

/* Problem 6
Write a program that asks the user to enter an integer greater than 0, then
asks whether the user wants to determine the sum or the product of all numbers
between 1 and the entered integer, inclusive.
*/

/*
const readline = require('readline-sync');
const prompt = (line) => console.log(`${line}`);

prompt('Please enter an integer greater than 0:');
let userNum = readline.question();

prompt('Enter "s" to compute the sum, or "p" to compute the product.');
let userInput = readline.prompt();

if (userInput === 's') {
  let sum = 0;
  for (let iter = 1; iter <= userNum; iter++) {
    sum += iter;
  }
  prompt(`The sum of integers between 1 and ${userNum} is ${sum}.`);
} else {
  let product = 1;
  for (let iter = 1; iter <= userNum; iter++) {
    product *= iter;
  }
  prompt(`The product of integers between 1 and ${userNum} is ${product}.`);
}
*/

/* Problem 7
Write a function that takes two strings as arguments, determines the length of
the two strings, and then returns the result of concatenating the shorter
string, the longer string, and the shorter string once again. You may assume
that the strings are of different lengths.
*/
/*
function shortLongShort(str1, str2) {
  // if first string is longer then put between 2 str2s
  if (str1.length > str2.length) {
    return (str2 + str1 + str2);
  }
  // assume strings are never the same length then str1 is less than str2
  return (str1 + str2 + str1);
}
console.log(shortLongShort('abc', 'defgh'));   // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"
*/

/* Problem 8
In the modern era under the Gregorian Calendar, leap years occur in every year
that is evenly divisible by 4, unless the year is also divisible by 100. If the
year is evenly divisible by 100, then it is not a leap year, unless the year is
also evenly divisible by 400.
Assume this rule is valid for any year greater than year 0. Write a function
that takes any year greater than 0 as input and returns true if the year is a
leap year, or false if it is not a leap year.*/

/* function isLeapYear(year) {
  if (year < 0) {
    console.log('year can not be negative.');
    return false;
  } else if ((year % 4 === 0 && (year % 100 !== 0)) || ((year % 100 === 0) &&
      (year % 400 === 0))) {
    return true;
  }
  return false;
}
 */
// Problem 8 part 2
/*
This is a continuation of the previous exercise.

The British Empire adopted the Gregorian Calendar in 1752, which was a leap
year. Prior to 1752, they used the Julian Calendar. Under the Julian Calendar,
leap years occur in any year that is evenly divisible by 4.

Using this information, update the function from the previous exercise to
determine leap years both before and after 1752. */
/*
function isLeapYear2(year) {
  if ((year < 1752) && (year % 4 === 0)) {
    return true;
  }
  return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

console.log(isLeapYear2(2016)); // t
console.log(isLeapYear2(2015)); // f
console.log(isLeapYear2(2100)); // f
console.log(isLeapYear2(2400)); // t
console.log(isLeapYear2(240000)); // t
console.log(isLeapYear2(240001)); // f
console.log(isLeapYear2(2000)); // t
console.log(isLeapYear2(1900)); // f
console.log(isLeapYear2(1752)); // t
console.log(isLeapYear2(1700)); // f
console.log(isLeapYear2(1)); // f
console.log(isLeapYear2(100)); // f
console.log(isLeapYear2(400)); // t */

/* Problem 9
Write a function that computes the sum of all numbers between 1 and some other
number, inclusive, that are multiples of 3 or 5. For instance, if the supplied
number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number passed in is an integer greater than 1. */
/*
function multisum(num) {
  let sum = 0;
  for (let inter = 0; inter <= num; inter++) {
    if ((inter % 3 === 0) || (inter % 5 === 0)) {
      sum += inter;
    }
    continue;
  }
  return sum;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));       // 33
console.log(multisum(1000));       // 234168 */

/* Problem 10
Write a function that determines and returns the UTF-16 string value of a
string passed in as an argument. The UTF-16 string value is the sum of the
UTF-16 values of every character in the string. (You may use
String.prototype.charCodeAt() to determine the UTF-16 value of a character.)
*/

function utf16Value(str) {
  let utfVal = 0;

  for (let idx = 0; idx < str.length; idx++) {
    utfVal += str.charCodeAt(idx);
  }
  return utfVal;
}

console.log(utf16Value('Four score'));         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
utf16Value(OMEGA);                  // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA));  // 2811