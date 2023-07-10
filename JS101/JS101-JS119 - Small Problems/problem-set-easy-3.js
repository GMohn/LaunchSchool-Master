/* Problem 1 ddaaiillyy ddoouubbllee
Write a function that takes a string argument and returns a new string that
contains the value of the original string with all consecutive duplicate
characters collapsed into a single character. */

/* function crunch(str) {
  let strLength = str.length;
  let newStr = "";
  if (strLength === 0) {
    return str;
  }
  for (let idx = 0; idx < strLength - 1; idx++) {
    if (str[idx] !== str[idx + 1]) {
      newStr += str[idx];
    }
  }
  newStr += str[strLength - 1];
  return newStr;
}
console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""
 */

/* Problem 2 Bannerizer
 Write a function that will take a short line of text, and write it to the
 console log within a box.
*/

/* function logInBox(str) {
  console.log("+" + "-" + "-".repeat(str.length) + "-" + "+");
  console.log( "|" + " " + " ".repeat(str.length) + " " + "|");
  console.log( "|" + " " + str + " " + "|");
  console.log( "|" + " " + " ".repeat(str.length) + " " + "|");
  console.log("+" + "-" + "-".repeat(str.length) + "-" + "+");

}

logInBox('');
logInBox('To boldly go where no one has gone before.');
 */

/* Problem 3 Stringy Strings
Write a function that takes one argument, a positive integer, and returns a
string of alternating '1's and '0's, always starting with a '1'. The length of
the string should match the given integer. */

/* function stringy(num) {
  let tempStr = "";
  for (let iter = 0; iter <= num; iter++) {
    if (iter % 2 === 0) {
      tempStr += 1;
      continue;
    }
    tempStr += 0;
  }
  return tempStr;
}
console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101" */

/* Problem 4 Right Triangles
Write a function that takes a positive integer, n, as an argument and logs a
right triangle whose sides each have n stars. The hypotenuse of the triangle
(the diagonal side in the images below) should have one end at the lower-left
of the triangle, and the other end at the upper-right. */
/*
function triangle(height) {
  let stars = 1;
  for (let iter = height; iter > 0; iter--) {
    console.log(`${" ".repeat(iter - 1)}${"*".repeat(stars)}`);
    stars++;
  }
}
triangle(9); */

/* Problem 5 Double Doubles
A double number is an even-length number whose left-side digits are exactly the
same as its right-side digits. For example, 44, 3333, 103103, and 7676 are all
double numbers, whereas 444, 334433, and 107 are not.

Write a function that returns the number provided as an argument multiplied by
two, unless the argument is a double number; otherwise, return the double
number as-is. */
/*
function twice(num) {
  let numLen = num.toString().length;
  let reverseStr = String(num).substring(numLen / 2, numLen);
  if ((numLen % 2 === 0) && (num.toString().substring(0,numLen / 2) ===
  reverseStr)) {
    console.log(num);
    return num;
  }
  console.log(num * 2);
  return num * 2;
}
twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676 */

/* Problem 6 Grade Book
Write a function that determines the mean (average) of the three scores passed
to it, and returns the letter associated with that grade. */

/* function getGrade(score1, score2, score3) {
  let meanScore = (score1 + score2 + score3) / 3;
  if (meanScore >= 90) {
    return "A";
  } else if (meanScore >= 80) {
    return "B";
  } else if (meanScore >= 70) {
    return "C";
  } else if (meanScore >= 60) {
    return "D";
  }
  return "F";
}

console.log(getGrade(50,50,95)); */

/* Problem 7 Clean up the words
Given a string that consists of some words and an assortment of non-alphabetic
characters, write a function that returns that string with all of the
non-alphabetic characters replaced by spaces. If one or more non-alphabetic
characters occur in a row, you should only have one space in the result (i.e.,
the result string should never have consecutive spaces).*/
/*
function cleanUp(str) {
  let tempStr = "";
  for (let idx = 0; idx < str.length; idx++) {
    if (str[idx].toLowerCase() !== str[idx].toUpperCase()) {
      tempStr += str[idx];
    } else if (tempStr[tempStr.length - 1] !== " ") {
      tempStr += " ";
    }

  }
  return tempStr;
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line ") */

let isPrimitive = (val) => {

  if (val === null) {
    console.log(true);
    return;
  }
  if (typeof val === "object" || typeof val === "function") {
    console.log(false);
  } else {
    console.log(true);
  }
};
