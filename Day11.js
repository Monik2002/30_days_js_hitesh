// Day 11: Promises and Async/Await
// Tasks/Activities:
// Activity 1: Understanding Promises

// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolved after 2 seconds');
    }, 2000);
}).then((message) => {
    console.log(message);
});

// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise rejected after 2 seconds');
    }, 2000);
}).catch((error) => {
    console.log(error);
});

// Activity 2: Chaining Promises

// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

const fetchServerData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Data fetched from server');
    }, 2000);
});

fetchServerData.then((message) => {
    console.log(message);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data processed');
        }, 2000);
    });
}).then((message) => {
    console.log(message);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data displayed');
        }, 2000);
    });
}).then((message) => {
    console.log(message);
});

// Activity 3: Using Async/Await

// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.

async function resolvePromise() {
    const message = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise resolved after 2 seconds');
        }, 2000);
    });
    console.log(message);
};

resolvePromise();

// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.

async function rejectPromise() {
    try {
        const error = await new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('Promise rejected after 2 seconds');
            }, 2000);
        });
    } catch (error) {
        console.log(error);
    }
};

rejectPromise();

// Activity 4: Fetching Data from an API

// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.

fetch('https://jsonplaceholder.typicode.com/posts/1').then(response => {
    return response.json();
}).then(data => {
    console.log(data);
});

// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.

async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log(data);
}

// Activity 5: Concurrent Promises

// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.

const promisex = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 resolved after 2 seconds');
    }, 2000);
});

const promisey = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2 resolved after 3 seconds');
    }, 3000);
});

const promisez = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 3 resolved after 1 second');
    }, 1000);
});

Promise.all([promisex, promisey, promisez]).then((values) => {
    console.log(values);
});

// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.

const promisea = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise A resolved after 2 seconds');
    }, 2000);
});

const promiseb = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise B resolved after 3 seconds');
    }, 3000);
});

const promisec = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise C resolved after 1 second');
    }, 1000);
});

Promise.race([promisea, promiseb, promisec]).then((value) => {
    console.log(value);
});

// Feature Request:
// Promise Creation Script: Write a script that demonstrates creating and handling promises, including both resolved and rejected states.
// Promise Chaining Script: Create a script that chains multiple promises and logs messages in a specific sequence.
// Async/Await Script: Write a script that uses async/await to handle promises and includes error handling with try-catch.
// API Fetch Script: Create a script that fetches data from a public API using both promises and async/await, and logs the response data.
// Concurrent Promises Script: Write a script that uses Promise.all and Promise.race to handle multiple promises concurrently and logs the results.
// Achievement:
// By the end of these activities, students will:

// Understand and create promises, including handling resolved and rejected states.
// Chain multiple promises to perform sequential asynchronous operations.
// Use async/await to handle asynchronous code more readably.
// Fetch data from public APIs using both promises and async/await.
// Manage multiple concurrent promises using Promise.all and Promise.race.

// done