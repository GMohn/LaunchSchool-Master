const readline = require('readline-sync');
const MSG = require('./calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt(MSG["en"].greeting);

while (true) {

  prompt(MSG.en.firstnum);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt();
    number1 = readline.question();
  }

  prompt(MSG.secondnum);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(MSG.invalid);
    number2 = readline.question();
  }

  prompt(MSG.operation);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(MSG.invalidop);
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(`The result is: ${output}`);
  prompt(MSG.new);
  let usrInput = readline.question();
  if (usrInput.toLowerCase() === 'yes') continue;
  else break;
}