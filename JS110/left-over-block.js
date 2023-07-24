// Calculates Number of left over blocks after calculating the highest valid structure
function calculateLeftoverBlocks(numBlocks) {
  // guard clause
  if (numBlocks === 0) return 0;

  let usedCubes = 0;
  let layerNum = 1;

  while (true) {
    // use cubes for layer number 
    usedCubes += layerNum * layerNum; 
    // check if we have available cubes
    if(usedCubes <= numBlocks) {
      // inc to next layer
      layerNum++;
      continue;
    }
    // remove previous layer as we used more cubes than available.
    usedCubes -= layerNum * layerNum;
    break;
  }
  // calculate remaining cubes.
  return numBlocks - usedCubes;
}

console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true
console.log(calculateLeftoverBlocks(15) === 1); //true