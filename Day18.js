// Day 18: Algorithms
// Tasks/Activities:
// Activity 1: Sorting Algorithms

const numbers = [5, 3, 8, 4, 2];

// Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.

// ** Bubble Sort Algorithm
// **? Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the
// list is repeated until no swaps are needed, which indicates that the list is sorted.

// Pseudocode:
// 1. Set the swapped flag to true.
// 2. Repeat until the swapped flag is false:
//    a. Set the swapped flag to false.
//    b. For each element in the array from index 0 to length - 2:
//       i. If the current element is greater than the next element:
//          1. Swap the current element with the next element.
//          2. Set the swapped flag to true.
// 3. Return the sorted array.

function bubbleSort(arr) {
    let swapped = true;
    while (swapped) {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
    }
    return arr;
}

console.time('bubbleSort');
console.log(bubbleSort(numbers)); // [2, 3, 4, 5, 8]
console.timeEnd('bubbleSort');

// Time Complexity: O(n^2) - Quadratic
// Space Complexity: O(1) - Constant

// but we have only one for loop in bubble sort then how is it O(n^2) - Quadratic?


// ** How It Works:
// **? The bubbleSort function takes an array of numbers as input and sorts the array in ascending order using the bubble sort algorithm. The function initializes a swapped flag to true to indicate that a swap has occurred. It then enters a while loop that continues until no swaps are needed (swapped flag is false). Within the loop, the function iterates through the array and compares adjacent elements. If the current element is greater than the next element, it swaps the elements and sets the swapped flag to true. This process continues until the array is sorted, and the function returns the sorted array.

// Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.

// ** Selection Sort Algorithm
// **? Selection sort is a simple sorting algorithm that divides the input list into two parts: the sublist of items already sorted and the sublist of items remaining to be sorted. The algorithm repeatedly finds the minimum element from the unsorted part and swaps it with the first unsorted element.

// Pseudocode:
// 1. For each index i from 0 to length - 1:
//    a. Set the minIndex to i.
//    b. For each index j from i + 1 to length:
//       i. If the element at index j is less than the element at minIndex:
//          1. Set minIndex to j.
//    c. Swap the elements at index i and minIndex.
// 2. Return the sorted array.

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}

console.time('selectionSort');
console.log(selectionSort(numbers)); // [2, 3, 4, 5, 8]
console.timeEnd('selectionSort');

// Time Complexity: O(n^2) - Quadratic
// Space Complexity: O(1) - Constant

// Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array.

// ** Quicksort Algorithm
// **? Quicksort is a divide-and-conquer algorithm that works by selecting a pivot element and partitioning the array into two subarrays according to the pivot. The subarrays are then recursively sorted.

// Pseudocode:
// 1. If the array length is less than or equal to 1, return the array.
// 2. Select a pivot element from the array.
// 3. Partition the array into two subarrays:
//    a. Elements less than the pivot.
//    b. Elements greater than or equal to the pivot.
// 4. Recursively apply quicksort to the subarrays.
// 5. Concatenate the sorted subarrays with the pivot element.
// 6. Return the sorted array.

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

// non-recursive version of quicksort

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const stack = [[0, arr.length - 1]];

    while (stack.length) {
        const [low, high] = stack.pop();
        if (low < high) {
            const pivot = arr[high];
            let i = low - 1;
            for (let j = low; j < high; j++) {
                if (arr[j] < pivot) {
                    i++;
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                }
            }
            [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
            stack.push([low, i]);
            stack.push([i + 2, high]);
        }
    }

    return arr;
}

console.time('quickSort');
console.log(quickSort(numbers)); // [2, 3, 4, 5, 8]
console.timeEnd('quickSort');

// Time Complexity: O(n log n) - Average Case, O(n^2) - Worst Case
// Space Complexity: O(log n) - Average Case, O(n) - Worst Case

