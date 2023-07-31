/* Problem 1 Rotation (Part 1)
Write a function that rotates an array by moving the first element to the end
of the array. Do not modify the original array.

If the input is not an array, return undefined.
If the input is an empty array, return an empty array.
Review the test cases below, then implement the solution accordingly. */


/* function rotateArray(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  } else if (arr.length <= 1) {
    return arr;
  } else {
    let tempArr = arr.slice(0);
    let poppedEle = tempArr.shift();
    tempArr.push(poppedEle);
    return tempArr;
  }
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []
// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined
// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4] */

/* Problem 2
Write a function that rotates the last count digits of a number. To perform the
rotation, move the first of the digits that you want to rotate to the end and
shift the remaining digits to the left.
 */
/*
put num into array
take arr.length - rotNum as starting index
 move ele at index to the end of array
 e.g 7 3 5 2 9 1 rotnum = 3
 2 goes to the end with push
 remove original 2 from array
 set original element to ''
 filter array by element
 */
function rotateRightmostDigits(num, rotNum) {
  let arr = String(num).split('');
  let index = arr.length - rotNum;
  arr.push(arr[index]);
  arr[index] = '';
  return Number(arr.filter((ele) => ele).join(''));
}
// console.log(rotateRightmostDigits(735291, 1));      // 735291
// console.log(rotateRightmostDigits(735291, 2));      // 735219
// console.log(rotateRightmostDigits(735291, 3));      // 735912
// console.log(rotateRightmostDigits(735291, 4));      // 732915
// console.log(rotateRightmostDigits(735291, 5));      // 752913
// console.log(rotateRightmostDigits(735291, 6));      // 352917

/* Problem 3 
Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise. */

/* PEDAC

Problem: Rotate Int the maximum amount of times

Input: Int

Output: Rotated Int

Problem type: String manipulation 

Examples / Test Cases: 
maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845

Rules: 
Leading zeroes get dropped 
Keep rotated integers fixed in place
left rotation 
Data Structure:
Array
String

Algorithm:
Loop through the integer for the length of the integer iterations
start i as length of int and decrement

call rotate with i as rotation amount
omit the rotated integers to fix them into place (str concat)

*/

/* function maxRotation(number) {
  // take length of num
  let numberDigits = String(number).length;
  // start from count number and rotate backwards
  for (let count = numberDigits; count > 1; count--) {
    // keep rotating until last character
    number = rotateRightmostDigits(number, count);
  }
  return console.log(number);
}
// n rotations for n digit number
// 735291 -> 352917 -> 329175 -> 321759 -> 321597 -> 321579
maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845
/* Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. */
        // 321579 */

/*
You are going to be given an array of integers.
Your job is to take that array and find an index N where the sum
of the integers to the left of N is equal to the sum of the integers to the right of N.
If there is no index that would make this happen, return -1.
*/
/* 
Problem: find a right sum and left sum of an array that are equal to each other

Input: array of ints

Output: int representing seperating index

Problem type: Operations on iterating array 


Examples / Test Cases:
given array [1,2,4,3]
traverse array starting calculation at index 1 (val = 2) left side sum (lhs) = 1 right side sum (rhs) = 7 (3+4)
check if lhs === rhs (1===7) => false
move ot index 2 (val = 4)
lhs = 3, rhs = 3
(lhs === rhs) => true then return index 2

Rules:
the index N is not included in either sum


Data Structure:
Given array
Int of sum of left side of array
Int of sum of right side of array
forEach loop to calculate sides of array


Algorithm: 
Traverse the index through the array
compute summation of left and right side of array in their own loop
*/

/* function findEvenIndex(arr) {

  // get arr length once instead of calculating each time in for loop
  let arrLen = arr.length; 

  // for loop traversing the current Idx and checking sum of each side
  for (let currentIdx = 0; currentIdx < arrLen; currentIdx++) {
    // every time we move the currentIdx reset Sums to zero
    let lhSum = 0;
    let rhSum = 0;

    // Loop through the left side of array, stopping before the currentIdx
    for (let i = 0; i < currentIdx; i++) {
      lhSum += arr[i];
    }
    // Loop backwards for right side of array, stopping before currentIdx
    for (let j = arrLen - 1; j > currentIdx; j--) {
      rhSum += arr[j];
      
    }
    // Check if the sums are equal if they are return N index.
    if (lhSum === rhSum) {
      return currentIdx;
    }
  }
  // If no equal sum is found after traversing the array, return -1
  return -1;
}

//Test Cases
console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]) === 3); // true
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]) === 1); // true
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]) === -1); // true
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]) === 3); // true
console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]) === 0); // true
console.log(findEvenIndex([10, -80, 10, 10, 15, 35, 20]) === 6); // true
console.log(findEvenIndex([-1, -2, -3, -4, -3, -2, -1]) === 3); // true */

