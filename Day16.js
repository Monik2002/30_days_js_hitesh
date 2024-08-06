// Day 16: Recursion
// Tasks/Activities:
// Activity 1: Basic Recursion

// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
console.log(factorial(10)); // 3628800

// Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5)); // 5
console.log(fibonacci(10)); // 55

// Activity 2: Recursion with Arrays

// Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.

function sumArray(arr, n) {
    if (n <= 0) {
        return 0;
    }
    return sumArray(arr, n - 1) + arr[n - 1];
}

console.log(sumArray([1, 2, 3, 4, 5], 5)); // 15

// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.

function maxArray(arr, n) {
    if (n === 1) {
        return arr[0];
    }
    return Math.max(arr[n - 1], maxArray(arr, n - 1));
}

console.log(maxArray([3, 7, 2, 8, 5], 5)); // 8

// Activity 3: String Manipulation with Recursion

// Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.

function reverseString(str) {
    if (str === "") {
        return "";
    }
    return reverseString(str.substr(1)) + str.charAt(0);
}

console.log(reverseString("hello")); // "olleh"


// Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.

function isPalindrome(str) {
    if (str.length <= 1) {
        return true;
    }
    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    return isPalindrome(str.substr(1, str.length - 2));
}

console.log(isPalindrome("racecar")); // true

// Activity 4: Recursive Search

// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.

function binarySearch(arr, target, low, high) {
    if (low > high) {
        return -1;
    }
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
        return mid;
    }
    if (arr[mid] > target) {
        return binarySearch(arr, target, low, mid - 1);
    }
    return binarySearch(arr, target, mid + 1, high);
}

const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
console.log(binarySearch(sortedArray, 7, 0, sortedArray.length - 1)); // 3


// Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.

function countOccurrences(arr, target, n) {
    if (n === 0) {
        return 0;
    }
    return (arr[n - 1] === target ? 1 : 0) + countOccurrences(arr, target, n - 1);
}

console.log(countOccurrences([1, 2, 3, 2, 2, 4, 2], 2, 7)); // 4

// Activity 5: Tree Traversal (Optional)

// Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function inOrderTraversal(node) {
    if (node !== null) {
        inOrderTraversal(node.left);
        console.log(node.value);
        inOrderTraversal(node.right);
    }
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

inOrderTraversal(root);

// Output:
// 4
// 2
// 5
// 1
// 3

// Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.

function maxDepth(node) {
    if (node === null) {
        return 0;
    }
    const leftDepth = maxDepth(node.left);
    const rightDepth = maxDepth(node.right);
    return 1 + Math.max(leftDepth, rightDepth);
}

console.log(maxDepth(root)); // 3

// Output:
// 4
// 2
// 5
// 1
// 3

// Feature Request:
// Factorial and Fibonacci Script: Write a script that includes recursive functions to calculate the factorial and Fibonacci numbers.
// Array Recursion Script: Create a script that includes recursive functions to find the sum and maximum element of an array.
// String Recursion Script: Write a script that includes recursive functions to reverse a string and check if a string is a palindrome.
// Recursive Search Script: Create a script that includes recursive functions for binary search and counting occurrences in an array.
// Tree Traversal Script: Write a script that includes recursive functions for in-order traversal and depth calculation of a binary tree (optional).
// Achievement:
// By the end of these activities, students will:

// Understand and implement basic recursion.
// Apply recursion to solve problems with arrays and strings.
// Use recursion for searching and counting elements in arrays.
// Perform tree traversal and calculate tree depth using recursion (optional).

// done