
/* 
It returns an invoice object, with phone and internet properties, and a total method.
The default value for the phone service is 3000, and the internet service is 5500 (in cents, of course!).
The function takes an object argument whose attributes override the default values.
 */

/* function User(first, last) {
  this.name = first + last;
  return {
    name : first + ' '  + last
  };
}

let name = 'Jane Doe';
let user1 = new User('John', 'Doe');
let user2 = User('John', 'Doe');

console.log(name);         // => Jane Doe
console.log(user1.name);   // => John Doe
console.log(user2.name);   // => John Doe */
/* let jason = {
  name: "Jason",
  greet() {
    console.log(`${this.name} says hello.`);
  },
};

let jackie = {
  name: "Jackie",
};
console.log(jackie.name);

jason.greet.call(jackie); */
/* function Chair(legs) {
  this.legs = legs;
}
let myChair = Chair(2);
//console.log(myChair.legs);
console.log(global.legs); */
/* let checkSubstr = {
  substr: "cat",
  hasLetters(words) {
    return words.filter(function (word) {
      return word.includes(this.substr);
    }.bind(this));
  },
};

let words = ["category", "BBQ", "capstone", "Cat"];
console.log(checkSubstr.hasLetters(words));
 */
/* function Machine() {}

Machine.prototype.actuate = function () {
  return `The machine actuates`;
};

function ArborPress() {}
ArborPress.prototype = Object.create(Machine.prototype);
ArborPress.prototype.flatten = function () {
  return `The press flattens`;
};



let press = new ArborPress();
console.log(press.actuate());
console.log(press.flatten());
 */

/* function CoffeeMaker() {}

function DripMachine() {}

DripMachine.prototype = Object.create(CoffeeMaker.prototype);
DripMachine.prototype.constructor = DripMachine;


let dripCoffee = new DripMachine();
console.log(dripCoffee.constructor); */

/* let parity = {
  div: 2,
  areEven(nums) {
    return nums.every(num => num % parity.div === 0);
  },
};

console.log(parity.areEven([6, 18, 54, 30, 12])); */
/* function Paint(type, color) {
  this.type = type;
  this.color = color;
}

Paint.prototype.dry = function () {
  return `The ${this.color} ${this.type} paint is drying.`;
};

let acrylicPaint = new Paint("acrylic", "blue");
console.log(acrylicPaint.dry()); */
// question 5 and 6 and 
/* let carpenter = {
  name: "Bob",
  makes: [],
  makeThings() {
    this.makes.forEach((item) => {
      item.build();
    });
  },
};

let cabinet = {
  materials: ["wood", "nails", "hinges", "handle"],
  build() {
    console.log("Building a cabinet...");
  },
};

let shelf = {
  materials: ["wood", "screws", "glue"],
  build() {
    console.log("Building a shelf...");
  },
};

carpenter.makes.push(cabinet);
carpenter.makes.push(shelf);

carpenter.makeThings(); // Building a cabinet... and Building a shelf...
 */
/* let FireBreathingMixin = {
  breatheFire() {}
};
class Monster {
  constructor(name, habitat) {
    this.name = name;
    this.habitat = habitat;
  }
}

class LandMonster extends Monster {
  chase() {}
}

class SkyMonster extends Monster {
  fly() {}
}

class Wolf extends LandMonster {
  constructor(name,habitat) {
    super(name, habitat);
  }
  howl() {}
}

class Wyvern extends SkyMonster {
  constructor(name,habitat) {
    super(name, habitat);
    Object.assign(this, FireBreathingMixin);
  }
}

class Drake extends LandMonster {
  constructor(name,habitat) {
    super(name, habitat);
    Object.assign(this, FireBreathingMixin);

  }
}
 */
/* let ElectricType = {
  electricType() {
    console.log('Electric type');
  },
};

let SteelType = {
  steelType() {
    console.log('Steel type');
  },
};

class Magnemite {
  constructor() {
    Object.assign(this, ElectricType, SteelType);
  }
}
 */
/* class Cat {
  static allInstances = [];

  constructor(name, favoriteToy) {
    this.name = name;
    this.favoriteToy = favoriteToy;
    Cat.allInstances.push(this);
  }

  play() {
    console.log(`${this.name} is playing with ${this.favoriteToy}!`);
  }

  static allCats() {
    return Cat.allInstances.map(cat => cat.name);
  }
}
let cat1 = new Cat("a","b")
let cat2 = new Cat("c","d")
console.log(Cat.allCats()); */
/* const catPrototype = {
  init(name, favoriteToy) {
    this.name = name;
    this.favoriteToy = favoriteToy;
    return this;
  },
  play() {
    console.log(`${this.name} is playing with ${this.favoriteToy}!`);
  },
}; 
let siamese = Object.create(catPrototype).init("MeowMan", "bells");
siamese.play();

 */
/* function Chair(legs) {
  this.legs = legs;
  return 1;
}
let myChair = Chair(2);
console.log(myChair); 
let parity = {
   div: 2,
  areEven(nums) {
    return nums.every(num => num % parity.div === 0);
  },
};

console.log(parity.areEven([6, 18, 54, 30, 12])); */
/* let parity = {
  div: 2,
  areEven(nums) {
    console.log(this); // => { div: 2, areEven: [Function: areEven] }
    console.log(this.div === parity.div); // => true
    let everyCallback = () => num => num % this.div === 0;
    return nums.every(everyCallback);
  },
};

console.log(parity.areEven([6, 18, 54, 30, 12])); */
let variable = 0;
console.log(global.variable);
