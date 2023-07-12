/* Problem 1 Searching 101
Write a program that solicits six numbers from the user and logs a message that
describes whether the sixth number appears among the first five numbers.
*/
/* let readlineSync = require("readline-sync");

let nums = [];

console.log("Enter the 1st number:");
nums.push(Number(readlineSync.prompt()));

console.log("Enter the 2nd number:");
nums.push(Number(readlineSync.prompt()));

console.log("Enter the 3rd number:");
nums.push(Number(readlineSync.prompt()));

console.log("Enter the 4th number:");
nums.push(Number(readlineSync.prompt()));

console.log("Enter the 5th number:");
nums.push(Number(readlineSync.prompt()));

console.log("Enter the last number:");
const lastNumber = Number(readlineSync.prompt());

if (nums.includes(lastNumber)) {
  console.log(`The number ${lastNumber} appears in ${nums}.`);
} else {
  console.log(`The number ${lastNumber} does not appear in ${nums}.`);
}
*/

/* Problem 2 Palindromic Strings (Part 1)
Write a function that returns true if the string passed as an argument is a
palindrome, or false otherwise. A palindrome reads the same forwards and
backwards. For this problem, the case matters and all characters matter. */

function isPalindrome(str) {
  let arrStr = str.split('');
  let arrStrReverse = [...arrStr].reverse();
  // eslint-disable-next-line id-length
  for (let i  = 0; i < arrStr.length; i++) {
    if (arrStr[i] === arrStrReverse[i]) {
      continue;
    }
    return false;
  }
  return true;
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true