// Day 2: Operators

// Tasks/Activities:
// Activity 1: Arithmetic Operations

// Task 1: Write a program to add two numbers and log the result to the console.

function add(a, b) {
    return a + b;
}

add(2, 3); // 5

// Task 2: Write a program to subtract two numbers and log the result to the console.

function subtract(a, b) {
    return a - b;
}

subtract(5, 3); // 2

// Task 3: Write a program to multiply two numbers and log the result to the console.

function multiply(a, b) {
    return a * b;
}

multiply(2, 3); // 6

// Task 4: Write a program to divide two numbers and log the result to the console.

function divide(a, b) {
    return a / b;
}

console.log(divide(6, 3)); // 2

// Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.

function remainder(a, b) {
    return a % b;
}

console.log(remainder(5, 2)); // 1

// Activity 2: Assignment Operators

// Task 6: Use the += operator to add a number to a variable and log the result to the console.

function add(a, b) {
    a += b;
    return a;
}

console.log(add(2, 3)); // 5
// Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.

function subtract(a, b) {
    a -= b;
    return a;
}

console.log(subtract(5, 3)); // 2

// Activity 3: Comparison Operators

// Task 8: Write a program to compare two numbers using > and < and log the result to the console.

function compare(a, b) {
    if (a > b) {
        return `${a} is greater than ${b}`;
    } else if (a < b) {
        return `${a} is less than ${b}`;
    } else {
        return `${a} is equal to ${b}`;
    }
}

console.log(compare(5, 3)); // 5 is greater than 3

// Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.

function compare(a, b) {
    if (a >= b) {
        return `${a} is greater than or equal to ${b}`;
    } else if (a <= b) {
        return `${a} is less than or equal to ${b}`;
    } else {
        return `${a} is not comparable to ${b}`;
    }
}

console.log(compare(5, 5)); // 5 is greater than or equal to 5

// Task 10: Write a program to compare two numbers using == and === and log the result to the console.

function compare(a, b) {
    if (a == b) {
        return `${a} is equal to ${b}`;
    } else if (a === b) {
        // === is strict equality operator. It checks both value and type.
        return `${a} is strictly equal to ${b}`;
    } else {
        return `${a} is not equal to ${b}`;
    }
}

console.log(compare(5, '5')); // 5 is equal to 5

// Activity 4: Logical Operators

// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.

function check(a, b) {
    if (a > 0 && b > 0) {
        return 'Both numbers are positive';
    } else {
        return 'At least one number is not positive';
    }
}

console.log(check(5, 3)); // Both numbers are positive

// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.

function check(a, b) {
    if (a > 0 || b > 0) {
        return 'At least one number is positive';
    } else {
        return 'Both numbers are not positive';
    }
}

console.log(check(-5, 3)); // At least one number is positive

// Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.

function check(a) {
    if (!(a > 0)) {
        return 'The number is not positive';
    } else {
        return 'The number is positive';
    }
}

console.log(check(-5)); // The number is not positive

// Activity 5: Ternary Operator

// Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

function check(a) {
    return a > 0 ? 'The number is positive' : 'The number is negative';
}

console.log(check(-5)); // The number is negative

// Feature Request:
// Arithmetic Operations Script: Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.

function arithmeticOperations(a, b) {
    console.log(`Addition: ${a} + ${b} = ${a + b}`);
    console.log(`Subtraction: ${a} - ${b} = ${a - b}`);
    console.log(`Multiplication: ${a} * ${b} = ${a * b}`);
    // division by zero check to avoid Infinity result in case of division by zero error . also check for NaN in case of division by non numeric value . also use toFixed(2) to round off the result to 2 decimal places
    if (b === 0 || isNaN(a / b)) {
        console.log('Division: Invalid operation');
    } else {
        console.log(`Division: ${a} / ${b} = ${(a / b).toFixed(2)}`);
    }
    console.log(`Remainder: ${a} % ${b} = ${a % b}`);
}

arithmeticOperations(5, 3);

// Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.

function compareAndCombine(a, b) {
    console.log(`Comparison using > and <: ${a} > ${b} = ${a > b}`);
    console.log(`Comparison using >= and <=: ${a} >= ${b} = ${a >= b}`);
    console.log(`Comparison using == and ===: ${a} == ${b} = ${a == b}`);
    console.log(`Logical AND: ${a} > 0 && ${b} > 0 = ${a > 0 && b > 0}`);
    console.log(`Logical OR: ${a} > 0 || ${b} > 0 = ${a > 0 || b > 0}`);
}

compareAndCombine(5, 3);

// Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.

function checkNumber(a) {
    console.log(`${a} is ${a > 0 ? 'positive' : 'negative'}`);
}

checkNumber(-5);

// Achievement:
// By the end of these activities, students will:

// Understand and use arithmetic operators to perform basic calculations.
// Use assignment operators to modify variable values.
// Compare values using comparison operators.
// Combine conditions using logical operators.
// Use the ternary operator for concise conditional expressions.