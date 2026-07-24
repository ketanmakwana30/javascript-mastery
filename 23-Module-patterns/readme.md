# What is a Module?

A **module** is a piece of code that groups related variables and functions together.

Modules help to:

- Organize code
- Hide private data
- Avoid global variables
- Improve maintainability
- Reuse code

---

# 1. Module Pattern

## Definition

The **Module Pattern** uses an **IIFE (Immediately Invoked Function Expression)** and **closures** to create private variables and expose only selected methods.

---

## Syntax

```javascript
const counter = (function () {
  let count = 0;

  function increment() {
    count++;
  }

  function decrement() {
    count--;
  }

  function getCount() {
    return count;
  }

  return {
    increment,
    decrement,
    getCount,
  };
})();
```

---

## Usage

```javascript
counter.increment();
counter.increment();

console.log(counter.getCount()); // 2
```

---

## Characteristics

- Uses IIFE
- Uses Closures
- Private Variables
- Public Methods
- Singleton (one object)

---

## Advantages

- Data hiding
- Encapsulation
- Avoids global scope
- Better organization

---

## Disadvantages

- Creates only one module
- Hard to extend
- Mostly replaced by ES6 Modules

---

# 2. Revealing Module Pattern

## Definition

A variation of the Module Pattern where all functions are private, and only selected ones are revealed at the end.

---

## Syntax

```javascript
const counter = (function () {
  let count = 0;

  function increment() {
    count++;
  }

  function decrement() {
    count--;
  }

  function getCount() {
    return count;
  }

  return {
    increment,
    decrement,
    getCount,
  };
})();
```

---

## Renaming Public Methods

```javascript
const counter = (function () {
  let count = 0;

  function increase() {
    count++;
  }

  function currentValue() {
    return count;
  }

  return {
    increment: increase,
    getCount: currentValue,
  };
})();
```

---

## Characteristics

- All functions remain private.
- Public API is revealed at the end.
- Cleaner for large modules.
- Uses closures.

---

## Advantages

- Easy to read
- Easy to maintain
- Clear public API
- Better organization

---

## Disadvantages

- Still creates a singleton
- Less common in modern JavaScript

---

# 3. Factory Function Pattern

## Definition

A **Factory Function** is a function that creates and returns a new object every time it is called.

---

## Syntax

```javascript
function createUser(name, age) {
  return {
    name,

    age,

    greet() {
      console.log(`Hello ${this.name}`);
    },
  };
}
```

---

## Usage

```javascript
const user1 = createUser("Ketan", 20);
const user2 = createUser("Rahul", 21);

user1.greet();
user2.greet();
```

---

## Factory with Private Variables

```javascript
function createBankAccount(balance) {
  return {
    deposit(amount) {
      balance += amount;
    },

    withdraw(amount) {
      balance -= amount;
    },

    getBalance() {
      return balance;
    },
  };
}

const account = createBankAccount(1000);

account.deposit(500);

console.log(account.getBalance());
```

`balance` remains private because of closures.

---

## Characteristics

- Returns a new object
- Doesn't use `new`
- Can use closures
- Can create unlimited objects

---

## Advantages

- Reusable
- Easy to understand
- Flexible
- Supports private data

---

## Disadvantages

Methods defined inside the factory are recreated for every object.

---

# Module Pattern vs Revealing Module Pattern

| Module Pattern                                | Revealing Module Pattern     |
| --------------------------------------------- | ---------------------------- |
| Functions may be defined directly in `return` | Define first, reveal later   |
| Public API mixed with implementation          | Public API clearly separated |
| Slightly harder to read                       | Cleaner for larger modules   |

---

# Module Pattern vs Factory Function

| Module Pattern            | Factory Function           |
| ------------------------- | -------------------------- |
| Creates one shared object | Creates many objects       |
| Uses IIFE                 | Uses normal function       |
| Singleton                 | Multiple instances         |
| Mainly for encapsulation  | Mainly for object creation |

---

# Factory Function vs Constructor Function

| Factory Function        | Constructor Function       |
| ----------------------- | -------------------------- |
| No `new` keyword        | Requires `new`             |
| Returns object manually | JavaScript creates object  |
| Easier for beginners    | Uses `this` and prototypes |

---

# Pattern Selection

```text
Need one private shared module?

↓

Module Pattern

----------------------------

Need cleaner public API?

↓

Revealing Module Pattern

----------------------------

Need many objects?

↓

Factory Function
```

---

# Real-Life Examples

### Module Pattern

```text
Shopping Cart

addItem()

removeItem()

clearCart()
```

One shared cart for the application.

---

### Revealing Module Pattern

```text
Authentication Module

login()

logout()

isLoggedIn()
```

Only required methods are exposed.

---

### Factory Function

```text
Create Users

↓

User 1

User 2

User 3
```

Every call creates a new object.

---

# Interview Questions

### 1. What is the Module Pattern?

Uses an IIFE and closures to create private variables and expose public methods.

---

### 2. What is the Revealing Module Pattern?

A variation where all functions are private and only selected ones are returned.

---

### 3. What is a Factory Function?

A function that creates and returns a new object.

---

### 4. Which pattern creates multiple objects?

✅ Factory Function

---

### 5. Which patterns use closures?

- Module Pattern
- Revealing Module Pattern
- Factory Functions (when using private variables)

---

### 6. Which pattern requires `new`?

❌ None of these.

Only **Constructor Functions** and **Classes** use `new`.

---

# Summary

| Pattern                  | Creates          | Private Data       | Uses IIFE | Uses `new` |
| ------------------------ | ---------------- | ------------------ | --------- | ---------- |
| Module Pattern           | One Object       | ✅                 | ✅        | ❌         |
| Revealing Module Pattern | One Object       | ✅                 | ✅        | ❌         |
| Factory Function         | Multiple Objects | ✅ (with closures) | ❌        | ❌         |

---

# Easy Trick to Remember

```text
One Shared Object
        ↓
Module Pattern

------------------

One Shared Object
with Cleaner API
        ↓
Revealing Module Pattern

------------------

Many Objects
        ↓
Factory Function
```

## Key Points

- **Module Pattern** → One private module.
- **Revealing Module Pattern** → Same as Module Pattern but with a cleaner public API.
- **Factory Function** → Creates many independent objects.
- All three patterns rely on **functions**, and the first two always rely on **closures** for data privacy.