/* Problem 4 Stack Machine Interpretation
A stack is a list of values that grows and shrinks dynamically. A stack may be implemented as an Array that uses two Array methods: Array.prototype.push and Array.prototype.pop.

A stack-and-register programming language is a language that uses a stack of values. Each operation in the language operates on a register, which can be thought of as the current value. The register is not part of the stack. An operation that requires two values pops the topmost item from the stack (i.e., the operation removes the most recently pushed value from the stack), operates on the popped value and the register value, and stores the result back in the register.

This sounds complex, but the behavior is straightforward and easy to walk through manually. Consider a MULT operation in a stack-and-register language. It removes the value from the stack, multiplies the removed stack value with the register value, then stores the result back in the register. For example, if we start with a stack of [3, 6, 4] (where 4 is the topmost item in the stack) and a register value of 7, the MULT operation mutates the stack to [3, 6] (the 4 is removed), and the result of the multiplication, 28, is left in the register. If we do another MULT at this point, the stack is mutated to [3], and the register is left with the value 168.

Write a function that implements a miniature stack-and-register-based programming language that has the following commands (also called operations or tokens):

n : Place a value, n, in the register. Do not modify the stack.
PUSH : Push the register value onto the stack. Leave the value in the register.
ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
POP : Remove the topmost item from the stack and place it in the register.
PRINT : Print the register value.
All operations are integer operations (which is only important with DIV and REMAINDER).

Programs will be supplied to your language function via a string argument. Your function may assume that all arguments are valid programs — i.e., they will not do anything like trying to pop a non-existent value from the stack, and they won't contain any unknown tokens.

Initialize the stack and register to the values [] and 0, respectively. */

/* Problem: Stack Machine Interpretation

Input: String of operations

Output: nothing, built in print function

Problem type: Parsing and operations


Examples / Test Cases:

Rules:



Data Structure:
int value n
push operation
add operation
sub operation
mult operation
div operation
remainder operation
pop operation 
print value in register


Algorithm:
create an array from string in input as operations to perform
init a register starting at 0 
parse and do operations
  */
/* 
function minilang(str) {
  let opArr = str.split(' ');
  let stackArr = [];
  let eax = 0; 

  opArr.forEach((op) => {
    if (!isNaN(Number(op))) eax = Number(op);
    switch (op) {
      
      case "PUSH":
        stackArr.push(Number(eax));
        break;
      case "ADD":
        eax += Number(stackArr.pop());
        break;
      case "SUB":
        eax -= Number(stackArr.pop());
        break;
      case "MULT":
        eax *= Number(stackArr.pop());
        break;
      case "DIV":
        eax = Math.floor(eax / Number(stackArr.pop()));
        break;
      case "REMAINDER":
        eax %= Number(stackArr.pop());
        break;
      case "POP":
        eax = stackArr.pop();
        break;

      case "PRINT":
        console.log(eax);
        break;
      
    }

  })
}
 minilang('PRINT');
 // 0
 
 minilang('5 PUSH 3 MULT PRINT');
 // 15
 
 minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
 // 5
 // 3
 // 8
 
 minilang('5 PUSH POP PRINT');
 // 5
 
 minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
 // 5
 // 10
 // 4
 // 7
 
 minilang('3 PUSH PUSH 7 DIV MULT PRINT');
 // 6
 
 minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
 // 12
 
 minilang('-3 PUSH 5 SUB PRINT');
 // 8
 
 minilang('6 PUSH');
 // (nothing is printed because the `program` argument has no `PRINT` commands) */

 /* Problem 5 Word to Digit
Write a function that takes a sentence string as an argument and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

 */
