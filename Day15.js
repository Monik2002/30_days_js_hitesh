// Day 15: Closures
// Tasks/Activities:
// Activity 1: Understanding Closures

// ** What are Closures?
// *? A closure is a feature in JavaScript that allows a function to access variables from an outer function's scope even after the outer function has finished executing. This is possible because the inner function maintains a reference to the variables in the outer function's scope.

// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.

function outerFunction() {
    let outerVariable = 'I am from the outer function';
    function innerFunction() {
        console.log('I am from the inner function');
        console.log(outerVariable);
    }
    return innerFunction;
}

const innerFunc = outerFunction();
innerFunc();

// ** How the above code works:
// *? The outerFunction defines a variable outerVariable and a nested innerFunction. The innerFunction logs a message and accesses the outerVariable from the outer function's scope. When outerFunction is called, it returns the innerFunction. The returned inner function is stored in the variable innerFunc, and then called to log the messages.

// Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.

function counterClosure() {
    let counter = 0;
    function increment() {
        counter++;
    }
    function getValue() {
        return counter;
    }
    return {
        increment,
        getValue
    };
}

const counter = counterClosure();
counter.increment();
counter.increment();
console.log(counter.getValue());

// Activity 2: Practical Closures

// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.

function uniqueIdGenerator() {
    let lastId = 0;
    return function() {
        lastId++;
        return `ID${lastId}`;
    }
}

const generateId = uniqueIdGenerator();
console.log(generateId());
console.log(generateId());
console.log(generateId());

// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.    

function greetUserClosure(name) {
    return function() {
        return `Hello, ${name}!`;
    }
}

const greetUser = greetUserClosure('Alice');
console.log(greetUser());

// Activity 3: Closures in Loops

// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.

function createFunctions() {
    const functions = [];
    for (let i = 0; i < 5; i++) {
        functions.push(function() {
            console.log(i);
        });
    }
    return functions;
}

const functions = createFunctions();
functions.forEach(func => func());

// ** How the above code works:
// *? The createFunctions function creates an array of functions inside a loop. Each function logs the value of i when called. Since the functions are created in a loop, they share the same i variable. When the functions are called, they all log the final value of i, which is 5.

// Activity 4: Module Pattern

// Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.

function itemModule() {
    const items = [];
    function add(item) {
        items.push(item);
    }
    function remove(item) {
        const index = items.indexOf(item);
        if (index !== -1) {
            items.splice(index, 1);
        }
    }
    function list() {
        return items;
    }
    return {
        add,
        remove,
        list
    };
}

const module = itemModule();
module.add('Apple');
module.add('Banana');
module.add('Cherry');
console.log(module.list());
module.remove('Banana');
console.log(module.list());

// ** How the above code works:
// *? The itemModule function creates a module for managing a collection of items. It uses a closure to store the items array and provides methods to add, remove, and list items. The module is created by calling itemModule, and items are added, removed, and listed using the returned object.

// Activity 5: Memoization

// Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.

function memoize(func) {
    const cache = {};
    return function(n) {
        if (n in cache) {
            return cache[n];
        }
        const result = func(n);
        cache[n] = result;
        return result;
    }
}

function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);
console.log(memoizedFactorial(5)); // Calculates factorial of 5
console.log(memoizedFactorial(3)); // Uses cached result for factorial of 3

// ** How the above code works:
// *? The memoize function takes another function as input and returns a memoized version of that function. It uses a closure to store the results of previous computations in the cache object. When the memoized function is called with a parameter, it checks if the result is already cached. If not, it computes the result using the original function and stores it in the cache for future use.

// 2nd example

function memoize(fn) {
    const cache = new Map();
    
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            console.log('Returning cached result for', args);
            return cache.get(key);
        } else {
            const result = fn(...args);
            cache.set(key, result);
            return result;
        }
    };
}

// Example function to be memoized
function add(a, b) {
    console.log('Computing result for', a, b);
    return a + b;
}

// Create a memoized version of the add function
const memoizedAdd = memoize(add);

// Test the memoized function
console.log(memoizedAdd(1, 2)); // Computing result for 1 2
console.log(memoizedAdd(1, 2)); // Returning cached result for [1,2]
console.log(memoizedAdd(2, 3)); // Computing result for 2 3
console.log(memoizedAdd(1, 2)); // Returning cached result for [1,2]

// Task 8: Create a memoized version of a function that calculates the factorial of a number.

function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

function memoizeFactorial(n) {
    const cache = {};
    if (n in cache) {
        return cache[n];
    }
    const result = factorial(n);
    cache[n] = result;
    return result;
}

const memoizedFactorial1 = memoizeFactorial(factorial);
console.log(memoizedFactorial1(5)); // Calculates factorial of 5

// Feature Request:
// Basic Closure Script: Write a script that demonstrates a basic closure with a function returning another function that accesses the outer function's variable.
// Counter Closure Script: Create a script that uses a closure to maintain a private counter with increment and get functions.
// Unique ID Generator Script: Write a script that generates unique IDs using a closure to keep track of the last generated ID.
// Loop Closure Script: Create a script that demonstrates closures in loops to ensure functions log the correct index.
// Memoization Script: Write a script that memoizes the results of a function and demonstrates it with a factorial calculation.
// Achievement:
// By the end of these activities, students will:

// Understand and create closures in JavaScript.
// Use closures to maintain private state and create encapsulated modules.
// Apply closures in practical scenarios like generating unique IDs and memoization.
// Use closures in loops to capture and use variables correctly.

// done