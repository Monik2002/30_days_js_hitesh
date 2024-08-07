// Day 20: LocalStorage and SessionStorage
// Tasks/Activities:
// Activity 1: Understanding LocalStorage

const key = 'name';
const value = 'John Doe';

const saveStringToLocalStorage = (key, value) => {
    localStorage.setItem(key , value);
}

const getStringFromLocalStorage = (key) => {
    return localStorage.getItem(key);
}

// Task 1: Write a script to save a string value to localStorage and retrieve it. Log the retrieved value.

saveStringToLocalStorage(key, value);

console.log(getStringFromLocalStorage(key));

// Task 2: Write a script to save an object to localStorage by converting it to a JSON string. Retrieve and parse the object, then log it.

const user = {
    name: 'John Doe',
    email: 'johndoe@gmail.com'
};

const saveObjectToLocalStorage = (key, value) => {
    localStorage.setItem(key , JSON.stringify(value));
}

const getObjectFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

saveObjectToLocalStorage(key, user);

console.log(getObjectFromLocalStorage(key));

// Activity 2: Using LocalStorage

// Task 3: Create a simple form that saves user input (e.g., name and email) to localStorage when submitted. Retrieve and display the saved data on page load.

const form = document.querySelector('form');
const nameInput = document.querySelector('#name');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = nameInput.value;
    saveStringToLocalStorage('name', name);
    nameInput.value = '';
});

window.addEventListener('load', () => {
    const savedName = getStringFromLocalStorage('name');
    if (savedName) {
        nameInput.value = savedName;
    }
});

// Task 4: Write a script to remove an item from localStorage. Log the localStorage content before and after removal.

const removeItemFromLocalStorage = (key) => {
    localStorage.removeItem(key);
}

console.log(localStorage.getItem(key)); // John Doe
removeItemFromLocalStorage(key);
console.log(localStorage.getItem(key)); // null

// Activity 3: Understanding SessionStorage

// ** Difference between LocalStorage and SessionStorage **
// **? LocalStorage: Data persists even after the browser is closed and reopened.
// **? SessionStorage: Data is cleared when the browser tab is closed.


// Task 5: Write a script to save a string value to sessionStorage and retrieve it. Log the retrieved value.

const saveStringToSessionStorage = (key, value) => {
    sessionStorage.setItem(key , value);
}

const getStringFromSessionStorage = (key) => {
    return sessionStorage.getItem(key);
}

saveStringToSessionStorage(key, value);

console.log(getStringFromSessionStorage(key));

// Task 6: Write a script to save an object to sessionStorage by converting it to a JSON string. Retrieve and parse the object, then log it.

const User = {
    name: 'Jane Doe',
    email: 'janedoe@gmail.com'
};

const saveObjectToSessionStorage = (key, value) => {
    sessionStorage.setItem(key , JSON.stringify(value));
}

const getObjectFromSessionStorage = (key) => {
    return JSON.parse(sessionStorage.getItem(key));
}

saveObjectToSessionStorage(key, User);

console.log(getObjectFromSessionStorage(key));

// Activity 4: Using SessionStorage

// Task 7: Create a simple form that saves user input (e.g., name and email) to sessionStorage when submitted. Retrieve and display the saved data on page load.

const form2 = document.querySelector('form');
const nameInput2 = document.querySelector('#name');

form2.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = nameInput2.value;
    saveStringToSessionStorage('name', name);
    nameInput2.value = '';
});

window.addEventListener('load', () => {
    const savedName = getStringFromSessionStorage('name');

    if (savedName) {
        nameInput2.value = savedName;
    }
});

// Task 8: Write a script to remove an item from sessionStorage. Log the sessionStorage content before and after removal.

const removeItemFromSessionStorage = (key) => {
    sessionStorage.removeItem(key);
}

console.log(sessionStorage.getItem(key)); // John Doe
removeItemFromSessionStorage(key);

console.log(sessionStorage.getItem(key)); // null

// Activity 5: Comparing LocalStorage and SessionStorage

// Task 9: Write a function that accepts a key and a value, and saves the value to both localStorage and sessionStorage. Retrieve and log the values from both storage mechanisms.

const saveToBothStorages = (key, value) => {
    localStorage.setItem(key , value);
    sessionStorage.setItem(key , value);
}

const getFromBothStorages = (key) => {
    return {
        localStorage: localStorage.getItem(key),
        sessionStorage: sessionStorage.getItem(key)
    };
}

saveToBothStorages(key, value);

console.log(getFromBothStorages(key));

// Task 10: Write a function that clears all data from both localStorage and sessionStorage. Verify that both storages are empty.

const clearBothStorages = () => {
    localStorage.clear();
    sessionStorage.clear();
}

clearBothStorages();

console.log(localStorage.getItem(key)); // null
console.log(sessionStorage.getItem(key)); // null

// Feature Request:
// LocalStorage Script: Write a script that saves, retrieves, and removes items from localStorage, and displays the saved data on page load.
// SessionStorage Script: Create a script that saves, retrieves, and removes items from sessionStorage, and displays the saved data on page load.
// Storage Comparison Script: Write a script that saves data to both localStorage and sessionStorage, retrieves the data, and compares the results.
// Clear Storage Script: Create a script that clears all data from both localStorage and sessionStorage, and verifies the operation.
// Achievement:
// By the end of these activities, students will:

// Understand how to use localStorage and sessionStorage for persistent and session-specific data storage.
// Save, retrieve, and remove data from both localStorage and sessionStorage.
// Implement form data storage using localStorage and sessionStorage.
// Compare and contrast the use cases for localStorage and sessionStorage.