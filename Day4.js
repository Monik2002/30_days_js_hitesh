// Day 4: Loops
// Tasks/Activities:
// Activity 1: For Loop

// Task 1: Write a program to print numbers from 1 to 10 using a for loop.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Task 2: Write a program to print the multiplication table of 5 using a for loop.

for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// Activity 2: While Loop

// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.

let sum = 0;
let i = 1;

while (i <= 10) {
    sum += i;
    i++;
}

console.log(`The sum of numbers from 1 to 10 is: ${sum}`);

// Task 4: Write a program to print numbers from 10 to 1 using a while loop.

let j = 10;

while (j >= 1) {
    console.log(j);
    j--;
}

// Activity 3: Do...While Loop

// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.

let k = 1;

do {
    console.log(k);
    k++;
} while (k <= 5);

// Task 6: Write a program to calculate the factorial of a number using a do...while loop.

function calculateFactorial(number) {
    let factorial = 1;
    let n = number;

    do {
        factorial *= n;
        n--;
    } while (n >= 1);

    return factorial;
}

// Activity 4: Nested Loops

// Task 7: Write a program to print a pattern using nested for loops:

// *
// * *
// * * *
// * * * *

for (let row = 1; row <= 4; row++) {
    let pattern = "";
    for (let col = 1; col <= row; col++) {
        pattern += "* ";
    }
    console.log(pattern);
}

// Task 8: Write a program to print the following pattern using nested for loops:

// 1
// 1 2
// 1 2 3
// 1 2 3 4

for (let row = 1; row <= 4; row++) {
    let pattern = "";
    for (let col = 1; col <= row; col++) {
        pattern += `${col} `;
    }
    console.log(pattern);
}


// Activity 5: Loop Control Statements

// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.

for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    console.log(i);
}

// Feature Request:
// Number Printing Script: Write a script that prints numbers from 1 to 10 using a for loop and a while loop.
// Multiplication Table Script: Create a script that prints the multiplication table of 5 using a for loop.
// Pattern Printing Script: Write a script that prints a pattern of stars using nested loops.
// Sum Calculation Script: Write a script that calculates the sum of numbers from 1 to 10 using a while loop.
// Factorial Calculation Script: Create a script that calculates the factorial of a number using a do...while loop.
// Achievement:
// By the end of these activities, students will:

// Understand and use for loops to iterate over a sequence of numbers.
// Utilize while loops for iteration based on a condition.
// Apply do...while loops to ensure the loop body is executed at least once.
// Implement nested loops to solve more complex problems.
// Use loop control statements (break and continue) to control the flow of loops.