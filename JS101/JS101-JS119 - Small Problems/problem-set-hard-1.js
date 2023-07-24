/* eslint-disable id-length */
/* eslint-disable max-lines-per-function */
/* Problem 2 Transpose 3x3 Matrix
Write a function that takes an array of arrays that represents a 3x3 matrix and
returns the transpose of the matrix. You should implement the function on your
own, without using any external libraries.

Take care not to modify the original matrix — your function must produce a new
matrix and leave the input matrix array unchanged.

 */

function transpose(mat3x3) {
  let tempArr1 = [];
  let tempArr2 = [];
  let tempArr3 = [];
  for (let i = 0; i < mat3x3.length; i++) {
    console.log(mat3x3[i].length);
    for (let j = 0; j < mat3x3[i].length; j++) {
      switch (j) {
        case 0:
          tempArr1.push(mat3x3[i][j]);
          break;
        case 1:
          tempArr2.push(mat3x3[i][j]);
          break;
        default:
          tempArr3.push(mat3x3[i][j]);
      }
    }
  }
  return [tempArr1,tempArr2,tempArr3];
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

