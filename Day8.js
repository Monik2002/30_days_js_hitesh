// Day 8: ES6+ Features
// Tasks/Activities:
// Activity 1: Template Literals

// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

let name = "Alice";
let age = 30;

console.log(`My name is ${name} and I am ${age} years old.`);

// Task 2: Create a multi-line string using template literals and log it to the console.

const multilinestring = `This is a
multi-line
string.`;

console.log(multilinestring);

// Activity 2: Destructuring

// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

let numbers = [1, 2, 3, 4, 5];
let [first, second] = numbers;

console.log(first, second);

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

let book = {
    title: "The Alchemist",
    author: "Paulo Coelho",
    year: 1988
};

let { title, author } = book;

console.log(title, author);

let library = {
    name: "Public Library",
    books: [
        {
            title: "The Alchemist",
            year: 1988,
            author: "Paulo Coelho"
        },
        {
            title: "To Kill a Mockingbird",
            year: 1960,
            author: "Harper Lee"
        }
    ]
};

// 1. extract title and author from the first book in the library

let { title: firstTitle, author: firstAuthor } = library.books[0];

console.log(firstTitle, firstAuthor);

// 2. extract title and author from the second book in the library

let { title: secondTitle, author: secondAuthor } = library.books[1];

console.log(secondTitle, secondAuthor);

// Activity 3: Spread and Rest Operators

// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];

console.log(arr2);

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

function sum(...args) {
    return args.reduce((total, current) => total + current, 0);
}

console.log(sum(1, 2, 3, 4, 5));

// Activity 4: Default Parameters

// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

function productvalue(first, second = 1) {
    return first * second;
}

console.log(productvalue(5, 3));
console.log(productvalue(5));


// Activity 5: Enhanced Object Literals

// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

const name1 = 'Insect Enthusiast';
const favoriteInsects = ['butterflies', 'beetles', 'dragonflies'];

const insectPhotographer = {
  // Shorthand for defining properties
  name1,
  favoriteInsects,

  // Method definitions
  takePhoto(insect) {
    console.log(`Taking a photo of a ${insect}...`);
  },

  // Computed property name
  ['numberOfFavorites']: favoriteInsects.length,

  // Concise method definition
  describeFavorites() {
    console.log(`I love photographing these insects: ${this.favoriteInsects.join(', ')}`);
  }
};

// Log the object to the console
console.log(insectPhotographer);

// Call the methods
insectPhotographer.takePhoto('butterfly');
insectPhotographer.describeFavorites();

// Task 9: Create an object with computed property names based on variables and log the object to the console.

const key = Math.random() > 0.5 ? 'a' : 'b';

const obj = {
    [key]: 1
};

console.log(obj);

// 2nd example  

const key1 = 'firstName';
const key2 = 'lastName';
const key3 = 'age';

const person = {
  [key1]: 'John',
  [key2]: 'Doe',
  [key3]: 30,
  greet() {
    return `Hello, my name is ${this[key1]} ${this[key2]} and I am ${this[key3]} years old.`;
  }
};

// Log the object to the console
console.log(person);

// Call the greet method
console.log(person.greet());

// Feature Request:
// Template Literals Script: Write a script that demonstrates the use of template literals to create and log strings with embedded variables and multi-line strings.
// Destructuring Script: Create a script that uses array and object destructuring to extract values and log them.
// Spread and Rest Operators Script: Write a script that demonstrates the use of the spread operator to combine arrays and the rest operator to handle multiple function arguments.
// Default Parameters Script: Create a script that defines a function with default parameters and logs the results of calling it with different arguments.
// Enhanced Object Literals Script: Write a script that uses enhanced object literals to create and log an object with methods and computed property names.
// Achievement:
// By the end of these activities, students will:

// Understand and use template literals for string interpolation and multi-line strings.
// Apply destructuring to extract values from arrays and objects.
// Utilize spread and rest operators for array manipulation and function arguments.
// Define functions with default parameters.
// Create objects using enhanced object literals, including methods and computed property names.