/* 
 function wordToDigit(str) {
   let arr = ["zero", "one","two", "three", "four", "five", "six", "seven", "eight", "nine"];
   let arrStr = str.split(" ");
   let index = -1;
   arrStr.forEach((word, i) => {
     if (word.endsWith(".")) {
       index = arr.indexOf(word.slice(0, -1));
       if (index !== -1) {
        arrStr[i] = index + ".";

       }
     }
     index = arr.indexOf(word)
     if (index !== -1) {
       arrStr[i] = index;
     }
   })
   return arrStr.join(' ');
 }

 console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."
console.log(wordToDigit('The weight is done.'));      // "The w8 is d1.") */


// Given an array of numbers, for each number, find out how
// many numbers in the array are smaller than it. When
// counting numbers, only count unique values. That is, if a
// given number occurs multiple times in the array, it
// should only be counted once.

/* 
PEDAC

Problem: count number of unique elements lower than each element

Input: int array

Output: int array

Problem type: Building an array 


Examples / Test Cases: 

Rules:
the elements counted must be unique


Data Structure:
create a new array for each element 
check each element and if its bigger then push the element 
count the array lengths 


Algorithm:  */
// Examples:
/* 
function smallerNumbersThanCurrent(arr) {
  return arr.map((ele) => {
    let subArr = []
    arr.forEach((ele2) => {
      if (ele > ele2 && subArr.includes(ele2) === false) {
        subArr.push(ele2)
      }
    });
    return subArr.length
  })
}
console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
console.log(smallerNumbersThanCurrent(
  [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([1])); // [0]
 */


// Write a function that takes one argument, an array of
// integers. The function should return minimum sum of 5
// consecutive numbers in the array. If the array contains
// less than 5 elements, the function should return null.

/* 
PEDAC

Problem: return the lowest sum of 5 consecutive numbers

Input: array

Output: sum integer

Problem type: traversing array doing operation


Examples / Test Cases:

Rules: 
if length of arr is less than 5 return null
numbers must be consecutive

Data Structure:
Integer of Sum
forEach to traverrse array
 for loop to loop 5 times consecutively through aray

Algorithm: 
guard clause for less than 5 array length
for each to traverse array with index parameter
nested for loop to calculate sum of 5 consecutive values
reassign sum int if it is less than previous
 */
/* 
// Examples:
function minimumSum(arr) {
  if (arr.length < 5) return null;
  let sum = Infinity;
  arr.forEach((ele,i) => {
    let currSum = 0;
    for(let j = i; j < i+5; j++ ) {
      currSum += arr[j];
    }
    if (currSum < sum) sum = currSum;
  })
  return sum;
}
console.log(minimumSum([1, 2, 3, 4]) === null);
console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);
 */
// The tests above should each log "true".

// Write a function named toWeirdCase that accepts a string,
// and returns the same sequence of characters with every
// 4th character in every second word converted to
// uppercase. Other characters should remain the same.

/* PEDAC

Problem: Every 4th character in every second word converted to uppercase

Input: string

Output: string

Problem type: String manipulation


Examples / Test Cases:
// Examples:
*/
/* console.log(
  toWeirdCase('Lorem Ipsum is simply dummy text of the printing world') ===
              'Lorem IpsUm is simPly dummy texT of the printing worLd');
console.log(
  toWeirdCase('It is a long established fact that a reader will be distracted') ===
              'It is a lonG established facT that a reader wilL be disTracTed');
console.log(toWeirdCase('aaA bB c') === 'aaA bB c');
console.log(
  toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
              'Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus'); */

// The tests above should print "true".
/* Rules:
2nd word, every 4th character is capitalized



Data Structure:
output string 
put string into array
take all even strings and perform operation on them
operation capitalizes every 4th character (remainder 4 === 0) index + 1


Algorithm: 
put string into array
take all even strings and perform operation on them
operation capitalizes every 4th character (remainder 4 === 0) index + 1

 */
/* 
 function toWeirdCase(str) {
   let strArr = str.split(" ");
   strArr.forEach((word, index) => {
     if ((index+1) % 2 === 0) {
       for (let i = 0; i < strArr[index].length; i++){
         if ((i+1) % 4 === 0) {
           strArr[index] = strArr[index].slice(0,i) + strArr[index][i].toUpperCase() + strArr[index].slice(i+1);
         }
       }
     }
   })
   return strArr.join(' ');
 } */



