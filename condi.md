[Bit Counting 6 kyu] (https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript)


Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case 


 P -> Understanding the Problem
------------------------------
Input: 
- integer

Output:
- integer representing the number of bits equal to 1


Rules/Important Points:
- The integer is in base 10 and should be converted to base 2 in order to count bits
- All input integers are non negative so the most significant bit (furthest to left) never represents the sign of the integer (unsigned int)

E -> Examples/Test Cases
------------------------
1234 is 10011010010 expected output is 5 
to convert to binary, the least significant bit represents 2^0 then the next 2^1 ... 2^n where n represents the most significant bits exponent 

-- Mental Model --
to get integer 10 in binary we add 2^1 + 2^3 to get 1010 where each place is represented as 2^3 => 1 2^2 => 0 2^1 => 2 2^0 => 0 therefore 8 + 2 = 10
1. populate array as binary representation 
2. filter array to only contain 1
3. return the length of the array 
  

D -> Data Structure
-------------------
build array containing the bit representation of the integer then filter to only store 1s and get length


A -> Algorithm
--------------
Set binaryArr
- dividing the number by 2 and storing the remainder until the number becomes 0
- integer to binary
  - set currentVal to inputInteger
  - loop while currentVal > 0 
    - push currentVal % 2 
    - currentVal = currentVal/2
- filter out the 0s from the binary array and return length of binaryArray

C -> Coding with Intent
----------------------- 

```Javascript
var countBits = function(integer) {
  // Program Me
  let binaryArr = [];
  currentVal = integer;
  while (currentVal > 0) {
    binaryArr.push(currentVal % 2);
    currentVal = Math.floor(currentVal / 2);
  }
  
  return(binaryArr.reverse().filter((num) => num === 1).length);
  
};
console.log(countBits(10));
```


**thought process**: <br>
turn integer to binary representation <br>
stor each digit in array and keep only the 1s<br>
count the 1s with length method <br>
**bugs**: 
originally had 
```Javascript
let binaryArr = [];
  let n = 0;
  while (2**n <= integer) {
    n++;
  }
  => n--;
  binaryArr.push(1);
  let currentVal = integer - 2**n;
    for (let i = n - 1; i >= 0; i--) { => for (let i = n; i >= 0; i--) {
    if (2**i >= currentVal) {
      binaryArr.push(0);
      continue;
    }
    binaryArr.push(1)
    currentVal -= 2**i
  }
  ```
but if countBits(2) is called then while loop would reach n = 2 and would push 1 for 2^2<br>
  then loop 2 times for 2^1 and 2^0 but expected array was [1,0]
**sol**: <br>added     
- once it exceeds decrement to get correct exponent
- n--;
- changed if (2**i > currentVal)

**bug**: <br>
the msb shouldnt be calculated seperately and instead all be built in the same loop
original alg: <br>
Set binaryArr
- integer to binary
  - get the highest 2^n value that does not exceed the integer value
    - once it exceeds decrement to get correct exponent 
  - store n as most significant bit
  - push 1 to binaryArr
  - loop n - 1 times starting from biggest iterator (i) and decrement
    - if the 2^i >= currentVal 
      - push 0 to binaryArray
    - else => 2^i <= currentVal
      - push 1 to binaryArray
      - subtract 2^i from currentVal
- filter out the 0s from the binary array and return length of binaryArray

**solution**: <br>
- dividing the number by 2 and storing the remainder until the number becomes 0
- integer to binary
  - set currentVal to inputInteger
  - loop while currentVal > 0 
    - push currentVal % 2 
    - currentVal = currentVal/2

**bug**: <br>
array was backwards with the most significant bit at the end. although it does not matter for this problem, as im just counting the 1s i decided to use the `reverse` array method 
 

***Problem 2***
---------------
[Moving Zeros To The End 5 kyu](https://www.codewars.com/kata/52597aa56021e91c93000cb0)<br>

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.


moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

P -> Understanding the Problem
------------------------------
Input:
- array

Output:
- modified array with 0s at the end 


Rules/Important Points:
- the order of non zero elements should be the same

E -> Examples/Test Cases
-----------------------
<br>
moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

-- Mental Model --<br>
count the number of non elements<br>
bubble up all the non zero elements to the front of the array<br>
set the 0 elements to the next non zero element<br>
add the 0s to the end of the array <br>
[0,1,2] => [1,1,2], (`count = 1` index) => [1,1,2], (`count = 2` index) => [1,2,2] => end of loop, `count = 2 `index => `arr[count] = 0` => [1,2,0]

D -> Data Structure
-------------------
mutate given array in place


A -> Algorithm
--------------
- set count to 0 
- count the number of non zero elements
- traverse the array 
- if the current element is not 0 
  - then place current element where count points to 
  - increment count<br>
- after loop 
  - set 0 from index count to the length of the array 

C -> Coding with Intent
-----------------------
```Javascript
function moveZeros(arr) {
  let count = 0;
  arr.forEach((ele) => {
    if (ele !== 0) {
      arr[count] = ele;
      count++;
    }
  });
  for (count = count; count < arr.length; count++) {
    arr[count] = 0;
  }
  return arr;
}
console.log(moveZeros([false,1,0,0,2,0,1,3,"a"]));
```


**thought process**:<br> 
replace all the zeroes with the elements that are non zero<br>
keep track of the next available index by counting non zeroes and traversing the array<br>
count doesnt increment unless its non zero <br>
therefore count ends at the index of the first 0 in the array

**bugs**: had for (let count = count; count < arr.length; count++)
got an error saying cannot access 'count before initialization
removed let because I did not want to shadow the variable 

  substrings function
  =================
//    - create an empty array called `result` that will contain all required substrings
//    - create a `startingIndex` variable (value `0`) for the starting index of a substring
//    - start a loop that uses `startingIndex` to iterate over `string` from `0` to the length of the string minus 2
//      - create a `numChars` variable (value `2`) for the length of a substring
//      - start an inner loop that uses `numChars` to iterate over `string` from `2` to `string.length - startingIndex`
//        - extract a substring of length `numChars` from `string` starting at `startingIndex`
//        - append the extracted substring to the `result` array
//        - increment the `numChars` variable by `1`
//      - end the inner loop
//      - increment the `startingIndex` variable by `1`
//    - end the outer loop
//    - return the `result` array

Algorithm for Bit counting:
-------------------------
  - Initialize an empty array `binaryArr` to hold the binary representation of the input integer
  - Set a variable `currentVal` to the input integer
  - Start a loop that continues as long as `currentVal` is greater than 0
      - Push the remainder of `currentVal` divided by 2 ( `currentVal % 2`) into `binaryArr`
      - Update `currentVal` to the result of `currentVal` divided by 2, rounded down to the nearest whole number
  - End the loop
  - Reverse the `binaryArr` array
  - Filter the `binaryArr` array to only include '1's
  - Return the length of the filtered `binaryArr` (i.e., the count of '1's)

Algorithm for Moving Zeros to End
---------------------------------
  - Initialize a `count` variable to 0. This will keep track of the position of non-zero elements in the input array (`arr`).
  - Start loop to iterate over each element in `arr`
    - If the current element is not zero, assign it to the position in `arr` indicated by `count`, then increment `count` by 1
  - End the loop
  - Start a new loop from `count` to the end of `arr`
    - Assign zero to each position in the array from `count` to the end
  - End the loop
  - Return the modified array