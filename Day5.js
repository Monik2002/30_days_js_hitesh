// Day 5: Functions
// Tasks/Activities:
// Activity 1: Function Declaration

// Task 1: Write a function to check if a number is even or odd and log the result to the console.

function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        console.log(`${number} is even.`);
    } else {
        console.log(`${number} is odd.`);
    }
}

checkEvenOrOdd(5); // Output: 5 is odd.

// Task 2: Write a function to calculate the square of a number and return the result.

function calculateSquare(number) {
    return number * number;
}

const square = calculateSquare(5);

// Activity 2: Function Expression

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

const findMax = function (num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} is the maximum.`);
    } else {
        console.log(`${num2} is the maximum.`);
    }
}

findMax(5, 10); // Output: 10 is the maximum.

// Task 4: Write a function expression to concatenate two strings and return the result.

const concatenateStrings = function (str1, str2) {
    return str1 + str2;
}

const result = concatenateStrings('Hello', 'World');

// Activity 3: Arrow Functions

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

const calculateSum = (num1, num2) => num1 + num2;

const sum = calculateSum(5, 10);

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

const containsCharacter = (str, char) => str.includes(char);

const hasCharacter = containsCharacter('Hello', 'o');

// Activity 4: Function Parameters and Default Values

// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

function calculateProduct(num1, num2 = 1) {
    return num1 * num2;
}

const product = calculateProduct(5); // Output: 5

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

function greetPerson(name, age) {
    return `Hello, ${name}! You are ${age} years old.`;
}

const greeting = greetPerson('Alice' , '18'); // Output: Hello, Alice! You are undefined years old.

// Activity 5: Higher-Order Functions

// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

function callFunctionMultipleTimes(func, times) {
    for (let i = 0; i < times; i++) {
        func();
    }
}

function greet() {
    console.log('Hello!');
}

callFunctionMultipleTimes(greet, 3); // Output: Hello! Hello! Hello!

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

function applyFunctions(func1, func2, value) {
    return func2(func1(value));
}

function double(number) {
    return number * 2;
}

function squareRoot(number) {
    return Math.sqrt(number);
}

const result1 = applyFunctions(double, squareRoot, 16); // Output: 8


// 2nd Example
function applyFunctions(func1,func2, value) 
{
        const firstResult = func1(value);
        const finalResult = func2(firstResult);
        return finalResult;
    }

function square(x) {
    return x * x;
}

function increment(y) {
    return y + 1;
}

const value = 5;
const result2 = applyFunctions(square, increment, value); // Output: 26

console.log(result2);

// Feature Request:
// Even or Odd Function Script: Write a script that includes a function to check if a number is even or odd and logs the result.
// Square Calculation Function Script: Create a script that includes a function to calculate the square of a number and returns the result.
// Concatenation Function Script: Write a script that includes a function expression to concatenate two strings and returns the result.
// Sum Calculation Arrow Function Script: Create a script that includes an arrow function to calculate the sum of two numbers and returns the result.
// Higher-Order Function Script: Write a script that includes a higher-order function to apply a given function multiple times.
// Achievement:
// By the end of these activities, students will:

// Understand and define functions using function declarations, expressions, and arrow functions.
// Use function parameters and default values effectively.
// Create and utilize higher-order functions.
// Apply functions to solve common problems and perform calculations.
// Enhance code reusability and organization using functions.