# Scope & Closures

# What is Scope?

**Scope** determines **where a variable can be accessed** in your program.

In simple words:

> **Scope decides the visibility and lifetime of variables.**

---

# Why is Scope Important?

- Prevents variable conflicts
- Keeps code organized
- Protects data
- Improves maintainability

---

# Types of Scope

```text id="p9m4aj"
Scope

↓

Global Scope

↓

Function Scope

↓

Block Scope

↓

Lexical Scope
```

---

# 1. Global Scope

Variables declared outside any function or block.

```javascript id="6sj9bg"
let name = "Ketan";

function greet() {
  console.log(name);
}

greet();
```

Output

```text id="tkq1el"
Ketan
```

Accessible from anywhere in the file.

---

# 2. Function Scope

Variables declared inside a function.

```javascript id="t44zpn"
function demo() {
  let age = 20;

  console.log(age);
}

demo();
```

Output

```text id="5vjlwm"
20
```

Outside the function:

```javascript id="87a5gb"
console.log(age);
```

❌ Error

---

# 3. Block Scope

Variables declared with `let` and `const` inside `{}`.

```javascript id="g0f3sa"
if (true) {
  let city = "Mahuva";

  console.log(city);
}
```

Outside:

```javascript id="6y6tud"
console.log(city);
```

❌ Error

---

# var and Block Scope

```javascript id="o53l2v"
if (true) {
  var name = "Ketan";
}

console.log(name);
```

Output

```text id="m6j4bd"
Ketan
```

`var` ignores block scope.

---

# Lexical Scope

A function can access variables from its parent scope.

```javascript id="s4jjni"
function outer() {
  let message = "Hello";

  function inner() {
    console.log(message);
  }

  inner();
}

outer();
```

Output

```text id="65cz6q"
Hello
```

---

# Scope Chain

JavaScript searches for variables in this order:

```text id="z1lpl6"
Current Scope

↓

Parent Scope

↓

Global Scope

↓

Not Found

↓

ReferenceError
```

---

# What is a Closure?

A **Closure** is created when an inner function remembers and accesses variables from its outer function **even after the outer function has finished executing.**

In simple words:

> **A closure "closes over" the variables of its parent function.**

---

# Basic Closure Example

```javascript id="0i43hc"
function outer() {
  let count = 0;

  function inner() {
    count++;

    console.log(count);
  }

  return inner;
}

const counter = outer();

counter();

counter();

counter();
```

Output

```text id="nkgvya"
1
2
3
```

`count` is remembered because of the closure.

---

# Closure Flow

```text id="4r5e86"
outer()

↓

Creates Variable

↓

Returns inner()

↓

outer() Ends

↓

inner() Still Remembers Variable
```

---

# Real-Life Example

Think of a locker.

```text id="j3t1m7"
Locker Created

↓

Items Stored

↓

Locker Closed

↓

Items Still Inside
```

A closure behaves similarly—it remembers variables even after the outer function has finished.

---

# Private Variables Using Closures

```javascript id="xpt6r7"
function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;

      console.log(count);
    },

    decrement() {
      count--;

      console.log(count);
    },
  };
}

const counter = createCounter();

counter.increment();

counter.increment();

counter.decrement();
```

Output

```text id="4kfjrl"
1
2
1
```

`count` cannot be accessed directly.

---

# Practical Example

```javascript id="mwlm2r"
function greet(name) {
  return function () {
    console.log(`Hello ${name}`);
  };
}

const sayHello = greet("Ketan");

sayHello();
```

Output

```text id="hvhjaf"
Hello Ketan
```

---

# Closures with setTimeout()

```javascript id="kqwn4h"
function timer() {
  let message = "Finished";

  setTimeout(() => {
    console.log(message);
  }, 2000);
}

timer();
```

The callback remembers `message`.

---

# Advantages of Closures

- Data Privacy
- Encapsulation
- Function Factories
- State Management
- Memoization
- Event Handlers

---

# Disadvantages

- Can increase memory usage
- May cause memory leaks if references aren't released
- Harder to debug if overused

---

# Scope vs Closure

| Scope                             | Closure                              |
| --------------------------------- | ------------------------------------ |
| Determines variable accessibility | Remembers variables from outer scope |
| Exists during execution           | Can outlive the outer function       |
| Controls visibility               | Preserves state                      |

---

# Common Mistake (`var` in Loops)

```javascript id="znhu2d"
for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

Output

```text id="fgzv2u"
4
4
4
```

Using `let`:

```javascript id="72zpj4"
for (let i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

Output

```text id="7mxhbl"
1
2
3
```

Reason: `let` creates a new block-scoped variable for each iteration.

---

# Interview Questions

### 1. What is Scope?

Scope defines where a variable can be accessed.

---

### 2. What are the types of Scope?

- Global Scope
- Function Scope
- Block Scope
- Lexical Scope

---

### 3. What is Lexical Scope?

An inner function can access variables from its parent function.

---

### 4. What is a Closure?

A closure is a function that remembers variables from its outer scope even after the outer function has returned.

---

### 5. Why are Closures useful?

- Data hiding
- Private variables
- Function factories
- Maintaining state

---

### 6. Difference between Scope and Closure?

| Scope               | Closure             |
| ------------------- | ------------------- |
| Controls visibility | Preserves variables |

---

### 7. Why does `var` fail inside loops with `setTimeout()`?

Because `var` is function-scoped, so all callbacks share the same variable.

---

### 8. How does `let` solve the problem?

`let` creates a new block-scoped variable for each loop iteration.

---

# Practice

## Beginner

- Create global, function, and block-scoped variables.
- Observe where each variable can be accessed.

---

## Intermediate

- Create a counter using closures.
- Create a greeting function using closures.

---

## Advanced

- Build a private bank account using closures.
- Build a function factory.
- Implement simple memoization.

---

# Mini Project

## Counter App using Closure

Requirements:

- Create a counter.
- Increment value.
- Decrement value.
- Reset value.
- Prevent direct access to the counter variable.

---

# Summary

| Concept        | Purpose                              |
| -------------- | ------------------------------------ |
| Global Scope   | Accessible everywhere                |
| Function Scope | Accessible inside function           |
| Block Scope    | Accessible inside block              |
| Lexical Scope  | Child accesses parent variables      |
| Closure        | Remembers outer variables            |
| Scope Chain    | Searches parent scopes for variables |

---

# Memory Trick

```text id="3y3r2e"
Scope

↓

Global

↓

Function

↓

Block

↓

Lexical

↓

Closure

↓

Remember Variables

↓

Private Data

↓

State Management
```
