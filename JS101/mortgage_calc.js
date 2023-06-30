/*
You'll need three pieces of information:

the loan amount
the Annual Percentage Rate (APR)
the loan duration
From the above, you'll need to calculate the following two things:

monthly interest rate
loan duration in months
You can use the following formula:
let m = p * (j / (1 - Math.pow((1 + j), (-n))));
m = monthly payment
p = loan amount
j = monthly interest rate
n = loan duration in months
 */

const readline = require('readline-sync');

function print(message) {
  console.log(`${message}`);
}

function calcMonthlyPayment(loan, apr, duration) {
  let paymentResult = 0;
  let monthlyInterest = (apr / 100) / 12;
  paymentResult = loan * (monthlyInterest / (1 - Math.pow(
    (1 + monthlyInterest),(-duration))));
  return paymentResult.toFixed(2);
}

print(`Enter loan amount:`);
let loanAmt = readline.question();

print(`Enter APR amount as a whole number:`);
let aprAmt = readline.question();

print(`Enter loan duration amount in months:`);
let durationAmt = readline.question();

print(`Your monthly payment is: $${calcMonthlyPayment(loanAmt, aprAmt, durationAmt)}`);