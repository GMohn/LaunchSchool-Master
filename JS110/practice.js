/* let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let arrKeys = Object.keys(flintstones);
let tempObj = {};
arrKeys.forEach((key) => {
  tempObj[flintstones[key]] = key;
}) */
/* 
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};
let sum = 0;
Object.values(ages).forEach((val) => sum += val)
console.log(sum);
 */
/* let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let ageArr = Object.values(ages);
console.log(Math.min(...ageArr));

let statement = "The Flintstones Rock";
let obj = {};
statementArr = statement.split('').filter(char => char !== ' ')
statementArr.forEach((char) => {
  if(Object.keys(obj).includes(char)) {
    obj[char] += 1; 
  } else {
    obj[char] = 1;
  }
})
console.log(obj);
 */
// Order array desc
/*  
let arr = ['10', '11', '9', '7', '8'];
arr.sort((a,b) =>  b - a);
console.log(arr); */

/* Practice Problem 2
How would you order the following array of objects based on the year of publication of each book, from the earliest to the latest? */

/* let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

books.sort((a,b) => Number(a.published) - Number(b.published));
console.log(books);
 */

 /* Practice Problem 3
For each of these collection objects, demonstrate how you would access the letter g. */

/* let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];

let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];

let arr3 = [['abc'], ['def'], { third: ['ghi'] }];

let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };

let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }};

console.log(arr1[2][1][3]);
console.log(arr2[1].third[0]);
console.log(arr3[2].third[0][0]);
console.log(obj1.b[1]);
console.log(Object.keys(obj2.third).toString()); */

/* Practice Problem 4
For each of these collection objects, demonstrate how you would change the value 3 to 4. */
/* let arr1 = [1, [2, 3], 4];

let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];

let obj1 = { first: [1, 2, [3]] };

let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };

arr1[1][1]++;
arr2[2]++;
obj1.first[2][0]++;
obj2.a.a[2]++;
console.log(arr1);
console.log(arr2);
console.log(obj1);
console.log(obj2); */

/* Problem 5
 Compute and display the total age of the male members of the family. */
/*l et munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

console.log(Object.values(munsters).filter((obj) => {
  return obj.gender === 'male';
}).reduce((acc,curr) =>  acc + curr.age,0)); */

/* Problem 6
One of the most frequently used real-world string operations is that of "string substitution," where we take a hard-coded string and modify it with various parameters from our program.

Given this previously seen family object, print the name, age, and gender of each family member: */
/* let arr = Object.entries(munsters);
arr.forEach((obj) => console.log(`${obj[0]} is a ${obj[1].age}-year-old ${obj[1].gender}`)); */

/* Problem 8
 Using the forEach method, write some code to output all vowels from the strings in the arrays. Don't use a for or while loop.
*/
/* let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};
let vowels = 'aeiou';
let resVowel = '';
Object.values(obj).forEach((ele) => {
  ele.forEach((word) => {
    resVowel = (word.split('').filter((char) => vowels.includes(char))).join('');
    console.log(resVowel);
  })
}); */

/* Practice Problem 9
Given the following data structure, return a new array with the same structure, but with the values in each subarray ordered -- alphabetically or numerically as appropriate -- in ascending order. */
/* let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];
let resArr = [];
arr.forEach((subArr) =>  {
  let tempSubArr = [...subArr];
  resArr.push(tempSubArr.sort());
});
console.log(resArr);
console.log(arr); */

/* Practice Problem 11
Given the following data structure, use the map method to return a new array identical in structure to the original but, with each number incremented by 1. Do not modify the original data structure. */
/* let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];
arr.map((obj) => {
  let newObj = {};
  for (let key in obj) {
    newObj[key] = obj[key] + 1;
  }
  return newObj;
});
 */

 /* Practice Problem 12
Given the following data structure, use a combination of methods, including filter, to return a new array identical in structure to the original, but containing only the numbers that are multiples of 3. */
/* 
let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];
let newArr = arr.map((subArr) => {
  return subArr.filter((val) => (val % 3) === 0);
});

console.log(newArr); */

