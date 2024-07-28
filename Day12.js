// Day 12: Error Handling
// Tasks/Activities:
// Activity 1: Basic Error Handling with Try-Catch

// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

function throwError() {
    throw new Error('Intentional error thrown');
}

try {
    throwError();
} catch (error) {
    console.log(error.message);
}

// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.

function divideNumbers(numerator, denominator) {
    if (denominator === 0) {
        throw new Error('Cannot divide by zero');
    }
    return numerator / denominator;
}

try {
    console.log(divideNumbers(10, 2));
    console.log(divideNumbers(10, 0));
}
catch (error) {
    console.log(error.message);
}

// Activity 2: Finally Block

// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.

try {
    console.log('Inside try block');
    throw new Error('Error occurred');
} catch (error) {
    console.log('Inside catch block');
    console.log(error.message);
} finally {
    console.log('Inside finally block');
}

// Activity 3: Custom Error Objects

// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CustomError';
    }
}

function throwCustomError() {
    throw new CustomError('Custom error occurred');
}

try {
    throwCustomError();
} catch (error) {
    console.log(error.name + ': ' + error.message);
}

// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.

function validateInput(input) {
    if (input.trim() === '') {
        throw new CustomError('Input cannot be empty');
    }
    return 'Input is valid';
}

try {
    console.log(validateInput('Hello'));
    console.log(validateInput(''));
} catch (error) {
    console.log(error.name + ': ' + error.message);
}

// Activity 4: Error Handling in Promises

// Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.

const randomPromise = new Promise((resolve, reject) => {
    const random = Math.random();
    if (random < 0.5) {
        resolve('Promise resolved');
    } else {
        reject('Promise rejected');
    }
});

randomPromise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
});

// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

async function handleRandomPromise() {  
    try {
        const message = await new Promise((resolve, reject) => {
            const random = Math.random();
            if (random < 0.5) {
                resolve('Promise resolved');
            } else {
                reject('Promise rejected');
            }
        });
        console.log(message);
    } catch (error) {
        console.log(error);
    }
}

handleRandomPromise();

// Activity 5: Graceful Error Handling in Fetch

// Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.

fetch('https://jsonplaceholder.typicode.com/posts/invalid').then(response => {
    return response.json();
}).then(data => {
    console.log(data);
}).catch(error => {
    console.log('Error fetching data:', error);
});


// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

async function fetchDataFromInvalidURL() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/invalid');
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.log('Error fetching data:', error);
    }
}

fetchDataFromInvalidURL();

// Feature Request:
// Basic Error Handling Script: Write a script that demonstrates basic error handling using try-catch and finally blocks.
// Custom Error Script: Create a script that defines and throws custom errors, handling them with try-catch blocks.
// Promise Error Handling Script: Write a script that handles errors in promises using .catch() and try-catch within async functions.
// Fetch Error Handling Script: Create a script that handles errors when using the fetch API to request data from invalid URLs.
// Achievement:
// By the end of these activities, students will:

// Understand and implement basic error handling using try-catch blocks.
// Use finally blocks to execute code regardless of the try-catch outcome.
// Create and use custom error classes.
// Handle errors in promises using .catch() and within async functions using try-catch.
// Implement graceful error handling when making network requests with the fetch API.