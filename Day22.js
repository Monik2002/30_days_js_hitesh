// Day 22: LeetCode Medium
// Tasks/Activities:
// Activity 1: Add Two Numbers

// Task 1: Solve the "Add Two Numbers" problem on LeetCode.
// Write a function that takes two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each node contains a single digit. Add the two numbers and return the sum as a linked list.
// Create a few test cases with linked lists and log the sum as a linked list.

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

// Function to add two numbers as linked lists
function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode(0);
    let p = l1, q = l2, current = dummyHead;
    let carry = 0;
    while (p !== null || q !== null) {
        let x = p !== null ? p.val : 0;
        let y = q !== null ? q.val : 0;
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        if (p !== null) p = p.next;
        if (q !== null) q = q.next;
    }
    if (carry > 0) {
        current.next = new ListNode(carry);
    }
    return dummyHead.next;
}

// Test cases
let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

console.log(addTwoNumbers(l1, l2)); // Output: 7 -> 0 -> 8

// Activity 2: Longest Substring Without Repeating Characters

// Task 2: Solve the "Longest Substring Without Repeating Characters" problem on LeetCode.
// Write a function that takes a string and returns the length of the longest substring without repeating characters.
// Log the length for a few test cases, including edge cases.

function lengthOfLongestSubstring(s) {
    let n = s.length;
    let set = new Set();
    let ans = 0, i = 0, j = 0;
    while (i < n && j < n) {
        if (!set.has(s[j])) {
            set.add(s[j++]);
            ans = Math.max(ans, j - i);
        } else {
            set.delete(s[i++]);
        }
    }
    return ans;
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1

// Activity 3: Container With Most Water

// Task 3: Solve the "Container With Most Water" problem on LeetCode.
// Write a function that takes an array of non-negative integers where each integer represents the height of a line drawn at each point. Find two lines that together with the x-axis form a container, such that the container holds the most water.
// Log the maximum amount of water for a few test cases.

function maxArea(height) {
    let max = 0, i = 0, j = height.length - 1;
    while (i < j) {
        max = Math.max(max, Math.min(height[i], height[j]) * (j - i));
        if (height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
    }
    return max;
}

// Test cases
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Output: 49
console.log(maxArea([1, 1])); // Output: 1

// Activity 4: 3Sum

// Task 4: Solve the "3Sum" problem on LeetCode.
// Write a function that takes an array of integers and finds all unique triplets in the array which give the sum of zero.
// Log the triplets for a few test cases, including edge cases.

function threeSum(nums) {
    let res = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
            let lo = i + 1, hi = nums.length - 1, sum = 0 - nums[i];
            while (lo < hi) {
                if (nums[lo] + nums[hi] === sum) {
                    res.push([nums[i], nums[lo], nums[hi]]);
                    while (lo < hi && nums[lo] === nums[lo + 1]) lo++;
                    while (lo < hi && nums[hi] === nums[hi - 1]) hi--;
                    lo++; hi--;
                } else if (nums[lo] + nums[hi] < sum) {
                    lo++;
                } else {
                    hi--;
                }
            }
        }
    }
    return res;
}

// Test cases
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // Output: [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([])); // Output: []

// Activity 5: Group Anagrams

// Task 5: Solve the "Group Anagrams" problem on LeetCode.
// Write a function that takes an array of strings and groups anagrams together.
// Log the grouped anagrams for a few test cases.

function groupAnagrams(strs) {
    let map = new Map();
    for (let str of strs) {
        let key = [...str].sort().join('');
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(str);
    }
    return Array.from(map.values());
}

// Test cases
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
console.log(groupAnagrams([""]));
// Output: [[""]]

// Feature Request:
// Add Two Numbers Script: Write a script that includes a function to solve the "Add Two Numbers" problem and logs the sum as a linked list.
// Longest Substring Script: Create a script that includes a function to find the longest substring without repeating characters and logs the length.
// Container With Most Water Script: Write a script that includes a function to find the container with the most water and logs the maximum amount of water.
// 3Sum Script: Create a script that includes a function to find all unique triplets in an array that sum to zero and logs the triplets.
// Group Anagrams Script: Write a script that includes a function to group anagrams and logs the grouped anagrams.
// Achievement:
// By the end of these activities, students will:

// Solve common medium-level LeetCode problems.
// Apply advanced problem-solving skills to implement algorithms.
// Understand and handle edge cases in more complex algorithmic solutions.
// Gain confidence in solving medium-level coding challenges on LeetCode.