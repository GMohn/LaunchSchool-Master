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
console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917