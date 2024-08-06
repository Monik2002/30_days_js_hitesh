// Day 13: Modules
// Tasks/Activities:
// Activity 1: Creating and Exporting Modules

// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.

export function addTwoNumbers(a, b) {
    return a + b;
}

// Import the addTwoNumbers function from the add.js module
import { addTwoNumbers } from './add.js';

console.log(addTwoNumbers(5, 10)); // Output: 15

// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

export const person = {
    name: 'Alice',
    age: 30,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

// Import the person object from the person.js module
import { person } from './person.js';

person.greet(); // Output: Hello, my name is Alice and I am 30 years old.

// Activity 2: Named and Default Exports

// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.

export function multiplyTwoNumbers(a, b) {
    return a * b;
}

export function divideTwoNumbers(a, b) {
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    return a / b;
}

// Import the multiplyTwoNumbers and divideTwoNumbers functions from the math.js module
import { multiplyTwoNumbers, divideTwoNumbers } from './math.js';

console.log(multiplyTwoNumbers(5, 10)); // Output: 50
console.log(divideTwoNumbers(10, 2)); // Output: 5

// Task 4: Create a module that exports a single function using default export. Import and use this function in another script.

export default function subtractTwoNumbers(a, b) {
    return a - b;
}

// Import the subtractTwoNumbers function from the subtract.js module
import subtractTwoNumbers from './subtract.js';

console.log(subtractTwoNumbers(10, 5)); // Output: 5

// Activity 3: Importing Entire Modules

// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.

export const PI = 3.14159;

export function square(number) {
    return number * number;
}

export function cube(number) {
    return number * number * number;
}

// Import the mathUtils module as an object
import * as mathUtils from './mathUtils.js';

console.log(mathUtils.PI); // Output: 3.14159
console.log(mathUtils.square(5)); // Output: 25
console.log(mathUtils.cube(3)); // Output: 27

// Activity 4: Using Third-Party Modules

// Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.

// Install the lodash module using npm
// npm install lodash

// Import the lodash module and use the _.shuffle function
import _ from 'lodash';

const shuffledArray = _.shuffle([1, 2, 3, 4, 5]);
console.log(shuffledArray); // Output: [3, 1, 5, 2, 4]

// Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.

// Install the axios module using npm
// npm install axios

// Import the axios module and make a GET request to a sample API
import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    });


// Activity 5: Module Bundling (Optional)

// Task 8: Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.

// Feature Request:
// Basic Module Script: Write a script that creates a module exporting a function and imports it in another script.
// Named and Default Exports Script: Create a script demonstrating both named and default exports and their usage.
// Third-Party Module Script: Write a script that installs, imports, and uses functions from third-party modules like lodash and axios.
// Module Bundling Script: Create a script demonstrating how to bundle JavaScript files using a module bundler (optional).
// Achievement:
// By the end of these activities, students will:

// Create and export functions, objects, and constants using modules.
// Import modules using named and default imports.
// Use third-party modules installed via npm.
// Understand the basics of module bundling (optional).

// done