// ** How It Works step by step:
// **? The quickSort function takes an array of numbers as input and sorts the array in ascending order using the quicksort algorithm. The function first checks if the array length is less than or equal to 1 and returns the array if true. It then selects the pivot element (first element in this case) and creates two subarrays: left (elements less than the pivot) and right (elements greater than or equal to the pivot). The function recursively applies quicksort to the subarrays and concatenates the sorted subarrays with the pivot element. The sorted array is then returned.

// **? The non-recursive version of quicksort uses a stack to keep track of the subarrays that need to be sorted. The stack initially contains the indices of the entire array. The algorithm continues until the stack is empty, popping the top subarray indices and partitioning the subarray based on the pivot element. The partitioning process involves swapping elements to ensure that elements less than the pivot are on the left and elements greater than the pivot are on the right. The subarrays are then pushed back onto the stack for further processing. This process continues until all subarrays are sorted, and the sorted array is returned.

// Activity 2: Searching Algorithms

// Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.

// ** Linear Search Algorithm
// **? Linear search is a simple search algorithm that sequentially checks each element in a list until a match is found or the whole list has been searched.

// Pseudocode:
// 1. For each element in the array:
//    a. If the element is equal to the target value, return the index.
// 2. If the target value is not found, return -1.

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

const target = 4;
console.time('linearSearch');
console.log(linearSearch(numbers, target)); // 3
console.timeEnd('linearSearch');

// Time Complexity: O(n) - Linear
// Space Complexity: O(1) - Constant

// Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.

// ** Binary Search Algorithm
// **? Binary search is a search algorithm that finds the position of a target value within a sorted array by repeatedly dividing the search interval in half.

// Pseudocode:
// 1. Set the low index to 0 and the high index to the length of the array - 1.
// 2. Repeat until the low index is less than or equal to the high index:
//    a. Calculate the mid index as the average of the low and high indices.
//    b. If the element at the mid index is equal to the target value, return the mid index.
//    c. If the element at the mid index is less than the target value, set the low index to mid + 1.
//    d. If the element at the mid index is greater than the target value, set the high index to mid - 1.
// 3. If the target value is not found, return -1.

function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
}

const sortedNumbers = [2, 3, 4, 5, 8];
// const target = 4;

console.time('binarySearch');
console.log(binarySearch(sortedNumbers, target)); // 2
console.timeEnd('binarySearch');

// Time Complexity: O(log n) - Logarithmic
// Space Complexity: O(1) - Constant

// ** How It Works:
// **? The binarySearch function takes a sorted array of numbers and a target value as input and searches for the target value using the binary search algorithm. The function initializes the low index to 0 and the high index to the length of the array minus 1. It then enters a loop that continues until the low index is less than or equal to the high index. Within the loop, the function calculates the mid index as the average of the low and high indices. If the element at the mid index is equal to the target value, the function returns the mid index. If the element at the mid index is less than the target value, the low index is updated to mid + 1. If the element at the mid index is greater than the target value, the high index is updated to mid - 1. This process continues until the target value is found or the low index exceeds the high index. If the target value is not found, the function returns -1.

// **? The binary search algorithm is more efficient than linear search for sorted arrays because it reduces the search interval by half at each step. This results in a time complexity of O(log n) compared to O(n) for linear search.

// Activity 3: String Algorithms

// Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.

// ** Character Count Algorithm

// Pseudocode:
// 1. Initialize an empty object to store character counts.
// 2. For each character in the string:
//    a. If the character is not in the object, add it with a count of 1.
//    b. If the character is already in the object, increment its count by 1.
// 3. Return the character counts object.

function countCharacters(str) {
    const charCounts = {};

    for (const char of str) {
        // charCounts[char] = (charCounts[char] || 0) + 1;
        if (charCounts[char]) {
            charCounts[char]++;
        } else {
            charCounts[char] = 1;
        }
    }

    return charCounts;
}

// 2nd way

function countCharacters(str) {
    return str.split('').reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {});
}

// 3rd way

function countCharacters(str) {
    return [...str].reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {});
}

// 4th way

