// Activity 1: Variable Declaration

// Task 1: Declare a variable using var, assign it a number, and log the value to the console.
var number = 10;
console.log(number);

// Task 2: Declare a variable using let, assign it a string, and log the value to the console.
let string = 'Hello';
console.log(string);

// Activity 2: Constant Declaration

// Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
const boolean = true;
console.log(boolean);

// Activity 3: Data Types

// Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
let num = 10;
let str = 'Hello';
let bool = true;
let obj = { name: 'John' };
let arr = [1, 2, 3];

console.log(typeof num , typeof str, typeof bool, typeof obj, typeof arr);

// Activity 4: Reassigning Variables

// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
let value = 5;
console.log(value);

value = 10;
console.log(value);
// Activity 5: Understanding const

// Task 6: Try reassigning a variable declared with const and observe the error.
const pi = 3.14;
pi = 3.14159; // Error: Assignment to constant variable.

console.log(pi);

// Feature Request:
// Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.

// Declare variables of different data types
let stringVar = "Hello, World!";
let numberVar = 42;
let booleanVar = true;
let nullVar = null;
let undefinedVar;
let objectVar = { name: "John", age: 30 };
let arrayVar = [1, 2, 3];
let functionVar = function() { return "I am a function"; };
let symbolVar = Symbol("uniqueSymbol");
let bigintVar = BigInt(9007199254740991);

// Function to log value and type
function logValueType(variable) {
    console.log(`Value: ${variable}, Type: ${typeof variable}`);
}

// Log the value and type of each variable
logValueType(stringVar);
logValueType(numberVar);
logValueType(booleanVar);
logValueType(nullVar);
logValueType(undefinedVar);
logValueType(objectVar);
logValueType(arrayVar);
logValueType(functionVar);
logValueType(symbolVar);
logValueType(bigintVar);

// Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.

let letVariable = 10;
const constVariable = 20;

console.log("Initial values:");
console.log("letVariable:", letVariable);

try {
    console.log("constVariable:", constVariable);
}
catch (error) {
    console.log("Error:", error);
}

letVariable = 30;
// constVariable = 40; // Uncommenting this line will result in an error

console.log("Updated values:");
console.log("letVariable:", letVariable);
console.log("constVariable:", constVariable);

// Achievement:
// By the end of these activities, you will:

// Know how to declare variables using var, let, and const.
// Understand the different data types in JavaScript.
// Be able to use the typeof operator to identify the data type of a variable.
// Understand the concept of variable reassignment and the immutability of const variables.


// done