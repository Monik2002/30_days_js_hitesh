// Day 17: Data Structures
// Tasks/Activities:
// Activity 1: Linked List

// Task 1: Implement a Node class to represent an element in a linked list with properties value and next.

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.

class LinkedList {
    constructor() {
        this.head = null;
    }

    addNode(value) {
        const node = new Node(value);
        if (this.head === null) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
    }

    removeNode() {
        if (this.head === null) {
            return;
        }
        if (this.head.next === null) {
            this.head = null;
        } else {
            let current = this.head;
            while (current.next.next !== null) {
                current = current.next;
            }
            current.next = null;
        }
    }

    displayNodes() {
        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }
}

// Activity 2: Stack

// Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).

class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        if (this.items.length === 0) {
            return null;
        }
        return this.items.pop();
    }

    peek() {
        if (this.items.length === 0) {
            return null;
        }
        return this.items[this.items.length - 1];
    }
}

// Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.

function reverseString(str) {
    const stack = new Stack();
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }
    let reversed = "";
    while (stack.peek() !== null) {
        reversed += stack.pop();
    }
    return reversed;
}

console.log(reverseString("hello")); // "olleh"

// Activity 3: Queue

// Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element).

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        if (this.items.length === 0) {
            return null;
        }
        return this.items.shift();
    }

    front() {
        if (this.items.length === 0) {
            return null;
        }
        return this.items[0];
    }
}

// Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.

function printerQueue(jobs) {
    const queue = new Queue();
    for (let job of jobs) {
        queue.enqueue(job);
    }
    while (queue.front() !== null) {
        console.log("Printing job:", queue.dequeue());
    }
}

printerQueue(["Job 1", "Job 2", "Job 3"]);

// Activity 4: Binary Tree

// Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left, and right.

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const node = new TreeNode(value);
        if (this.root === null) {
            this.root = node;
        } else {
            this.insertNode(this.root, node);
        }
    }

    insertNode(root, node) {
        if (node.value < root.value) {
            if (root.left === null) {
                root.left = node;
            } else {
                this.insertNode(root.left, node);
            }
        } else {
            if (root.right === null) {
                root.right = node;
            } else {
                this.insertNode(root.right, node);
            }
        }
    }

    inOrderTraversal(node = this.root) {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }
}

const binaryTree = new BinaryTree();
binaryTree.insert(1);
binaryTree.insert(2);
binaryTree.insert(3);
binaryTree.insert(4);
binaryTree.insert(5);

binaryTree.inOrderTraversal();

// Output:
// 1
// 2
// 3
// 4
// 5

// Activity 5: Graph (Optional)

// Task 9: Implement a Graph class with methods to add vertices, add edges, and perform a breadth-first search (BFS).

class Graph {
    constructor() {
        this.vertices = {};
    }

    addVertex(vertex) {
        if (!this.vertices[vertex]) {
            this.vertices[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        if (this.vertices[vertex1] && this.vertices[vertex2]) {
            this.vertices[vertex1].push(vertex2);
            this.vertices[vertex2].push(vertex1);
        }
    }

    bfs(start) {
        const visited = {};
        const queue = [start];
        visited[start] = true;
        while (queue.length > 0) {
            const vertex = queue.shift();
            console.log(vertex);
            for (let neighbor of this.vertices[vertex]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
        }
    }
}

// Task 10: Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nodes.

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "D");
graph.addEdge("D", "E");
graph.addEdge("E", "A");

graph.bfs("A");

// Output:
// A
// B
// E
// C
// D

// Feature Request:
// Linked List Script: Write a script that implements a linked list with methods to add, remove, and display nodes.
// Stack Script: Create a script that implements a stack and uses it to reverse a string.
// Queue Script: Write a script that implements a queue and simulates a printer queue.
// Binary Tree Script: Create a script that implements a binary tree with insertion and in-order traversal methods.
// Graph Script: Write a script that implements a graph and performs breadth-first search (optional).
// Achievement:
// By the end of these activities, students will:

// Implement and use linked lists for dynamic data storage.
// Use stacks for LIFO (Last-In-First-Out) operations and reverse data.
// Use queues for FIFO (First-In-First-Out) operations and simulate real-world scenarios.
// Implement binary trees for hierarchical data storage and traversal.
// Understand and use graphs for network representations and pathfinding (optional).

// done