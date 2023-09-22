/* function createCar(make, fuelLevel, engineOn) {
  return {
    make: make,
    fuelLevel: fuelLevel,
    engineOn: engineOn,

    startEngine() {
      this.engineOn = true;
    },
    drive() {
      this.fuelLevel -= .1;
    },
    stopEngine() {
      this.engineOn = false;
    },
    refuel(percent) {
      if ((this.fuelLevel + (percent / 100)) <= 1) {
        this.fuelLevel += (percent / 100);
      } else {
        this.fuelLevel = 1;
      }
    },
  };
}

let raceCar1 = createCar('BMW', 0.5, false);
raceCar1.drive();

let raceCar2 = createCar('Ferrari', 0.7, true);
raceCar2.drive(); */

/* function createBook(title, author, read = false) {
  return {
    title,
    author,
    read,
    getDescription() {
      string = `${this.title} was written by ${this.author}.`
      return this.read ? `${string} I have read it.`: `${string} I haven't read it.`;
    },
    readBook() {
      this.read = true;
    }
  };
}
let book1 = createBook('Mythos', 'Stephen Fry');
let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris');
let book3 = createBook("Aunts aren't Gentlemen", 'PG Wodehouse');

book1.getDescription();  // "Mythos was written by Stephen Fry."
book2.getDescription();  // "Me Talk Pretty One Day was written by David Sedaris."
book3.getDescription();  // "Aunts aren't Gentlemen was written by PG Wodehouse"
console.log(book1.getDescription()); // Mythos was written by David Fry. I haven't read it.
book1.readBook();
console.log(book1.getDescription()); // Mythos was written by David Fry. I have read it. */
// function createPlayer(playerType) {
//   return {
//     // possible state: player name?
//     // possible state: player's current move?
//     playerType: playerType,

//     choose() {
//       if (this.isHuman()) {

//       } else {

//       }
//     },
//   };
// }
// const RPSGame = {
//   human: createPlayer('Human'),
//   computer: createPlayer('Computer'),

//   displayWelcomeMessage() {
//     console.log('Welcome to Rock, Paper, Scissors!');
//   },

//   displayGoodbyeMessage() {
//     console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
//   },

//   play() {
//     this.displayWelcomeMessage();
//     this.human.choose();
//     this.computer.choose();
//     displayWinner();
//     this.displayGoodbyeMessage();
//   },
// };
/* 
function createInvoice(internet = 5500, phone = 3000) {
  return {
    
  }

}

function invoiceTotal(invoices) {
  let total = 0;

  for (let index = 0; index < invoices.length; index += 1) {
    total += invoices[index].total();
  }

  return total;
}

let invoices = [];
invoices.push(createInvoice());
invoices.push(createInvoice({ internet: 6500 }));
invoices.push(createInvoice({ phone: 2000 }));
invoices.push(createInvoice({
  phone: 1000,
  internet: 4500,
}));

console.log(invoiceTotal(invoices)); // 31000 */
/* const Animal = function(species) {
  this.species = species;
  return species;
};

Animal.prototype.sleep = function() {
  console.log(`The ${this.species} is sleeping`);
};

let lion = new Animal('Panthera leo');
lion.sleep(); // TypeError */
/* function createPet(animal, name) {
  return {
    animal: animal,
    name: name,
    sleep: function(){
      console.log("I am sleeping")
    },
    wake: function() {
      console.log("I am awake")
    }
  }
}
let pudding = createPet("Cat", "Pudding");
console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
pudding.sleep(); // I am sleeping
pudding.wake();  // I am awake

let neptune = createPet("Fish", "Neptune");
console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
neptune.sleep(); // I am sleeping
neptune.wake();  // I am awake */

/* const PetPrototype = {
  init(animal, name) {
    this.animal = animal;
    this.name = name;
    return this
  },
  sleep: function () {
    console.log("I am sleeping")
  },
  wake: function() {
    console.log("I am awake")
  }
}
let pudding = Object.create(PetPrototype).init("Cat", "Pudding");
console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
pudding.sleep(); // I am sleeping
pudding.wake();  // I am awake

let neptune = Object.create(PetPrototype).init("Fish", "Neptune");
console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
neptune.sleep(); // I am sleeping
neptune.wake();  // I am awake */

