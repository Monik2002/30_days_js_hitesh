// Day 21: LeetCode Easy
// Tasks/Activities:
// Activity 1: Two Sum

// Task 1: Solve the "Two Sum" problem on LeetCode.
// Write a function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target.

function twoSum(nums , target) {    
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }

    return [];
}


// Log the indices for a few test cases.
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // [0, 1]

// ** How it works:
// ?? The function twoSum takes an array of numbers and a target number as input.
// ?? It creates a new Map to store the numbers and their indices.
// ?? It iterates over the array and calculates the complement (target - current number).
// ?? If the complement is found in the map, it returns the indices of the two numbers.
// ?? Otherwise, it adds the current number and its index to the map.
// ?? The function returns the indices of the two numbers that add up to the target.

// Activity 2: Reverse Integer

// Task 2: Solve the "Reverse Integer" problem on LeetCode.
// Write a function that takes an integer and returns it with its digits reversed.
// Handle edge cases like negative numbers and numbers ending in zero.
// Log the reversed integers for a few test cases.

function reverseInteger(num) {

    if(num >= 0 || num <= 9){
        return num;
    }

    const reverseNum = 0;

    while(num !== 0){
        reverseNum = reverseNum * 10 + (num % 10);
        num = Math.floor(num / 10);
    }

    return reverseNum;

}

console.log(reverseInteger(123)); // 321
console.log(reverseInteger(-123)); // -321

// reverse a string 

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('hello')); // olleh

// Activity 3: Palindrome Number

// Task 3: Solve the "Palindrome Number" problem on LeetCode.
// Write a function that takes an integer and returns true if it is a palindrome, and false otherwise.
// Log the result for a few test cases, including edge cases like negative numbers.
function isPalindrome(num) {
    if(num < 0){
        return false;
    }

    if(num >= 0 || num <= 9){
        return 1;
    }

    const reverseNum = 0;
    let originalNum = num;

    while(num !== 0){
        reverseNum = reverseNum * 10 + (num % 10);
        num = Math.floor(num / 10);
    }

    return originalNum === reverseNum;
}

console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false

// Activity 4: Merge Two Sorted Lists

// Task 4: Solve the "Merge Two Sorted Lists" problem on LeetCode.
// Write a function that takes two sorted linked lists and returns a new sorted list by merging them.
// Create a few test cases with linked lists and log the merged list.

function mergeArrays(arr1 , arr2){
    const mergedArray = [...arr1, ...arr2];
    return mergedArray.sort((a, b) => a - b);
}

const list1 = [1, 2, 4];
const list2 = [1, 3, 4];

console.log(mergeArrays(list1, list2)); // [1, 1, 2, 3, 4, 4]

// Activity 5: Valid Parentheses

// Task 5: Solve the "Valid Parentheses" problem on LeetCode.
// Write a function that takes a string containing just the characters '(', ')', '{', '}', '[' and ']', and determines if the input string is valid.
// A string is valid if open brackets are closed in the correct order.
// Log the result for a few test cases.

function isValidParentheses(str) {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of str) {
        if (map[char]) {
            stack.push(char);
        } else {
            const last = stack.pop();
            if (char !== map[last]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(isValidParentheses('()')); // true
console.log(isValidParentheses('()[]{}')); // true
console.log(isValidParentheses('(]')); // false

// Feature Request:
// Two Sum Script: Write a script that includes a function to solve the "Two Sum" problem and logs the indices of the two numbers.
// Reverse Integer Script: Create a script that includes a function to reverse an integer and handles edge cases.
// Palindrome Number Script: Write a script that includes a function to check if an integer is a palindrome and logs the result.
// Merge Two Sorted Lists Script: Create a script that includes a function to merge two sorted linked lists and logs the merged list.
// Valid Parentheses Script: Write a script that includes a function to check if a string of parentheses is valid and logs the result.
// Achievement:
// By the end of these activities, students will:

// Solve common LeetCode problems.
// Apply problem-solving skills to implement algorithms.
// Understand and handle edge cases in algorithmic solutions.
// Gain confidence in solving easy-level coding challenges on LeetCode.
