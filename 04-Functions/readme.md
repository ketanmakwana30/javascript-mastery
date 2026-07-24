# What is a Function?

A **Function** is a reusable block of code that performs a specific task.

In simple words:

> **Write once, use many times.**

---

# Why Use Functions?

- Avoid code repetition
- Improve readability
- Reusable code
- Easy to maintain
- Break large programs into smaller parts

---

# Function Syntax

```javascript id="r9tm31"
function functionName() {
  // Code
}
```

Example

```javascript id="yhgdlt"
function greet() {
  console.log("Hello World");
}

greet();
```

Output

```text id="3e08j4"
Hello World
```

---

# Function Declaration

```javascript id="xf0pi5"
function add(a, b) {
  return a + b;
}

console.log(add(10, 20));
```

Output

```text id="2ljs8e"
30
```

---

# Function Expression

```javascript id="mqks8z"
const greet = function () {
  console.log("Hello");
};

greet();
```

---

# Arrow Function (ES6)

```javascript id="mqsh09"
const greet = () => {
  console.log("Hello");
};

greet();
```

---

# Parameters vs Arguments

### Parameters

Variables declared in the function definition.

```javascript id="0npx0w"
function greet(name) {
  console.log(name);
}
```

`name` is a **parameter**.

---

### Arguments

Values passed when calling the function.

```javascript id="u4r8l9"
greet("Ketan");
```

`"Ketan"` is an **argument**.

---

# Return Statement

Returns a value from a function.

```javascript id="nqktw4"
function square(num) {
  return num * num;
}

console.log(square(5));
```

Output

```text id="lyf3d8"
25
```

---

# Default Parameters

```javascript id="9h1a4y"
function greet(name = "Guest") {
  console.log(`Hello ${name}`);
}

greet();

greet("Ketan");
```

Output

```text id="vq9mjl"
Hello Guest

Hello Ketan
```

---

# Rest Parameters

Collects multiple arguments into an array.

```javascript id="x2d9vq"
function sum(...numbers) {
  console.log(numbers);
}

sum(10, 20, 30, 40);
```

Output

```text id="kt8n2g"
[10, 20, 30, 40]
```

---

# Anonymous Function

A function without a name.

```javascript id="bhk7kb"
const greet = function () {
  console.log("Hello");
};
```

---

# Callback Function

A function passed as an argument to another function.

```javascript id="7ww6tl"
function greet(callback) {
  callback();
}

greet(function () {
  console.log("Hello");
});
```

---

# Higher-Order Function

A function that:

- Takes another function as an argument, or
- Returns a function.

```javascript id="18f3mc"
function calculate(a, b, operation) {
  return operation(a, b);
}
```

---

# Nested Function

A function inside another function.

```javascript id="zcfk2g"
function outer() {
  function inner() {
    console.log("Inner");
  }

  inner();
}

outer();
```

---

# Scope in Functions

```javascript id="cw0wke"
function demo() {
  let message = "Hello";

  console.log(message);
}

demo();
```

`message` is accessible only inside the function.

---

# Hoisting

Function declarations are hoisted.

```javascript id="izhhb3"
greet();

function greet() {
  console.log("Hello");
}
```

Works correctly.

Function expressions are **not** hoisted in the same way.

---

# Function Flow

```text id="9cz3pf"
Call Function

↓

Parameters Receive Values

↓

Execute Code

↓

Return Value

↓

Continue Program
```

---

# Types of Functions

```text id="8w70qg"
Functions

↓

Function Declaration

↓

Function Expression

↓

Arrow Function

↓

Anonymous Function

↓

Callback Function

↓

Higher-Order Function
```

---

# Function vs Method

| Function    | Method               |
| ----------- | -------------------- |
| Independent | Belongs to an object |

Example

```javascript id="luu0zl"
function greet() {}

const user = {
  greet() {},
};
```

---

# Advantages

- Reusable
- Easy to debug
- Modular code
- Less repetition
- Better organization

---

# Interview Questions

### 1. What is a function?

A reusable block of code that performs a specific task.

---

### 2. Difference between Parameters and Arguments?

| Parameter           | Argument                    |
| ------------------- | --------------------------- |
| Defined in function | Passed during function call |

---

### 3. Difference between Function Declaration and Function Expression?

| Declaration       | Expression                   |
| ----------------- | ---------------------------- |
| Hoisted           | Not fully hoisted            |
| Has function name | Usually stored in a variable |

---

### 4. What is an Arrow Function?

A shorter syntax for writing functions introduced in ES6.

---

### 5. What is a Callback Function?

A function passed as an argument to another function.

---

### 6. What is a Higher-Order Function?

A function that accepts or returns another function.

---

### 7. What does `return` do?

Stops function execution and returns a value.

---

# Practice

### Beginner

- Create a function to print your name.
- Create a function to add two numbers.
- Create a function to find the square of a number.
- Create a function to check if a number is even.

---

### Intermediate

- Find the largest of two numbers.
- Calculate factorial using a function.
- Reverse a string using a function.
- Check if a string is a palindrome.

---

### Advanced

- Create your own `calculator()` function.
- Create a function that accepts another function (callback).
- Create a function that returns another function.

---

# Mini Project

## Calculator

Functions:

- Addition
- Subtraction
- Multiplication
- Division

Example

```javascript id="86qqym"
add(10, 20);

subtract(30, 10);

multiply(5, 6);

divide(20, 5);
```

---

# Summary

| Concept               | Description                         |
| --------------------- | ----------------------------------- |
| Function              | Reusable block of code              |
| Parameter             | Variable in function definition     |
| Argument              | Value passed to function            |
| return                | Returns a value                     |
| Arrow Function        | Short ES6 syntax                    |
| Callback              | Function passed to another function |
| Higher-Order Function | Accepts or returns functions        |

---

# Memory Trick

```text id="n7c00j"
Function

↓

Parameters

↓

Arguments

↓

Execute

↓

Return

↓

Callback

↓

Higher-Order

↓

Arrow Function
```
