# What is a Class?

A **Class** is a blueprint for creating objects.

In simple words:

> **A class defines the properties (data) and methods (behavior) that objects created from it will have.**

JavaScript classes were introduced in **ES6 (ECMAScript 2015)**.

**Important:** Classes are **syntactic sugar** over JavaScript's prototype system—they don't introduce a new inheritance model.

---

# Why Do We Need Classes?

Without classes:

```javascript
const user1 = {
  name: "Ketan",
  age: 20,
};

const user2 = {
  name: "Rahul",
  age: 21,
};
```

This repeats the same structure.

With a class:

```javascript
class User {}
```

You define the structure once and create many objects.

---

# Basic Syntax

```javascript
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}
```

---

# Creating an Object

Use the `new` keyword.

```javascript
const user1 = new User("Ketan", 20);

user1.greet();
```

Output:

```text
Hello Ketan
```

---

# constructor()

The **constructor** is a special method that runs automatically when a new object is created.

```javascript
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
```

---

# this Keyword

`this` refers to the current object.

```javascript
class User {
  constructor(name) {
    this.name = name;
  }
}
```

When:

```javascript
const user = new User("Ketan");
```

Internally:

```text
this.name = "Ketan"
```

---

# Instance Methods

Methods belong to every object created from the class.

```javascript
class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}
```

Usage:

```javascript
const user = new User("Ketan");

user.greet();
```

---

# Multiple Objects

```javascript
const user1 = new User("Ketan", 20);

const user2 = new User("Rahul", 22);

const user3 = new User("Amit", 25);
```

Each object has different data but shares the same methods.

---

# Static Methods

Static methods belong to the class, not its objects.

```javascript
class MathHelper {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathHelper.add(5, 3));
```

Output:

```text
8
```

Cannot call:

```javascript
const math = new MathHelper();

math.add(); // ❌ Error
```

---

# Getters

Getters allow you to access computed values like properties.

```javascript
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const user = new User("Ketan", "Makwana");

console.log(user.fullName);
```

---

# Setters

Setters allow controlled updates.

```javascript
class User {
  constructor(name) {
    this.name = name;
  }

  set userName(value) {
    this.name = value;
  }
}

const user = new User("Ketan");

user.userName = "Rahul";
```

---

# Private Fields

Modern JavaScript supports private fields using `#`.

```javascript
class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();

account.deposit(500);

console.log(account.getBalance());
```

Cannot access:

```javascript
account.#balance; // ❌ Syntax Error
```

---

# Inheritance

Classes can inherit from other classes.

```javascript
class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof");
  }
}

const dog = new Dog();

dog.speak();

dog.bark();
```

---

# super Keyword

`super()` calls the parent class constructor.

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);

    this.breed = breed;
  }
}
```

---

# Class Inheritance Flow

```text
Parent Class

↓

extends

↓

Child Class

↓

new Object
```

---

# Class vs Constructor Function

### Constructor Function

```javascript
function User(name) {
  this.name = name;
}
```

---

### Class

```javascript
class User {
  constructor(name) {
    this.name = name;
  }
}
```

Both create objects, but classes provide cleaner syntax.

---

# Advantages

- Cleaner syntax
- Easier object creation
- Supports inheritance
- Supports encapsulation
- Built on prototypes

---

# Disadvantages

- Still relies on prototypes internally
- Slight learning curve for beginners

---

# Interview Questions

### 1. What is a Class?

A blueprint for creating objects.

---

### 2. What is the constructor?

A special method that runs automatically when an object is created.

---

### 3. What does `this` refer to?

The current object instance.

---

### 4. What is a static method?

A method that belongs to the class itself rather than its instances.

---

### 5. What is inheritance?

The ability of one class to reuse properties and methods from another class.

---

### 6. What does `extends` do?

Creates a child class from a parent class.

---

### 7. What does `super()` do?

Calls the parent class constructor.

---

### 8. Are JavaScript classes real classes?

They provide class syntax, but internally they are built on JavaScript's prototype-based inheritance.

---

# Summary

| Feature         | Purpose                    |
| --------------- | -------------------------- |
| `class`         | Create a blueprint         |
| `constructor()` | Initialize objects         |
| `this`          | Current object             |
| Instance Method | Shared by instances        |
| `static`        | Belongs to the class       |
| `get`           | Read computed property     |
| `set`           | Update property            |
| `extends`       | Inherit from another class |
| `super()`       | Call parent constructor    |
| `#private`      | Private class fields       |

---

# Easy Trick to Remember

```text
Class

↓

Blueprint

↓

new

↓

Object

↓

constructor()

↓

Properties

↓

Methods
```

## Memory Trick

- **Class = Blueprint**
- **`new` = Create Object**
- **`constructor()` = Initialize Object**
- **`this` = Current Object**
- **`extends` = Inheritance**
- **`super()` = Parent Constructor**
- **`static` = Class Only**
- **`#` = Private Field**
