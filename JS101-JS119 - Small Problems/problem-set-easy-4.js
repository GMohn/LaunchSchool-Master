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

/* function isPalindrome(str) {
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
console.log(isPalindrome('356653'));    */           // true 

/* Palindromic Strings (Part 2)
Write another function that returns true if the string passed as an argument is a palindrome, or false otherwise. This time, however, your function should be case-insensitive, and should ignore all non-alphanumeric characters. If you wish, you may simplify things by calling the isPalindrome function you wrote in the previous exercise. */

// put string in lower case
// put string in array
// filter array if they are not from 'a' to 'z' and '0' to '9' ensuring all alphanumerics
// join array to string and return invokation of isPalindrome

/* function isRealPalindrome(str) {
  let lowerStr = str
    .toLowerCase()
    .split('')
    .filter((char) => ((char >= 'a' &&  char <= 'z') || (char >= '0' && char <= '9')))
    .join("");

  return console.log(isPalindrome(lowerStr));
}

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false */

/* Running Totals
Write a function that takes an array of numbers and returns an array with the same number of elements, but with each element's value being the running total from the original array.
 */

 // iterate through array start index at 1
 // take previous index's val and add it to current index's val

 /* function runningTotal(arr) {
   let arrLen = arr.length;
   for (i = 1; i < arrLen; i++) {
     arr[i] += arr[i-1];
   }
   console.log(arr);
 }


runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []

for(i = 1; i <= 3;i++){
  console.log(i);
} 
*/

