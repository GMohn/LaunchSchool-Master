/* function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) {
    return false;
  }
  for (let wordIdx = 0; wordIdx < dotSeparatedWords.length; wordIdx++) {
    if (isAnIPNumber(dotSeparatedWords[wordIdx])) {
      continue;
    } else {
      return false;
    }
  }

  return true;
} */

let pets = {
  jerry: {species: "cat", age: 3},
  luna: {species: "dog", age: 5},
  goldin: {species: "fish", age: 1}
};

function flattenObj(animals) {
  let pets = Object.keys(animals);

  for (let idx in pets) {
    console.log(idx);
    console.log(animals[pets[idx]]);
    animals[pets[idx]] = animals[pets[idx]].species;
  }
}

flattenObj(pets);
console.log(pets);