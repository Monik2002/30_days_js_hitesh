// Day 14: Classes
// Tasks/Activities:
// Activity 1: Class Definition

// Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.


// Task 2: Add a method to the Person class that updates the age property and logs the updated age.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age: ${this.age}`);
    }
}

const person1 = new Person('Alice', 30);
console.log(person1.greeting());

person1.updateAge(35);
console.log(person1.greeting());

// Activity 2: Class Inheritance

// Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID.

// Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.

class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }
    
    getStudentId() {
        return `Student ID: ${this.studentId}`;
    }

    greeting() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
}

const student1 = new Student('Bob', 25, '12345');
console.log(student1.getStudentId());
console.log(student1.greeting());

// Activity 3: Static Methods and Properties

// Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static genericGreeting() {
        return 'Hello, nice to meet you!';
    }

    greeting() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age: ${this.age}`);
    }

}

console.log(Person.genericGreeting());

// Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.

class Student extends Person {
    static totalStudents = 0;

    constructor() {
        Student.totalStudents++;
    }

    static totalstudents() {
        return `Total students: ${Student.totalStudents}`;
    }
}

const studentx = new Student();
const studenty = new Student();
console.log(Student.totalstudents());

// Activity 4: Getters and Setters

// Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    greeting() {
        return `Hello, my name is ${this.fullName}.`;
    }
}

const personx = new Person('Alice', 'Smith');
console.log(personx.fullName); // Output: Alice Smith

// Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full name.

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(name) {
        const [firstName, lastName] = name.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting() {
        return `Hello, my name is ${this.fullName}.`;
    }
}

const persony = new Person('Alice', 'Smith');
persony.fullName = 'Bob Johnson';
console.log(persony.fullName); // Output: Bob Johnson

// Activity 5: Private Fields (Optional)

// Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.

class Account {
    #balance;

    constructor(initialBalance = 0) {
        if (initialBalance < 0) {
            throw new Error('Initial balance cannot be negative.');
            // console.log('Initial balance cannot be negative.');
            // return;
        }
        this.#balance = initialBalance
    }

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount;
        } else {
            console.log('Insufficient funds.');
        }
    }

    getBalance() {
        return this.#balance;
    }
}

const account1 = new Account(100);
console.log(account1.getBalance()); // Output: 100

// Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.

const account2 = new Account(50);
console.log(account2.getBalance()); // Output: 50

account2.deposit(30);
console.log(account2.getBalance()); // Output: 80

account2.withdraw(20);
console.log(account2.getBalance()); // Output: 60

// Feature Request:
// Basic Class Script: Write a script that defines a Person class with properties and methods, creates instances, and logs messages.
// Class Inheritance Script: Create a script that defines a Student class extending Person, overrides methods, and logs the results.
// Static Methods and Properties Script: Write a script that demonstrates static methods and properties in classes.
// Getters and Setters Script: Create a script that uses getters and setters in a class.
// Private Fields Script: Write a script that defines a class with private fields and methods to manipulate these fields (optional).
// Achievement:
// By the end of these activities, students will:

// Define and use classes with properties and methods.
// Implement inheritance to extend classes.
// Utilize static methods and properties.
// Apply getters and setters for encapsulation.
// Understand and use private fields in classes (optional).

// done