// Day 3: Control Structures
// Tasks/Activities:
// Activity 1: If-Else Statements

// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.

function checkNumber(number) {
    if (number > 0) {
        console.log(`${number} is positive.`);
    } else if (number < 0) {
        console.log(`${number} is negative.`);
    } else {
        console.log(`${number} is zero.`);
    }
}

checkNumber(5); // Output: 5 is positive.

// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

function checkVotingEligibility(age) {
    if (age >= 18) {
        console.log("You are eligible to vote.");
    } else {
        console.log("You are not eligible to vote.");
    }
}

checkVotingEligibility(20); // Output: You are eligible to vote.

// Activity 2: Nested If-Else Statements

// Task 3: Write a program to find the largest of three numbers using nested if-else statements.

function findLargestNumber(num1, num2, num3) {
    if (num1 >= num2) {
        if (num1 >= num3) {
            console.log(`${num1} is the largest number.`);
        } else {
            console.log(`${num3} is the largest number.`);
        }
    } else {
        if (num2 >= num3) {
            console.log(`${num2} is the largest number.`);
        } else {
            console.log(`${num3} is the largest number.`);
        }
    }
}

findLargestNumber(10, 20, 15); // Output: 20 is the largest number.

// Activity 3: Switch Case

// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

function getDayName(dayNumber) {
    switch (dayNumber) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("Invalid day number.");
    }
}

getDayName(3); // Output: Tuesday

// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

function getGrade(score) {
    let grade;
    switch (true) {
        case score >= 90:
            grade = 'A';
            break;
        case score >= 80:
            grade = 'B';
            break;
        case score >= 70:
            grade = 'C';
            break;
        case score >= 60:
            grade = 'D';
            break;
        default:
            grade = 'F';
    }
    console.log(`Your grade is: ${grade}`);
}

getGrade(85); // Output: Your grade is: B

// Activity 4: Conditional (Ternary) Operator

// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
// Activity 5: Combining Conditions

// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

function checkLeapYear(year) { 
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(`${year} is a leap year.`);
    } else {
        console.log(`${year} is not a leap year.`);
    }
}

checkLeapYear(2020); // Output: 2020 is a leap year.

// Feature Request:
// Number Check Script: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.
// Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result.
// Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.
// Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the grade.
// Leap Year Check Script: Write a script that checks if a year is a leap year using multiple conditions and logs the result.
// Achievement:
// By the end of these activities, students will:

// Implement and understand basic if-else control flow.
// Use nested if-else statements to handle multiple conditions.
// Utilize switch cases for control flow based on specific values.
// Apply the ternary operator for concise condition checking.
// Combine multiple conditions to solve more complex problems.

// done