function countCharacters(str) {
    return [...str].reduce((acc, char) => {
        acc[char] = acc[char] ? acc[char] + 1 : 1;
        return acc;
    }, {});
}

// 5th way

function countCharacters(str) {
    const charCounts = {};

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        charCounts[char] = (charCounts[char] || 0) + 1;
    }

    return charCounts;
}

const text = 'hello';
console.log(countCharacters(text)); // { h: 1, e: 1, l: 2, o: 1 }

// ** How It Works:
// **? The countCharacters function takes a string as input and counts the occurrences of each character in the string. The function initializes an empty object to store the character counts. It then iterates through each character in the string and updates the count in the object. If the character is not in the object, it is added with a count of 1. If the character is already in the object, its count is incremented by 1. The function returns the character counts object.

// Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.

// ** Longest Substring Without Repeating Characters Algorithm

// Pseudocode:
// 1. Initialize a start index and max length to track the current substring.
// 2. Initialize an empty object to store the last index of each character.
// 3. For each character at index i in the string:
//    a. If the character is in the object and its last index is greater than or equal to the start index:
//       i. Update the start index to the last index of the character + 1.
//    b. Update the last index of the character in the object to i.
//    c. Update the max length if the current substring length is greater.
// 4. Return the max length.

function longestSubstringWithoutRepeating(str) {
    let start = 0;
    let maxLength = 0;

    const lastIndices = {};

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char in lastIndices && lastIndices[char] >= start) {
            start = lastIndices[char] + 1;
        }
        lastIndices[char] = i;
        maxLength = Math.max(maxLength, i - start + 1);
    }

    return maxLength;
}

// using Set data structure [better approach]

function longestSubstringWithoutRepeating(str) {
    let start = 0;
    let end = 0;
    let maxLength = 0;

    const uniqueChar = new Set();

    while (end < str.length) {
        if (!uniqueChar.has(str[end])) {
            uniqueChar.add(str[end]);
            end++;
            maxLength = Math.max(maxLength, uniqueChar.size);
        } else {
            uniqueChar.delete(str[start]);
            start++;
        }
    }

    return maxLength;
}

const text1 = 'abcabcbb';
const text2 = 'bbbbb';
const text3 = 'pwwkew';

console.log(longestSubstringWithoutRepeating(text1)); // 3
console.log(longestSubstringWithoutRepeating(text2)); // 1
console.log(longestSubstringWithoutRepeating(text3)); // 3

// ** How It Works:
// **? The longestSubstringWithoutRepeating function takes a string as input and finds the length of the longest substring without repeating characters. The function initializes a start index and max length to track the current substring. It also initializes an empty object to store the last index of each character. The function iterates through each character in the string and updates the start index, last index of the character, and max length based on the current substring. If the character is already in the object and its last index is greater than or equal to the start index, the start index is updated to the last index of the character plus one. The function returns the max length of the longest substring without repeating characters.

// Activity 4: Array Algorithms

// Task 8: Write a function to rotate an array by k positions. Log the rotated array.

// ** Rotate Array Algorithm

// Pseudocode:
// 1. Reverse the entire array.
// 2. Reverse the first k elements.
// 3. Reverse the remaining elements.
// 4. Return the rotated array.

function reverseArray(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

function rotateArray(arr, k) {
    const n = arr.length;
    k %= n;

    reverseArray(arr, 0, n - 1);
    reverseArray(arr, 0, k - 1);
    reverseArray(arr, k, n - 1);

    return arr;
}

const numbers1 = [1, 2, 3, 4, 5];
const k = 2;

console.log(rotateArray(numbers1, k)); // [4, 5, 1, 2, 3]


// Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.

// ** Merge Sorted Arrays Algorithm

// Pseudocode:
// 1. Initialize an empty array to store the merged result.
// 2. Initialize two pointers for the two arrays (i and j) at the start.
// 3. Repeat while both pointers are within their respective arrays:
//    a. If the element at index i in the first array is less than or equal to the element at index j in the second array:
//       i. Add the element at index i to the merged array.
//       ii. Increment the pointer i.
//    b. Otherwise:
//       i. Add the element at index j to the merged array.
//       ii. Increment the pointer j.
// 4. Add any remaining elements from the first array to the merged array.
// 5. Add any remaining elements from the second array to the merged array.
// 6. Return the merged array.

function mergeSortedArrays(arr1, arr2) {
    const merged = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }

    return merged;
}

