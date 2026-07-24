# What is OOP?

**Object-Oriented Programming (OOP)** is a programming paradigm that organizes code into **objects**.

An object contains:

- **Properties (Data)**
- **Methods (Behavior)**

In simple words:

> **OOP models real-world entities as objects with data and actions.**

Example:

```text
Car

Properties:
- Brand
- Color
- Speed

Methods:
- Start()
- Stop()
- Accelerate()
```

---

# Why Use OOP?

Without OOP:

- Code is repeated.
- Difficult to maintain.
- Hard to scale.

With OOP:

- Reusable code
- Better organization
- Easier maintenance
- Easier testing

---

# Four Pillars of OOP

```text
Object-Oriented Programming

↓

1. Encapsulation

2. Abstraction

3. Inheritance

4. Polymorphism
```

These are the core concepts of OOP.

---

# 1. Encapsulation

## Definition

**Encapsulation** means **bundling data and methods together** and restricting direct access to internal data.

In simple words:

> **Hide the data and allow access only through methods.**

---

## Example

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

account.deposit(1000);

console.log(account.getBalance());
```

Output:

```text
1000
```

Cannot access:

```javascript
account.#balance;
```

❌ Private field.

---

# 2. Abstraction

## Definition

**Abstraction** means **show only the necessary details and hide the implementation.**

In simple words:

> **The user knows what to use, not how it works internally.**

---

## Example

```javascript
class CoffeeMachine {
  makeCoffee() {
    console.log("Coffee Ready");
  }
}

const machine = new CoffeeMachine();

machine.makeCoffee();
```

You don't need to know how the machine heats water or grinds beans.

---

# 3. Inheritance

## Definition

**Inheritance** allows one class to reuse the properties and methods of another class.

In simple words:

> **A child class inherits from a parent class.**

---

## Example

```javascript
class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}

const dog = new Dog();

dog.speak();

dog.bark();
```

Output:

```text
Animal speaks
Woof!
```

---

# 4. Polymorphism

## Definition

**Polymorphism** means **one method can have different behavior depending on the object or class.**

---

## Example

```javascript
class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Cat meows");
  }
}

new Dog().speak();

new Cat().speak();
```

Output:

```text
Dog barks
Cat meows
```

The same method name (`speak`) behaves differently.

---

# Class Example

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

const user = new User("Ketan", 20);

user.greet();
```

---

# Objects

```javascript
const car = {
  brand: "BMW",

  start() {
    console.log("Car Started");
  },
};
```

Objects are instances that contain data and behavior.

---

# Class vs Object

| Class                          | Object                 |
| ------------------------------ | ---------------------- |
| Blueprint                      | Real instance          |
| Defines properties and methods | Contains actual values |
| Created once                   | Can create many        |

---

# OOP Features in JavaScript

- Classes
- Objects
- Constructors
- Methods
- Inheritance
- Prototypes
- Encapsulation
- Polymorphism
- Abstraction

---

# Real-Life Example

```text
Class

↓

Student

↓

Objects

↓

Ketan

Rahul

Amit
```

The class defines the structure; each student object has its own data.

---

# Advantages

- Code reusability
- Easy maintenance
- Better scalability
- Modular code
- Better organization

---

# Disadvantages

- More complex than procedural programming
- Small programs may not need OOP
- Poor design can make code harder to understand

---

# Interview Questions

### 1. What is OOP?

A programming paradigm based on objects containing data and behavior.

---

### 2. What are the four pillars of OOP?

- Encapsulation
- Abstraction
- Inheritance
- Polymorphism

---

### 3. What is Encapsulation?

Wrapping data and methods together while restricting direct access to internal data.

---

### 4. What is Abstraction?

Showing only the essential features while hiding implementation details.

---

### 5. What is Inheritance?

A mechanism where one class inherits properties and methods from another.

---

### 6. What is Polymorphism?

The ability for the same method to behave differently depending on the object or class.

---

### 7. What is the difference between a Class and an Object?

A class is a blueprint; an object is an instance created from that blueprint.

---

### 8. Does JavaScript support OOP?

✅ Yes.

JavaScript supports OOP using **objects, prototypes, and ES6 classes**.

---

# Summary

| Concept       | Description                          |
| ------------- | ------------------------------------ |
| Object        | Instance containing data and methods |
| Class         | Blueprint for creating objects       |
| Encapsulation | Hide internal data                   |
| Abstraction   | Hide implementation details          |
| Inheritance   | Reuse code from another class        |
| Polymorphism  | Same method, different behavior      |

---

# Easy Trick to Remember

```text
OOP

↓

Objects

↓

Classes

↓

Encapsulation

↓

Abstraction

↓

Inheritance

↓

Polymorphism
```

## Memory Trick

- **Object = Real Thing**
- **Class = Blueprint**
- **Encapsulation = Hide Data**
- **Abstraction = Hide Complexity**
- **Inheritance = Reuse Code**
- **Polymorphism = One Method, Many Behaviors**
