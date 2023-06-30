function factors(number) {
  let factors = [];
  for (let divisor = 0; divisor <= number; divisor++) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
  }
  return factors;
}
console.log(factors(10));