const sortedNumbers1 = [1, 3, 5];
const sortedNumbers2 = [2, 4, 6];

console.log(mergeSortedArrays(sortedNumbers1, sortedNumbers2)); // [1, 2, 3, 4, 5, 6]

// Activity 5: Dynamic Programming (Optional)

// Task 10: Write a function to solve the Fibonacci sequence using dynamic programming. Log the Fibonacci numbers.

// ** Fibonacci Sequence Algorithm

// Pseudocode:
// 1. Initialize an array to store the Fibonacci numbers.
// 2. Set the first two elements of the array to 0 and 1.
// 3. For each index i from 2 to n:
//    a. Calculate the Fibonacci number at index i as the sum of the previous two Fibonacci numbers.
// 4. Return the Fibonacci numbers array.

function fibonacci(n) {
    const fib = [0, 1];

    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib;
}

const n = 5;
console.log(fibonacci(n)); // [0, 1, 1, 2, 3, 5]

// Task 11: Write a function to solve the knapsack problem using dynamic programming. Log the maximum value that can be obtained.

// ** Knapsack Problem Algorithm

// Pseudocode:
// 1. Initialize a 2D array to store the maximum value that can be obtained for each item and weight combination.
// 2. Set the first row and column of the array to 0.
// 3. For each item i from 1 to n:
//    a. For each weight w from 1 to W:
//       i. If the weight of item i is less than or equal to w:
//          1. Calculate the maximum value that can be obtained by including or excluding item i.
//          2. Update the maximum value in the array.
//       ii. Otherwise, the maximum value is the same as the previous item.
// 4. Return the maximum value for the knapsack weight W.

function knapsack(values, weights, W) {
    const n = values.length;
    const dp = Array.from({ length: n + 1 }, () => Array(W + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let w = 1; w <= W; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(dp[i - 1][w], values[i - 1] + dp[i - 1][w - weights[i - 1]]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    return dp[n][W];
}

const values = [60, 100, 120];
const weights = [10, 20, 30];
const W = 50;

console.log(knapsack(values, weights, W)); // 220

// ** How It Works:
// **? The knapsack function takes arrays of values, weights, and the knapsack weight limit as input and solves the knapsack problem using dynamic programming. The function initializes a 2D array to store the maximum value that can be obtained for each item and weight combination. It sets the first row and column of the array to 0. The function then iterates through each item and weight combination, calculating the maximum value that can be obtained by including or excluding the item. The maximum value is updated in the array based on the conditions. The function returns the maximum value that can be obtained for the knapsack weight limit.

// **? The knapsack problem is a classic optimization problem where the goal is to maximize the total value of items that can be included in a knapsack without exceeding the weight limit. Dynamic programming is commonly used to solve this problem efficiently by considering the optimal substructure and overlapping subproblems.

// Feature Request:
// Sorting Algorithm Script: Write a script that implements bubble sort, selection sort, and quicksort algorithms to sort arrays.
// Searching Algorithm Script: Create a script that implements linear search and binary search algorithms to find values in arrays.
// String Algorithm Script: Write a script that counts character occurrences and finds the longest substring without repeating characters.
// Array Algorithm Script: Create a script that rotates arrays and merges sorted arrays.
// Dynamic Programming Script: Write a script that solves the Fibonacci sequence and knapsack problem using dynamic programming (optional).
// Achievement:
// By the end of these activities, students will:

// Implement and understand common sorting algorithms.
// Implement and understand common searching algorithms.
// Solve string manipulation problems using algorithms.
// Perform array operations using algorithms.
// Apply dynamic programming to solve complex problems (optional).