// Write a function that takes an array of integers and
// returns the two numbers that are closest together in
// value.

/* PEDAC

Problem: Take difference of integers and return lowest pair

Input: array of ints

Output: array of ints

Problem type: 
Array traversal

Examples / Test Cases:
// Examples:
 
console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]

Rules:
closest integers together


Data Structure:
build array of pairs 



Algorithm:
build array of pairs 
nest for loop and calculate the difference
update array pair if difference is lower return array  */

/* function closestNumbers(arr) {
  let pairArr = [];
  let difference = Infinity;
  arr.forEach((element, i) => {
    arr.forEach((ele,j) => {
      let currDifference = Math.abs(arr[i] - arr[j]);
      if (currDifference < difference && arr[i] !== arr[j]) {
        difference = currDifference;
        pairArr[0] = arr[i];
        pairArr[1] = arr[j];
      }
    })    
  });
  return pairArr;
} */

// Write a function that takes a string as an argument and
// returns the character that occurs least often in the
// given string. If there are multiple characters with the
// same lowest number of occurrences, then return the one
// that appears first in the string. When counting
// characters, consider uppercase and lowercase versions to
// be the same.

/* PEDAC

Problem: return character that occurs least 

Input: string

Output: character

Problem type: string iteration


Examples / Test Cases:

Rules:
return the first character of the lowest number of occurences


Data Structure:
object {"char" : numOccurences}



Algorithm:  

function leastCommonChar(str) {
  let strArr = str.toLowerCase().split('');
  charObj = {}
  strArr.forEach((char) => {
    if (!charObj.hasOwnProperty(char)) {
      charObj[char] = 1;
    }
    else {
      charObj[char] += 1;
    }
  });
  let char = Object.entries(charObj)
    .sort((a,b) => a[1] - b[1])
  return char[0][0];
}

// Examples:

console.log(leastCommonChar("Hello World") === "h");
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
                            "t");
console.log(leastCommonChar("Mississippi") === "m");
console.log(leastCommonChar("Happy birthday!") === ' ');
console.log(leastCommonChar("aaaaaAAAA") === 'a');

// The tests above should each log "true".*/



/* Lettercase Percentage Ratio
Write a function that takes a string and returns an object containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither
You may assume that the string will always contain at least one character. 

PEDAC

P -> Understanding the Problem
------------------------------
Input: string
- 

Output: object containing percent of lowercase char, upper case char and neither
- 


Rules/Important Points:
Need to check upper and lower case or neither
percentage is a string of a float

E -> Examples/Test Cases

-- Mental Model Intermission --
  - Do I have a general idea of how I'm going to get from input to output?
  - calculate percentage at end of iterating through string
  - set values of each property ( lowercase, uppercase, neither )




D -> Data Structure
-------------------
What data structure am I going to use? Array or object?
object that is populated after calculation



A -> Algorithm
--------------
- Step-by-step implementation details on HOW to get from input to output
- Don't name specific methods or syntax

put string into array of chracters
keep count of lowercase uppercase and neither characters
initialize returnObj with properties lowercase, uppercase, neither
iterate through array of characters
  - if char is between 'a' and 'z' 
    - increment lowercase
  - if char is between 'A' and 'Z'
    - increment uppercase
  - else
    - increment neither
populate values with count / string.length
return object
C -> Coding with Intent
-----------------------*/

function letterPercentages(str) {
  let lowercase = 0;
  let uppercase = 0;
  let neither = 0;
  let strLen = str.length;
  let retObj = {lowercase: "", uppercase: "", neither: ""};
  let strArr = str.split('');

  strArr.forEach((char) => {
    if (char >= 'a' && char <= 'z') {
      lowercase++;
    }
    else if (char >= 'A' && char <= 'Z') {
      uppercase++;
    }
    else neither++; 
  });
  retObj.lowercase = String(((lowercase / strLen) * 100).toFixed(2));
  retObj.uppercase = String(((uppercase / strLen) * 100).toFixed(2));
  retObj.neither = String(((neither / strLen) * 100).toFixed(2));
  return retObj;
}
letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

