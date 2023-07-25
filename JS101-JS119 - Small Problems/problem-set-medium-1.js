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

/* function maxRotation(num) { 
  console.log(rotateRightmostDigits(num,1));
}
// n rotations for n digit number
// 735291 -> 352917 -> 329175 -> 321759 -> 321597 -> 321579

/* Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. */
        // 321579 */
