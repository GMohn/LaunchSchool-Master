
 /* **Question Statement**: After invoking the function `doubleVal` the parameter `obj` doubles its value property. Why do the variables `obj1` and `obj2` change as well? What concept does this code demonstrate? (3 points)
```Javascript
const obj1 = { value: 5 };
const obj2 = obj1;

function doubleVal(obj) {
  obj.value *= 2;
}

doubleVal(obj2);

console.log(obj1); // logs { value: 10 }
console.log(obj2); // logs { value: 10 }
```
**Grading Rubric**: 3 points<br>
student identified the concept of pass by reference (1 point)<br>
student explains why the variables obj1 and obj2 change (2 points)<br>
**Answer**: <br>
`obj1` creates an object with object literal notation <br>
`obj1` is assigned to `obj2` (`const obj2 = obj1`) `obj2` points to the same object that `obj1` is referencing.<br>
`obj1` and `obj2` now both hold references to the same object in memory. <br>
objects are mutable, which means their properties can be modified after the object is created.<br>
When `doubleVal` is invoked with the argument of `obj2`, the value is passed by reference<br>
Because the parameter `obj` was passed by reference and the value property of the shared object is mutable, inside the doubleVal function (`obj.value *= 2`), the multiplication assignment is applied to the shared object itself. As a result, both `obj1` and `obj2` reflect the updated value property.<br>
This code demonstrates pass by reference. 
<br> <br>
**Question Statement**: identify the distinct (independent) primitive values that have been created as well as the variables and objects 
```Javascript
let firstName = "Bob";
let lastName = new String("Smith");
const myGreeting = {
  getGreeting(alias) {
    return `Hello, ${alias}`;
  }
};
function logFarewell(alias) {
  console.log("Good Bye, " + alias);
}
let greeting = myGreeting.getGreeting(firstName + " " + lastName);

console.log(greeting); // logs Hello, Bob Smith
logFarewell(firstName); // logs Good Bye, Bob
```
**Rubric**: 3 points<br>
student identifies all the primitives (1 point)<br>
student identifies all the variables (1 point)<br>
student identifies all the objects (1 point)<br>
**Answer**: *The variables are*<br>
`firstName`,<br>
`lastName`<br>
`myGreeting`,<br>
the parameter of myGreeting, `alias`<br>
the parameter of logFarewell, `alias`<br>
and `greeting`.<br>
*The primitive values are*<br>
are "Bob" as a string literal<br>
"Smith" as a string literal<br>
The string " " in the argument of `getGreeting` invocation <br>
the value of the parameter alias in `getGreeting` containing the string literal "Bob Smith"<br>
The value of the parameter alias in `logFarewell` containing the string literal "Bob"<br>
the string "Good Bye, "<br>
the return value of the evaluation of the template literal is the string "Hello, Bob Smith"<br>
*The objects are*<br>
`lastName` holding a String object via function constructor.<br>
`myGreeting`, a constant variable that holds an object via object literal notation.<br>
the function declaration creates a Function object `logFarewell`<br>
Note: `getGreeting` is a method which are functions stored as object properties and therefore not considered an object.



1. *For your first problem, other than identifying the concept as pass-by-reference, could you add a brief explanation of what pass-by-reference is?*
 
When a reference is passed, mutations to the referenced variable or object will affect the original variable or object. When you pass an object as an argument to a `function` or assign it to another variable, you are passing a reference to the memory location where the object is stored. Any mutations made to the object within a ``function`` or through a new variable will be reflected in the original object.

2. *For your second problem, your code of choice is rather complex. You have missed a variable, an object and a few primitive values. You might want to refresh your memory on how primitives behave in JavaScript before getting back to us.*

I created complex code because I wanted to challenge myself, I also felt that making it too simple would seem like I'm only trying to pass without properly understanding the concepts.<br><br>
- There is a variable `logFarewell` which holds a `function` reference to `logFarewell()`.<br><br>
- The `String()` `function` invoked with the `new` keyword  is a `function` object. You can directly access the `String` object and its methods and properties without explicitly assigning it to a variable.

With the `+` operator overloaded to string concatenation, the addition implicity coerces the expression with left to right evaluation which will `return` a primitive value.<br>
- The addition operator `firstName + " "` will `return` a new primitive value `"Bob "` <br>
- The addition operator for `"Bob " + lastName` will `return` `"Bob Smith"` <br>
- The addition operation for `"Good Bye, " + alias` will `return` a new string primitive `Good Bye, Bob`
- The primitive `undefined` by the default `return` of `logFarewell()`
- 2 `console.log()` method calls return 2 primitives of `undefined` 

I also read that the + concatenation creates a String object but I assumed that was not true anymore as eslint recommended not to use the String constructor. Also if I use the reserved keyword function in a sentence without referring to a specific function, do I still use Markdown syntax? 