/* Practice Problem 13
Given the following data structure, sort the array so that the sub-arrays are ordered based on the sum of the odd numbers that they contain. */

/* let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr.sort((arr1,arr2) => {
  // if arr1 is less than arr 2 ret neg
  oddSum1 = arr1.filter((num) => (num % 2) !== 0).reduce((acc, curr) => acc + curr);
  oddSum2 = arr2.filter((num) => (num % 2) !== 0).reduce((acc, curr) => acc + curr);

  return oddSum1 - oddSum2;
});

console.log(arr); */

/* Practice Problem 14
Given the following data structure write some code to return an array containing the colors of the fruits and the sizes of the vegetables. The sizes should be uppercase, and the colors should be capitalized.
 */
/* 
let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};
console.log(Object.values(obj).map((subObj) => {
  if (subObj.type === 'fruit') {
    let tempArr = [];
    for (let color of subObj.colors) {
      tempArr.push(color[0].toUpperCase() + color.slice(1));
    }
    return tempArr;
  }
  for (let size of subObj.size) {
    return subObj.size.toUpperCase();
  }
})); */

/* Practice Problem 15
Given the following data structure, write some code to return an array which contains only the objects where all the numbers are even. */
/* 
let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];
let val = arr.filter((obj) => {
  return Object.values(obj).every((arr) => {
    return arr.every((ele) => ele % 2 === 0);
  })
});

console.log(val); */

/* Practice Problem 16
Given the following data structure, write some code that defines an object where the key is the first item in each subarray, and the value is the second. */
/* let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// expected value of object
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }
let newObj = {};
arr.forEach((subArr) => {
  newObj[subArr[0]] = subArr[1];
})
newObj = Object.fromEntries(arr); // alterante sol
console.log(newObj);
 */
/* Practice Problem 17
A UUID is a type of identifier often used to uniquely identify items, even when some of those items were created on a different server or by a different application. That is, without any synchronization, two or more computer systems can create new items and label them with a UUID with no significant risk of stepping on each other's toes. It accomplishes this feat through massive randomization. The number of possible UUID values is approximately 3.4 X 10E38, which is a huge number. The chance of a conflict is vanishingly small with such a large number of possible values.

Each UUID consists of 32 hexadecimal characters (the digits 0-9 and the letters a-f) represented as a string. The value is typically broken into 5 sections in an 8-4-4-4-12 pattern, e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.

Write a function that takes no arguments and returns a string that contains a UUID. */
/* 
function createUUID() {
  let stringArr = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
  
  let resultStr = '';
  for (i = 0; i < 32; i++) {
    let rand = Math.round(Math.random()*15);
    resultStr += stringArr[rand];
    switch(resultStr.length){
      case 8:
      case 13:
      case 18:
      case 23:
        resultStr += '-';
        break;
      default:
        break;
    }
  }
  return resultStr;
}
console.log(createUUID());
 */
/*
PEDAC

Problem: Finding longest common prefix
Input: Array of stings
Output: String
Problem type: 


Examples / Test Cases:
- Must account for variable array length

Rules:


Mental Model:


Data Structure:
- Use existing array and iterate through elements simultaneously
- Declare longestSubStr variable and initialize to ''


Algorithm: 
- Iterate through each charcter of every array element.
  -
  -
  Compare character at currentChar for each element
- If they all match, append character to longestSubStr,
- If they do not, return longestSubStr
*/

function createGreeter(name) {
  return {
    name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    greet(timeOfDay) {
      let msg = '';
      switch (timeOfDay) {
        case 'morning':
          msg += `${this.morning} ${name}`;
          break;
        case 'afternoon':
          msg += `${this.afternoon} ${name}`;
          break;
        case 'evening':
          msg += `${this.evening} ${name}`;
          break;
      }

      console.log(msg);
    },
  };
}
const helloVictor = createGreeter('Victor');
helloVictor.greet('morning');
