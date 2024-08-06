// Day 19: Regular Expressions
// Tasks/Activities:
// Activity 1: Basic Regular Expressions

// Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.

function findAllJavaScriptOccurrences(str) {
    const regex = /JavaScript/g; 
    const matches = str.match(regex); 

    if (matches) {
        console.log("Matches found:", matches);
    } else {
        console.log("No matches found.");
    }
}

findAllJavaScriptOccurrences("I love JavaScript. JavaScript is a powerful language.");
findAllJavaScriptOccurrences("This string does not contain the keyword.");

// Task 2: Write a regular expression to match all digits in a string. Log the matches.

function findAllDigits(str) {
    const regex = /\d/g; 
    const matches = str.match(regex); 

    if (matches) {
        console.log("Matches found:", matches);
    } else {
        console.log("No matches found.");
    }
}

findAllDigits("The number 123 is greater than 100."); // Matches found: [ '1', '2', '3', '1', '0', '0' ]
findAllDigits("No digits in this string."); // No matches found.

// Activity 2: Character Classes and Quantifiers

// Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.

function findCapitalWords(str) {
    const regex = /\b[A-Z]\w*/g;
    const matches = str.match(regex);

    if (matches) {
        console.log("Matches found:", matches);
    } else {
        console.log("No matches found.");
    }

}

findCapitalWords("The Quick Brown Fox Jumps Over The Lazy Dog"); // Matches found: [ 'The', 'Quick', 'Brown', 'Fox', 'Jumps', 'Over', 'The', 'Lazy', 'Dog' ]

// Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.

function findDigitSequences(str) {
    const regex = /\d+/g;
    const matches = str.match(regex);

    if (matches) {
        console.log("Matches found:", matches);
    } else {
        console.log("No matches found.");
    }
}

findDigitSequences("The number 123 is greater than 100."); // Matches found: [ '123', '100' ]

// Activity 3: Grouping and Capturing

// Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.

function capturePhoneNumberComponents(phoneNumber) {
    const regex = /\((\d{3})\)\s(\d{3})-(\d{4})/;
    const matches = phoneNumber.match(regex);

    if (matches) {
        console.log("Area Code:", matches[1]);
        console.log("Central Office Code:", matches[2]);
        console.log("Line Number:", matches[3]);
    } else {
        console.log("No matches found.");
    }

}

capturePhoneNumberComponents("(123) 456-7890"); // Area Code: 123, Central Office Code: 456, Line Number: 7890

// Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.

function captureEmailComponents(email) {
    const regex = /(\w+)@(\w+\.\w+)/;
    const matches = email.match(regex);

    if (matches) {
        console.log("Username:", matches[1]);
        console.log("Domain:", matches[2]);
    } else {
        console.log("No matches found.");
    }

}
// Activity 4: Assertions and Boundaries

// Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.

function matchWordAtBeginning(str) {
    const regex = /\b\w+/g;
    const matches = str.match(regex);

    if (matches) {
        console.log("Matches found:", matches);
    } else {
        console.log("No matches found.");
    }
}

matchWordAtBeginning("Hello, World!"); // Matches found: [ 'Hello' ]

// Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.

function matchWordAtEnd(str) {
    const regex = /\w+\b/g;
    const matches = str.match(regex);

    if (matches) {
        console.log("Matches found:", matches);
    } else {
        console.log("No matches found.");
    }
}

matchWordAtEnd("Hello, World!"); // Matches found: [ 'World' ]

// Activity 5: Practical Applications

// Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.

function validatePassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/;
    const isValid = regex.test(password);

    if (isValid) {
        console.log("Password is valid.");
    } else {
        console.log("Password is invalid.");
    }
}

validatePassword("Password123!"); // Password is valid.
validatePassword("weakpassword"); // Password is invalid.

// Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.

function validateURL(url) {
    const regex = /^(https?:\/\/)?(www\.)?[\w-]+(\.[a-z]{2,}){1,}$/;
    const isValid = regex.test(url);

    if (isValid) {
        console.log("URL is valid.");
    } else {
        console.log("URL is invalid.");
    }
}

validateURL("https://www.google.com"); // URL is valid.
validateURL("invalid-url"); // URL is invalid.

// Feature Request:
// Basic Regex Script: Write a script that uses regular expressions to match simple patterns and log the matches.
// Character Classes and Quantifiers Script: Create a script that uses regular expressions to match words with specific characteristics and log the matches.
// Grouping and Capturing Script: Write a script that uses regular expressions to capture parts of a string, such as phone numbers and email addresses, and log the captures.
// Assertions and Boundaries Script: Create a script that uses regular expressions to match words at specific positions in a string and log the matches.
// Validation Script: Write a script that uses regular expressions to validate passwords and URLs and log whether they are valid.
// Achievement:
// By the end of these activities, students will:

// Understand and create basic regular expressions.
// Use character classes and quantifiers in regular expressions.
// Implement grouping and capturing in regular expressions.
// Apply assertions and boundaries in regular expressions.
// Use regular expressions for practical applications like validating passwords and URLs.

// done