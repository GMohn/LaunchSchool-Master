/* console.log("Hello".constructor.name);
console.log([1,2,3].constructor.name);
console.log({name: 'Srdjan'}.constructor.name); */

/* class Cat {
  constructor(name = "cat") {
    this.name = name;
  }
  greet() {
    console.log(`hello ${this.name}`)
  }
}
let kitty = new Cat();
kitty.greet(); */
/* class Person {
  constructor(name = "John Doe") {
    this.name = name;
  }
}
let person1 = new Person();
let person2 = new Person("Pepe");

console.log(person1.name); // John Doe
console.log(person2.name); // Pepe */

/* class Cat {
  constructor(name) {
    this.name = name;
  }
  rename(name) {
    this.name = name;
  }

}

let kitty = new Cat('Sophie');
console.log(kitty.name); // Sophie
kitty.rename('Chloe');
console.log(kitty.name); // Chloe */

/* class Cat {
  constructor(name) {
    this.name = name;
  }
  static genericGreeting() {
    console.log("hello i am cat");
  }
  personalGreeting() {
    console.log(`hello i am ${this.name}`);
  }
}

let kitty = new Cat("Sophie");
Cat.genericGreeting();
kitty.personalGreeting(); */

/* class Vehicle {
  constructor(year) {
    this.year = year;
  }
}
class Truck extends Vehicle {

}
class Car extends Vehicle {

}
let truck = new Truck(2003);
console.log(truck.year); // 2003

let car = new Car(2015);
console.log(car.year); // 2015 */
/* class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

class Truck extends Vehicle {
  constructor(year) {
    super(year);
    this.startEngine();
    }
  startEngine() {
    console.log('Ready to go!')
  }
}

let truck = new Truck(2003);
console.log(truck.year); // 2003 */
/* class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

class Truck extends Vehicle {
  constructor(year, bedType) {
    super(year);
    this.bedType = bedType;
  }
}

class Car extends Vehicle {}

let truck1 = new Truck(2003, 'Short');
console.log(truck1.year);
 */
/* class Vehicle {
  startEngine() {
    return 'Ready to go!';
  }
}

class Truck extends Vehicle{
  startEngine(speed) {
    return super.startEngine() + ` Drive ${speed}, please!`;
  }
}

let truck1 = new Truck();
console.log(truck1.startEngine('fast'));

let truck2 = new Truck();
console.log(truck2.startEngine('slow')); */
/* const catMixin = {
  walk() {
    return "Lets go for a walk!"
  }
}

class Cat {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hello! My name is ${this.name}!`;
  }
}
Object.assign(Cat.prototype,catMixin);

let kitty = new Cat("Sophie");
console.log(kitty.greet());
console.log(kitty.walk());
 */
/* const swimMixin = {
  swim() {
    return `${this.name} is swimming.`;
  }
}

class Fish {
  constructor(name) {
    this.name = name;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

class Maltese extends Dog {}
Object.assign(Maltese.prototype,swimMixin);
Object.assign(Fish.prototype,swimMixin);
let dog1 = new Maltese("Buddy");
let fish1 = new Fish("Nemo");

console.log(dog1.swim());
console.log(fish1.swim()); */
/* const towMixin = {
  tow() {
    console.log("I can tow a trailer.");
  }
}
class Truck {}

class Car {}
Object.assign(Truck.prototype, towMixin);
let truck = new Truck();
truck.tow(); */
/* const towMixin = {
  tow() {
    return "I can tow a trailer!";
  }
}
class Vehicle {
  constructor(year) {
    this.year = year;
  }
}
class Truck extends Vehicle{
  constructor(year) {
    super(year);
    Object.assign(this, towMixin);
  }
}

class Car extends Vehicle {}

let truck = new Truck(2002);
console.log(truck.year);
console.log(truck.tow());

let car = new Car(2015);
console.log(car.year); */
/* class Rectangle {
  constructor(wid,len) {
    this.width = wid;
    this.length = len;
  }
  getWidth() {
    return this.width;
  }
  getLength() {
    return this.length;
  }
  getArea() {
    return this.length * this.width;
  }
}
class Square extends Rectangle {
  constructor(side) {
    super(side,side);
  }
}
let rect = new Rectangle(4, 5);

console.log(rect.getWidth()); // 4
console.log(rect.getLength()); // 5
console.log(rect.getArea()); // 20
let square = new Square(5);
console.log(`area of square = ${square.getArea()}`); // area of square = 25 */
/* class Cat {
  constructor(name) {
    this.name = name;
  }
  speaks() {
    return `${this.name} says meowwww.`;
  }
}

let fakeCat = Object.create(Cat.prototype);// your implementation
console.log(fakeCat instanceof Cat); // logs true
console.log(fakeCat.name);           // logs undefined
console.log(fakeCat.speaks());       // logs undefined says meowwww. */
/* class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Cat extends Pet {
  constructor(name,age,fur) {
    super(name,age);
    this.fur = fur;
  }
  info() {
    return `My cat ${this.name} is ${this.age} years old and has ${this.fur} fur.`
  }
}

let pudding = new Cat('Pudding', 7, 'black and white');
let butterscotch = new Cat('Butterscotch', 10, 'tan and white');

console.log(pudding.info());
console.log(butterscotch.info()); */
/* 
class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
  }
}
class Cat extends Animal {
  constructor(name,age,status) {
    super(name,age,4,"cat",status);
  }
  introduce() {
    return super.introduce() + " Meow meow!";
  }
}
class Dog extends Animal {
  constructor(name,age,status,master) {
    super(name,age,4,"dog",status);
    this.master = master;
  }
  greetMaster() {
    return `Hello ${this.master}! Woof woof!`;
  }
}
let cat = new Cat("Pepe", 2, "happy");
console.log(cat.introduce() === "Hello, my name is Pepe and I am 2 years old and happy. Meow meow!");
// logs true
 */