/* class Greeting {
  greet(str) {
    console.log(str);
  }
}
class Hello extends Greeting {
  hi() {
    this.greet("Hello");
  }
}

class Goodbye extends Greeting {
  bye() {
    this.greet("Goodbye")
  }
} 
let  readline = require('readline-sync');

class Player {
  constructor() {
    this.move = null;
  }
}

class Computer extends Player {
  constructor() {
    super();
  }
  choose() {
      const choices = ['rock', 'paper', 'scissors'];
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIndex];
    }
  }

class Human extends Player{
  constructor() {
    super();
  }
  choose() {
      let choice;

      while (true) {
        console.log('Please choose rock, paper, or scissors:');
        choice = readline.question();
        if (['rock', 'paper', 'scissors'].includes(choice)) break;
        console.log('Sorry, invalid choice.');
      }

      this.move = choice;
    }
  }

class RPSGame {
  constructor() {
    this.human = createHuman();
    this.computer = createComputer();
  }

  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors!');
  };

  
    displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
  };

  displayWinner() {
    console.log(`You chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);

    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    if ((humanMove === 'rock' && computerMove === 'scissors') ||
        (humanMove === 'paper' && computerMove === 'rock') ||
        (humanMove === 'scissors' && computerMove === 'paper')) {
      console.log('You win!');
    } else if ((humanMove === 'rock' && computerMove === 'paper') ||
               (humanMove === 'paper' && computerMove === 'scissors') ||
               (humanMove === 'scissors' && computerMove === 'rock')) {
      console.log('Computer wins!');
    } else {
      console.log("It's a tie");
    }
  };

  playAgain() {
    console.log('Would you like to play again? (y/n)');
    let answer = readline.question();
    return answer.toLowerCase()[0] === 'y';
  };

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      if (!this.playAgain()) break;
    }

    this.displayGoodbyeMessage();
  };
}

let game = new RPSGame();
game.play(); 
const Speed = {
  goFast() {
    console.log(`I'm a ${this.constructor.name} and going super fast!`);
  }
};
const Hi = {
  hey() {
    console.log("i am second method");
  }
};
class Car {
  goSlow() {
    console.log(`I'm safe and driving slow.`);
  }
}
Object.assign(Car.prototype,Speed);


class Truck {
  goVerySlow() {
    console.log(`I'm a heavy truck and like going very slow.`);
  }
}
let truckInst = new Truck();
Object.assign(Truck.prototype,Speed);
Object.assign(Truck.prototype,Hi);
truckInst.hey();
truckInst.goFast();
console.log(Object.getPrototypeOf(truckInst));
 */
class Chef {
  prepare(wedding) {
    this.prepareFood(wedding.guests);
  }

  prepareFood(guests) {
    console.log('prep food');

  }
}

class Decorator {
  prepare(wedding) {
    this.decoratePlace(wedding.flowers);
  }

  decoratePlace(flowers) {
    console.log('prep place');

  }
}

class Musician {
  prepare(wedding) {
    this.preparePerformance(wedding.songs);
  }

  preparePerformance(songs) {
    console.log('prep song');
  }
}
class Wedding {
  constructor(guests, flowers, songs) {
    this.guests = guests;
    this.flowers = flowers;
    this.songs = songs;
  }

  prepare(preparers) {
    preparers.forEach(preparer => {
      if (typeof preparer.prepare === 'function') {
        preparer.prepare(this);
      } else {
        console.log(`The ${preparer.constructor.name} class has not implemented the prepare method yet.`);
      }
    });
  }
}
let musician = new Musician();
let chef = new Chef();
let decorator = new Decorator();
let ringBearer = { 
  // This is an object literal with no prepare method
  name: "Ring Bearer" 
};

let wedding = new Wedding(12, 'rose', 'rap');
wedding.prepare([musician, chef, decorator, ringBearer]);

