// Day 10: Event Handling
// Tasks/Activities:
// Activity 1: Basic Event Handling

// Task 1: Add a click event listener to a button that changes the text content of a paragraph.

const button = document.querySelector('button');
const paragraph = document.querySelector('p');

button.addEventListener('click', () => {
    paragraph.textContent = 'Button clicked!';
});

// Task 2: Add a double-click event listener to an image that toggles its visibility.

const image = document.querySelector('img');

image.addEventListener('dblclick', () => {
    image.classList.toggle('hidden');
});

// Activity 2: Mouse Events

// Task 3: Add a mouseover event listener to an element that changes its background color.

const div1 = document.querySelector('div');

div1.addEventListener('mouseover', () => {
    div1.style.backgroundColor = 'lightblue';
});

// Task 4: Add a mouseout event listener to an element that resets its background color.

div1.addEventListener('mouseout', () => {
    div1.style.backgroundColor = '';
});

// Activity 3: Keyboard Events

// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.

const input = document.querySelector('input');

input.addEventListener('keydown', (event) => {
    console.log(event.key);
});

// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.

const paragraph2 = document.querySelector('p:nth-of-type(2)');

input.addEventListener('keyup', () => {
    paragraph2.textContent = input.value;
});

// ** What is p:nth-of-type(2)?
// *? The p:nth-of-type(2) selector targets the second paragraph element on the page. It uses the nth-of-type pseudo-class to select elements based on their position within a parent element.

// Activity 4: Form Events

// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(new FormData(form));
});

// ** What is new FormData(form)?
// *? The new FormData(form) constructor creates a FormData object from a form element. It collects form data in key-value pairs and can be used to send form data via XMLHttpRequest or fetch.

// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.

const select = document.querySelector('select');
const paragraph3 = document.querySelector('p:nth-of-type(3)');

select.addEventListener('change', () => {
    paragraph3.textContent = select.value;
});

// Activity 5: Event Delegation

// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.

const ul2 = document.querySelector('ul:nth-of-type(2)');
const paragraph4 = document.querySelector('p:nth-of-type(4)');

ul2.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        paragraph4.textContent = event.target.textContent;
    }
});

// ** What is event delegation?
// *? Event delegation is a technique where a single event listener is attached to a parent element to manage events for multiple child elements. It simplifies event handling for dynamically added elements and improves performance by reducing the number of event listeners.

// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.

const ul3 = document.querySelector('ul:nth-of-type(3)');
const paragraph5 = document.querySelector('p:nth-of-type(5)');
let count = 1;

ul3.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const li = document.createElement('li');
        li.textContent = `Item ${count++}`;
        ul3.appendChild(li);
    }
});

// ** How does the event delegation work in this example?
// *? The event delegation works by attaching a click event listener to the parent ul element. When a button is clicked inside the ul, the event bubbles up to the ul, which then checks if the target element is a button. If it is, a new list item is created and appended to the ul.

// Feature Request:
// Click Event Script: Write a script that adds a click event listener to a button to change the text content of a paragraph.
// Mouse Events Script: Create a script that handles mouseover and mouseout events to change the background color of an element.
// Keyboard Events Script: Write a script that logs key presses and displays input field values using keydown and keyup event listeners.
// Form Events Script: Create a script that handles form submission and change events on a select dropdown.
// Event Delegation Script: Write a script that demonstrates event delegation by handling events on dynamically added child elements.
// Achievement:
// By the end of these activities, students will:

// Add and handle basic events like click, double-click, mouseover, mouseout, keydown, and keyup.
// Understand and handle form events.
// Implement event delegation to manage events on dynamically added elements.
// Make web pages interactive by responding to various user actions.