/* Triangle Sides
A triangle is classified as follows:

Equilateral: All three sides are of equal length.
Isosceles: Two sides are of equal length, while the third is different.
Scalene: All three sides are of different lengths.
To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the lengths of the three sides of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'. */

/* PEDAC

P -> Understanding the Problem
------------------------------
Input: 3 side lengths
- 

Output: string 
- 


Rules/Important Points:
 - equilateral all sides are the same
 - isosceles two sides are equal and 1 is different
 - scalane all different length

 valid tri 
  - every side is > 0 
  - 2 shortest sides > longest side

E -> Examples/Test Cases

-- Mental Model Intermission --
  - Do I have a general idea of how I'm going to get from input to output?
  check sides are > 0
  sort the sides by length to get shortest 2 
  check if the sum of the first 2 is greater than the last
  
  check num of equal sides
  side 1 === side 2 side 1 === side 3 side 2 === 3
  based on num of sides return triangle type


D -> Data Structure
-------------------
What data structure am I going to use? Array or object?
array


A -> Algorithm
--------------
- Step-by-step implementation details on HOW to get from input to output
- Don't name specific methods or syntax
put 3 strings in array
- invalid guard clause
  - sort array and filter > 0 
  -if the length of array is < 3 then there exists a side that is < 0 
  -else 
    -if 1st element plus 2nd element <= 3rd element 
      -return invalid
set equal sides to 0 
iter through array side
  arr[i] => [0]
    iter through array starting 1 ahead j = 1
    arr[i] === arr[j]

  


C -> Coding with Intent
----------------------- */

/* function triangle(s1, s2, s3) {
  let equalCount = 0;
  let arrSide = [s1,s2,s3].sort((a,b) => a-b).filter((ele) => ele > 0);
  if (arrSide.length < 3) {
    return "invalid";
  }
  if (arrSide[0]+arrSide[1] <= arrSide[2]) {
    return "invalid"
  }
  if (s1 === s2 && s2 === s3) {
    return "equilateral";
  }
  if (s1 === s2 || s2 === s3 || s1 === s3) {
    return "isosceles"
  }
  return "scalene";
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid" */

/* Fibonacci Number Location By Length
The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...) such that the first two numbers are 1 by definition, and each subsequent number is the sum of the two previous numbers. Fibonacci numbers often appear in mathematics and nature.

Computationally, the Fibonacci series is a simple series, but the results grow at an incredibly rapid rate. For example, the 100th Fibonacci number is 354,224,848,179,261,915,075—that's enormous, especially considering that it takes six iterations just to find the first 2-digit Fibonacci number.

Write a function that calculates and returns the index of the first Fibonacci number that has the number of digits specified by the argument. (The first Fibonacci number has an index of 1.)

You may assume that the argument is always an integer greater than or equal to 2. 

PEDAC

P -> Understanding the Problem
------------------------------
Input: big int representing num digits
- 

Output: big int representing index 
- 


Rules/Important Points:
- 1 indexed 
- fib is sum of 2 previous numbers with the first two numbers starting as 1 

E -> Examples/Test Cases

-- Mental Model Intermission --
  - Do I have a general idea of how I'm going to get from input to output?
  - create array of each number in sequence
  - push next number to sequence
  - check if number has the length of number of digits
    - if it does then return the length of the array


D -> Data Structure
-------------------
What data structure am I going to use? Array or object?
array to store each fib number


A -> Algorithm
--------------
- Step-by-step implementation details on HOW to get from input to output
- Don't name specific methods or syntax
take in bigint num digits
check if numdigits is 1n if it is return 1n 
create array [1,1]
set len = arr.length
set var arr[len-1] + arr[len-2]

push var
if string object of var length is numdigits
return big int of arr length

C -> Coding with Intent
----------------------- */
/* 
function findFibonacciIndexByLength(numDigits) {
  let fibArr = [1n, 1n];
  let i = 0;
  while (true) {
    // Generate the next Fibonacci number
    let nextFib = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];
    // Add this number to the sequence
    fibArr.push(nextFib);

    // Check the length of this number
    if (BigInt(nextFib.toString().length) === numDigits) {
      
      // Return its position (+1 because we're considering an 1-indexed sequence)
      return BigInt(fibArr.length); 
    }
  }
}

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run. */