/* class Vehicle {
  constructor(make,model) {
    this.make = make;
    this.model = model;
  }
  info() {
    return `${this.make} ${this.model}`
  }
}
class Car extends Vehicle {
  getWheels() {
    return 4;
  }

}

class Motorcycle extends Vehicle {
  getWheels() {
    return 2;
  }
}

class Truck extends Vehicle {
  constructor(make, model, payload) {
    super(make,model);
    this.payload = payload;
  }
  getWheels() {
    return 6;
  }
}  
class Person {
  greeting(text) {
    console.log(text);
  }
}
class Shouter extends Person {
  greeting(text){
    console.log(text.toUpperCase())
  }
}

let person = new Person();
let shouter = new Shouter();

person.greeting("Hello. It's very nice to meet you."); // Hello. It's very nice to meet you
shouter.greeting("Hello my friend."); // HELLO MY FRIEND.
 */
/* const walkMixin = {
  walk() {
    return `${this.name} ${this.gait()} forward`;
  }
}
class Person {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "strolls";
  }
}

class Cat {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "saunters";
  }
}

class Cheetah {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "runs";
  }
}
Object.assign(Person.prototype,walkMixin);
Object.assign(Cat.prototype,walkMixin);
Object.assign(Cheetah.prototype,walkMixin);

let mike = new Person("Mike");
console.log(mike.walk());
// "Mike strolls forward"

let kitty = new Cat("Kitty");
console.log(kitty.walk());
// "Kitty saunters forward"

let flash = new Cheetah("Flash");
console.log(flash.walk());
// "Flash runs forward" */
/* class Pet {
  constructor(type, name) {
    this.type = type;
    this.name = name;
  }

  toString() {
    return `a ${this.type} named ${this.name}`;
  }
}

class Owner {
  constructor(name) {
    this.name = name;
    this.pets = [];
  }

  adopt(pet) {
    this.pets.push(pet);
  }

  numberOfPets() {
    return this.pets.length;
  }

  printAdoptions() {
    console.log(`${this.name} has adopted the following pets:`);
    this.pets.forEach(pet => console.log(pet.toString()));
    console.log("\n");
  }
}

class Shelter {
  constructor() {
    this.owners = [];
  }

  adopt(owner, pet) {
    owner.adopt(pet);
    if (!this.owners.includes(owner)) {
      this.owners.push(owner);
    }
  }

  printAdoptions() {
    this.owners.forEach(owner => {
      owner.printAdoptions();
    });
  }
}


let butterscotch = new Pet('cat', 'Butterscotch');
let pudding      = new Pet('cat', 'Pudding');
let darwin       = new Pet('bearded dragon', 'Darwin');
let kennedy      = new Pet('dog', 'Kennedy');
let sweetie      = new Pet('parakeet', 'Sweetie Pie');
let molly        = new Pet('dog', 'Molly');
let chester      = new Pet('fish', 'Chester');

let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');

let shelter = new Shelter();
shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);
shelter.printAdoptions();
console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);

P Hanson has adopted the following pets:
a cat named Butterscotch
a cat named Pudding
a bearded dragon named Darwin

B Holmes has adopted the following pets:
a dog named Molly
a parakeet named Sweetie Pie
a dog named Kennedy
a fish named Chester

P Hanson has 3 adopted pets.
B Holmes has 4 adopted pets.  */
/* class Banner {
  constructor(message) {
    this.message = message;
  }

  displayBanner() {
    console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
  }

  horizontalRule() {
    return `+-${'-'.repeat(this.message.length)}-+`;
  }

  emptyLine() {
    return `| ${' '.repeat(this.message.length)} |`;
  }

  messageLine() {
    return `| ${this.message} |`;
  }
}
let banner1 = new Banner('To boldly go where no one has gone before.');
banner1.displayBanner();
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+ 
let banner2 = new Banner('');
banner2.displayBanner();
// +--+
// |  |
// |  |
// |  |
// +--+ */
/* function createGreeter(name) {
  return {
    name: name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    greet: function(timeOfDay) {
      let msg = '';
      switch (timeOfDay) {
        case 'morning':
          msg += `${this.morning} ${this.name}`;
          break;
        case 'afternoon':
          msg += `${this.afternoon} ${this.name}`;
          break;
        case 'evening':
          msg += `${this.evening} ${this.name}`;
          break;
      }

      console.log(msg);
    },
  };
}
let helloVictor = createGreeter('Victor');
helloVictor.greet('morning'); */
/* let item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount: function(percent) {
    let discount = this.price * percent / 100;
    return this.price - discount;
  },
};
console.log(item.discount(20)); //40
console.log(item.discount(50)); //25
console.log(item.discount(25)); //37.5 */
/* function objectsEqual(obj1,obj2) {
  entries1 = Object.entries(obj1)
  entries2 = Object.entries(obj2)
  if (entries1.length !== entries2.length) {
    return false;
  }

  for (const [key, value] of entries1) {
    if (!entries2.some(([k, v]) => k === key && v === value)) {
      return false;
    }
  }

  return true;
}
console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false *//* 
function createStudent(name, grade) {
  return {
    student: name,
    grade: grade,
    courses: [],
    info: function() {
      console.log(`${this.student} is a ${this.grade} year student`);
    },
    listCourses: function() {
      console.log(`${JSON.stringify(this.courses)}`);
    },
    addCourse: function(course) {
      this.courses.push(course);
    },
    // addNote: Adds a note property to a course. Takes a code and a note as an argument. If a note already exists, the note is appended to the existing one.
    addNote: function(courseNum, note) {
      let course = this.courses.filter(course => {
        return course.code === courseNum;
      })[0];
      if(course.note) {
        course.note += `; ${note}`;

      }
      else {
      course.note = note;
      }
    },
    viewNotes: function() {
      this.courses.forEach(course => {
        if (course.note) {
          console.log(`${course.name}: ${course.note}`);
        }
      });
    },
    updateNote: function(courseCode, note) {
      let course = this.courses.filter(course => {
        return course.code === courseCode;
      })[0];

      if (course) {
        course.note = note;
      }
    },
  };
}
/* Create a school object. The school object uses the same kind of student object as the previous exercise. It has methods that use and update information about the student. Be sure to check out the previous exercise for the other arguments that might be needed by the school object. Implement the following methods for the school object:

addStudent: Adds a student by creating a new student and adding the student to a collection of students. The method adds a constraint that the year can only be any of the following values: '1st', '2nd', '3rd', '4th', or '5th'. Returns a student object if year is valid otherwise it logs "Invalid Year".
enrollStudent: Enrolls a student in a course.
addGrade: Adds the grade of a student for a course.
getReportCard: Logs the grades of a student for all courses. If the course has no grade, it uses "In progress" as the grade.
courseReport: Logs the grades of all students for a given course name. Only student with grades are part of the course report.

let school = function () {
  return {

  }
}

let foo = createStudent('Foo', '1st');
foo.info();
// "Foo is a 1st year student"
foo.listCourses();
// [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
// "Advance Math: Difficult subject"
foo.updateNote(101, 'Fun course');
foo.viewNotes();
// "Math: Fun course"
// "Advanced Math: Difficult subject"
 */
/* let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    return [1, 2, 3].map(function(number) {
      return this.name + ' ' + number;
    }.bind(this));
  },
};
console.log(franchise.allMovies()); */
function myFilter(array, func, thisArg = {}) {
  let result = [];
  array.forEach(function(value) {
    if (func.call(thisArg,value)) {
      result.push(value);
    }
  });
  console.log(result);
  return result;
}

let filter = {
  allowedValues: [5, 6, 9],
}

myFilter([2, 1, 3, 4, 5, 6, 9, 12], function(val) {
  return this.allowedValues.indexOf(val) >= 0;
}, filter); // returns [5, 6, 9]