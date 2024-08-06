// Day 7: Objects
// Tasks/Activities:
// Activity 1: Object Creation and Access

// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.

let book = {
    title: "The Alchemist",
    author: "Paulo Coelho",
    year: 1988
};

console.log(book);

// Task 2: Access and log the title and author properties of the book object.

console.log(book.title);
console.log(book.author);

// Activity 2: Object Methods

// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

book.getDetails = function() {
    return `${this.title} by ${this.author}`;
};

console.log(book.getDetails());

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

book.updateYear = function(year) {
    this.year = year;
};

book.updateYear(1990);
console.log(book);

// Activity 3: Nested Objects

// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

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

console.log(library);

// Task 6: Access and log the name of the library and the titles of all the books in the library.

console.log(library.name);
console.log("Books in the library:");
library.books.forEach(book => console.log(book.title));

// Activity 4: The this Keyword

// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.

book.getDetailsWithYear = function() {
    return `${this.title} (${this.year})`;
}

console.log(book.getDetailsWithYear());

// Activity 5: Object Iteration

// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.

for (let key in book) {
    console.log(`${key}: ${book[key]}`);
}

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.

console.log("Keys:", Object.keys(book));
console.log("Values:", Object.values(book));

// Feature Request:
// Book Object Script: Write a script that creates a book object, adds methods to it, and logs its properties and method results.
// Library Object Script: Create a script that defines a library object containing an array of book objects and logs the library's details.
// Object Iteration Script: Write a script that demonstrates iterating over an object's properties using for...in loop and Object.keys/Object.values.
// Achievement:
// By the end of these activities, students will:

// Create and manipulate objects with properties and methods.
// Understand and use the this keyword in object methods.
// Work with nested objects and arrays of objects.
// Iterate over an object's properties using loops and built-in methods.

// done