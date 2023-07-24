
function countMaxAdjacentConsonants(str) {
  let vowels = ["a","e","i","o","u"];
  let adjCount = 0;
  let stripStr = str.replace(" ","");
  for (let i = 0; i < stripStr.length - 1; i++) {
    if ((vowels.includes(stripStr[i]) === false)&&(vowels.includes(stripStr[i+1]) === false)) {
      if (!adjCount) adjCount++;
      adjCount++;
    }
  }
  return adjCount;
}
function sortStringsByConsonants(arr) {
  let tempCountArr = [];
  let tempStrArr = arr.slice();
  let combinedArr = [];
  for (let i = 0; i < tempStrArr.length; i++) {
    tempCountArr.push(countMaxAdjacentConsonants(tempStrArr[i]));
    combinedArr.push([tempStrArr[i],tempCountArr[i]]);
  }
  combinedArr.sort(sortFn);
  function sortFn(a,b) {
    if (a[1] === b[1]) {
      return 0;
    }
    return (a[1] < b[1]) ? 1 : -1; 
  }
  combinedArr.forEach((ele) => ele.pop());
  return combinedArr.flat();
}



console.log(countMaxAdjacentConsonants('dddaa')); // 3
console.log(countMaxAdjacentConsonants('ccaa')); // 2
console.log(countMaxAdjacentConsonants('baa')); // 0
console.log(countMaxAdjacentConsonants('aa')); // 0

 
 console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); // ['dddaa', 'ccaa', 'aa', 'baa']
console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); // ['salt pan', 'can can', 'batman', 'toucan']
console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar'])); // ['bar', 'car', 'far', 'jar']
console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); // ['month', 'day', 'week', 'year']
 