// Day 9: DOM Manipulation
// Tasks/Activities:
// Activity 1: Selecting and Manipulating Elements

// Task 1: Select an HTML element by its ID and change its text content.

const element = document.getElementById('heading');

element.textContent = 'Hello, World!';

// Task 2: Select an HTML element by its class and change its background color.

const elements = document.getElementsByClassName('container');

for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = 'lightblue';
}

const element1 = document.querySelector('.container');

element1.style.backgroundColor = 'lightblue';

// ** difference between getElementById and querySelector
// *? getElementById is a method that returns an element object representing the element whose id property matches the specified string. If no elements with the specified id exist, it returns null.
// *? querySelector is a method that returns the first element within the document that matches the specified selector, or group of selectors. If no matches are found, it returns null.
// *? querySelector is more versatile as it allows you to select elements using CSS selectors, while getElementById is limited to selecting elements by their id attribute.

// Activity 2: Creating and Appending Elements

// Task 3: Create a new div element with some text content and append it to the body.

const div = document.createElement('div');
div.textContent = 'This is a new div element.';

document.body.appendChild(div);

// Task 4: Create a new li element and add it to an existing ul list.

const li = document.createElement('li');
li.textContent = 'New List Item';

const ul = document.querySelector('ul');
ul.appendChild(li);

// Activity 3: Removing Elements

// Task 5: Select an HTML element and remove it from the DOM.

const element2 = document.getElementById('heading');

element2.remove();

// Task 6: Remove the last child of a specific HTML element.

const ul1 = document.querySelector('ul');
ul1.lastElementChild.remove();

// ** difference between remove and removeChild
// *? remove is a method that removes the selected element from the DOM. It is called directly on the element itself.
// *? removeChild is a method that removes a specified child element from the parent element. It is called on the parent element and requires the child element as an argument.

// Activity 4: Modifying Attributes and Classes

// Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).

const image = document.querySelector('img');

image.src = 'https://via.placeholder.com/150';
image.alt = 'Placeholder Image';

// use setAttribute to set the src attribute of an image element

image.setAttribute('src', 'https://via.placeholder.com/150');
image.setAttribute('alt', 'Placeholder Image');

// ** difference between setting attributes and properties
// *? When setting attributes using setAttribute, the attribute value is always a string. This can be useful when working with custom attributes or attributes that are not directly accessible as properties.
// *? When setting properties directly, the value can be of different types depending on the property. For example, setting the src property of an image element requires a string value representing the image URL.

// Task 8: Add and remove a CSS class to/from an HTML element.

const element3 = document.querySelector('p');

element3.classList.add('highlight');
element3.classList.remove('highlight');

// ** what is a classList?
// *? The classList property of an element returns a DOMTokenList collection of the class attributes of the element. It provides methods to add, remove, toggle, and check for the presence of classes on the element.

// use the check and toggle method
element3.classList.contains('highlight'); // returns true or false
element3.classList.toggle('highlight'); // adds or removes the class based on its presence

// ** difference between classList.add and classList.remove
// *? classList.add is a method that adds one or more classes to an element. If the class already exists, it will not be added again.
// *? classList.remove is a method that removes one or more classes from an element. If the class does not exist, it will not throw an error.

// ** what is a css class?
// *? A CSS class is a way to apply a set of styles to one or more HTML elements. Classes are defined in CSS using the .class-name syntax and can be applied to elements using the class attribute.

// Activity 5: Event Handling

// Task 9: Add a click event listener to a button that changes the text content of a paragraph.

const button = document.querySelector('button');
const paragraph = document.querySelector('p');

button.addEventListener('click', () => {
    paragraph.textContent = 'Button clicked!';
});

// how can i toggle the text content of the paragraph on each click?
let clicked = false;

button.addEventListener('click', () => {
    if (clicked) {
        paragraph.textContent = 'Button clicked!';
    } else {
        paragraph.textContent = 'Button not clicked!';
    }
    clicked = !clicked;
});

// ** difference between addEventListener and onclick
// *? addEventListener is a method that allows you to attach event listeners to HTML elements. It can be used to add multiple event listeners to the same element and provides more flexibility in handling events.
// *? onclick is an HTML attribute that can be added directly to an element in the markup. It is limited to handling click events and can only have one onclick attribute per element.


// Task 10: Add a mouseover event listener to an element that changes its border color.

const div1 = document.querySelector('div');

div1.addEventListener('mouseover', () => {
    div1.style.borderColor = 'red';
});

// Feature Request:
// Text Content Manipulation Script: Write a script that selects an HTML element by its ID and changes its text content.
// Element Creation Script: Create a script that demonstrates creating a new div element and appending it to the body.
// Element Removal Script: Write a script that selects an HTML element and removes it from the DOM.
// Attribute Modification Script: Create a script that changes the attributes of an HTML element.
// Event Handling Script: Write a script that adds event listeners to HTML elements to change their content or style based on user interactions.
// Achievement:
// By the end of these activities, students will:

// Select and manipulate DOM elements using JavaScript.
// Create and append new elements to the DOM.
// Remove elements from the DOM.
// Modify attributes and classes of HTML elements.
// Add and handle events to make web pages interactive.