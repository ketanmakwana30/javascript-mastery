# What is `this`?

`this` is a special keyword in JavaScript that refers to **the object that is currently executing the function**.

In simple words:

> **`this` refers to the object that calls the function.**

**Important:** The value of `this` is determined **when a function is called**, not where it is defined.

---

# Why Do We Need `this`?

Suppose we have an object:

```javascript
const user = {
  name: "Ketan",

  greet() {
    console.log(`Hello ${this.name}`);
  },
};

user.greet();
```

Output:

```text
Hello Ketan
```

Here,

```javascript
this.name;
```

means

```javascript
user.name;
```

---

# How `this` Works

```text
Object

↓

Calls Function

↓

this

↓

Current Object
```

---

# 1. `this` in Global Scope

### Browser

```javascript
console.log(this);
```

Output:

```text
Window Object
```

In browsers, the global `this` refers to the `window` object (when not using ES modules).

---

### Node.js

```javascript
console.log(this);
```

At the top level of a CommonJS module, `this` refers to `module.exports`, not the global object.

---

# 2. `this` Inside an Object Method

```javascript
const user = {
  name: "Ketan",

  greet() {
    console.log(this.name);
  },
};

user.greet();
```

Output:

```text
Ketan
```

`this` refers to the object before the dot (`user`).

---

# 3. `this` Inside a Regular Function

```javascript
function greet() {
  console.log(this);
}

greet();
```

In browsers:

- Non-strict mode → `window`
- Strict mode (`"use strict"`) → `undefined`

---

# 4. `this` Inside an Arrow Function

Arrow functions **do not have their own `this`**.

They inherit `this` from the surrounding (lexical) scope.

```javascript
const user = {
  name: "Ketan",

  greet() {
    const show = () => {
      console.log(this.name);
    };

    show();
  },
};

user.greet();
```

Output:

```text
Ketan
```

The arrow function uses the `this` value from `greet()`.

---

# 5. `this` with Constructor Functions

```javascript
function User(name) {
  this.name = name;
}

const user = new User("Ketan");

console.log(user.name);
```

Output:

```text
Ketan
```

When using `new`, `this` refers to the newly created object.

---

# 6. `this` Inside a Class

```javascript
class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(this.name);
  }
}

const user = new User("Ketan");

user.greet();
```

Output:

```text
Ketan
```

Here, `this` refers to the current class instance.

---

# 7. `this` with call()

```javascript
function greet() {
  console.log(this.name);
}

const user = {
  name: "Ketan",
};

greet.call(user);
```

Output:

```text
Ketan
```

`call()` explicitly sets `this`.

---

# 8. `this` with apply()

```javascript
function greet() {
  console.log(this.name);
}

const user = {
  name: "Ketan",
};

greet.apply(user);
```

Output:

```text
Ketan
```

---

# 9. `this` with bind()

```javascript
function greet() {
  console.log(this.name);
}

const user = {
  name: "Ketan",
};

const sayHello = greet.bind(user);

sayHello();
```

Output:

```text
Ketan
```

`bind()` returns a new function with `this` permanently set.

---

# Event Listener Example

```javascript
button.addEventListener("click", function () {
  console.log(this);
});
```

Output:

```text
<button>
```

In a regular function used as an event listener, `this` refers to the element that received the event.

---

# Arrow Function in Event Listener

```javascript
button.addEventListener("click", () => {
  console.log(this);
});
```

The arrow function does **not** refer to the button. It inherits `this` from its surrounding scope.

---

# Rules for `this`

```text
Regular Function

↓

Depends on How It Is Called

------------------------

Object Method

↓

this = Object

------------------------

Arrow Function

↓

No Own this

↓

Uses Parent Scope

------------------------

Constructor

↓

this = New Object

------------------------

call/apply/bind

↓

this = Specified Object
```

---

# Real-Life Example

```text
TV Remote

↓

Press Power

↓

Which TV?

↓

That TV = this
```

The remote sends the command to a specific TV.

Similarly, `this` refers to the object receiving the function call.

---

# Advantages

- Access object properties
- Reuse functions
- Build classes and constructors
- Works with OOP
- Enables dynamic function behavior

---

# Common Mistakes

### Forgetting `new`

```javascript
function User(name) {
  this.name = name;
}

User("Ketan");
```

Without `new`, `this` will not refer to a new object.

---

### Losing `this`

```javascript
const user = {
  name: "Ketan",

  greet() {
    console.log(this.name);
  },
};

const fn = user.greet;

fn();
```

`fn()` is called as a plain function, so it loses the original object context.

Solution:

```javascript
const fn = user.greet.bind(user);

fn();
```

---

# Interview Questions

### 1. What is `this`?

`this` refers to the object that executes the current function.

---

### 2. Does an arrow function have its own `this`?

❌ No.

It inherits `this` from the surrounding scope.

---

### 3. What does `this` refer to inside a class?

The current class instance.

---

### 4. What does `this` refer to inside a constructor?

The newly created object.

---

### 5. How can you change the value of `this`?

Using:

- `call()`
- `apply()`
- `bind()`

---

### 6. What does `bind()` do?

Returns a new function with `this` permanently bound.

---

### 7. What is the difference between a regular function and an arrow function regarding `this`?

| Regular Function                            | Arrow Function                      |
| ------------------------------------------- | ----------------------------------- |
| Has its own `this` based on how it's called | Uses the surrounding scope's `this` |

---

# Summary

| Situation                       | Value of `this`                                 |
| ------------------------------- | ----------------------------------------------- |
| Global (browser, non-module)    | `window`                                        |
| Object Method                   | The object                                      |
| Regular Function                | Depends on call (or `undefined` in strict mode) |
| Arrow Function                  | Surrounding lexical `this`                      |
| Constructor                     | Newly created object                            |
| Class Method                    | Class instance                                  |
| `call()` / `apply()` / `bind()` | Explicitly specified object                     |

---

# Easy Trick to Remember

```text
this

↓

Who Called Me?

↓

That Object

↓

Except Arrow Functions

↓

They Use Parent's this
```

## Memory Trick

- **Object Method → `this` = Object**
- **Regular Function → Depends on how it's called**
- **Arrow Function → Parent's `this`**
- **Constructor → New Object**
- **Class → Current Instance**
- **call/apply/bind → Custom `this`**
