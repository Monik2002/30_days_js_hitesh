// Day 23: LeetCode Hard
// Tasks/Activities:
// Activity 1: Median of Two Sorted Arrays

// Task 1: Solve the "Median of Two Sorted Arrays" problem on LeetCode.
// Write a function that takes two sorted arrays of integers and returns the median of the two sorted arrays.
// Log the median for a few test cases, including edge cases.

function findMedianSortedArrays(nums1, nums2) {
    const merged = [...nums1, ...nums2].sort((a, b) => a - b);
    const length = merged.length;
    if (length % 2 === 0) {
        return (merged[length / 2 - 1] + merged[length / 2]) / 2;
    } else {
        return merged[Math.floor(length / 2)];
    }
}

// Test cases
console.log(findMedianSortedArrays([1, 3], [2])); // Output: 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // Output: 2.5

// Activity 2: Merge k Sorted Lists

// Task 2: Solve the "Merge k Sorted Lists" problem on LeetCode.
// Write a function that takes an array of k linked lists, each linked list is sorted in ascending order, and merges all the linked lists into one sorted linked list.
// Create a few test cases with linked lists and log the merged list.

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

// Function to merge k sorted lists
function mergeKLists(lists) {
    let merged = [];
    for (let list of lists) {
        while (list) {
            merged.push(list.val);
            list = list.next;
        }
    }
    merged.sort((a, b) => a - b);
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    for (let val of merged) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummyHead.next;
}

// Test cases
let l1 = new ListNode(1, new ListNode(4, new ListNode(5)));
let l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
let l3 = new ListNode(2, new ListNode(6));

console.log(mergeKLists([l1, l2, l3])); // Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6

// Activity 3: Trapping Rain Water

// Task 3: Solve the "Trapping Rain Water" problem on LeetCode.
// Write a function that takes an array of non-negative integers representing an elevation map where the width of each bar is 1, and computes how much water it can trap after raining.
// Log the amount of trapped water for a few test cases.

function trap(height) {
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let trapped = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                trapped += leftMax - height[left];
            }
            left++;
        }
        else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                trapped += rightMax - height[right];
            }
            right--;
        }
    }
    return trapped;
}

// Test cases
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // Output: 6
console.log(trap([4, 2, 0, 3, 2, 5])); // Output: 9

// Activity 4: N-Queens

// Task 4: Solve the "N-Queens" problem on LeetCode.
// Write a function that places n queens on an n×n chessboard such that no two queens attack each other, and returns all distinct solutions to the n-queens puzzle.
// Log the distinct solutions for a few test cases.

function solveNQueens(n) {
    const result = [];
    const board = Array.from({ length: n }, () => Array(n).fill('.'));
    const cols = new Set();
    const diag1 = new Set();
    const diag2 = new Set();

    const backtrack = (r) => {
        if (r === n) {
            result.push(board.map(row => row.join('')));
            return;
        }
        for (let c = 0; c < n; c++) {
            if (cols.has(c) || diag1.has(r + c) || diag2.has(r - c)) continue;
            cols.add(c);
            diag1.add(r + c);
            diag2.add(r - c);
            board[r][c] = 'Q';
            backtrack(r + 1);
            board[r][c] = '.';
            cols.delete(c);
            diag1.delete(r + c);
            diag2.delete(r - c);
        }
    };

    backtrack(0);
    return result;
}

// Test cases
console.log(solveNQueens(4)); // Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
console.log(solveNQueens(1)); // Output: [["Q"]]
console.log(solveNQueens(2)); // Output: []

// Activity 5: Word Ladder

// Task 5: Solve the "Word Ladder" problem on LeetCode.
// Write a function that takes a begin word, an end word, and a dictionary of words, and finds the length of the shortest transformation sequence from the begin word to the end word, such that only one letter can be changed at a time and each transformed word must exist in the word list.
// Log the length of the shortest transformation sequence for a few test cases.

function ladderLength(beginWord, endWord, wordList) {
    const dict = new Set(wordList);
    if (!dict.has(endWord)) return 0;

    let level = 1;
    let queue = [beginWord];
    const visited = new Set([beginWord]);

    while (queue.length) {
        const next = [];
        for (const word of queue) {
            if (word === endWord) return level;
            for (let i = 0; i < word.length; i++) {
                for (let j = 0; j < 26; j++) {
                    const newWord = word.slice(0, i) + String.fromCharCode(97 + j) + word.slice(i + 1);
                    if (dict.has(newWord) && !visited.has(newWord)) {
                        visited.add(newWord);
                        next.push(newWord);
                    }
                }
            }
        }
        queue = next;
        level++;
    }

    return 0;
}

// Test cases
console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])); // Output: 5
console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"])); // Output: 0

// Feature Request:
// Median of Two Sorted Arrays Script: Write a script that includes a function to find the median of two sorted arrays and logs the median.
// Merge k Sorted Lists Script: Create a script that includes a function to merge k sorted linked lists and logs the merged list.
// Trapping Rain Water Script: Write a script that includes a function to calculate the amount of trapped rainwater and logs the result.
// N-Queens Script: Create a script that includes a function to solve the N-Queens problem and logs the distinct solutions.
// Word Ladder Script: Write a script that includes a function to find the shortest transformation sequence in a word ladder and logs the sequence length.
// Achievement:
// By the end of these activities, students will:

// Solve complex LeetCode problems.
// Apply advanced problem-solving skills to implement efficient algorithms.
// Understand and handle edge cases in hard algorithmic solutions.
// Gain confidence in solving hard-level coding challenges on LeetCode.