# What is JavaScript?

JavaScript (JS) is a **high-level, interpreted, single-threaded programming language** used to make web pages interactive.

It is used for:

- Frontend Development
- Backend Development (Node.js)
- Mobile Apps
- Desktop Apps
- Games
- APIs

---

# Features of JavaScript

- Lightweight
- Dynamic Typing
- Object-Oriented
- Prototype-Based
- Event-Driven
- Asynchronous
- Cross-Platform

---

# Why Learn JavaScript?

- Makes websites interactive
- Works in every modern browser
- Used in Frontend & Backend
- Huge community support
- Most popular programming language

---

# History

- Created by **Brendan Eich**
- Released in **1995**
- Standardized as **ECMAScript (ES)**

Popular Versions:

- ES5
- ES6 (ECMAScript 2015) ⭐
- ES7+
- ES2024+

---

# JavaScript Engine

JavaScript code runs inside a JavaScript Engine.

| Browser | Engine         |
| ------- | -------------- |
| Chrome  | V8             |
| Edge    | V8             |
| Firefox | SpiderMonkey   |
| Safari  | JavaScriptCore |

---

# Ways to Add JavaScript

## 1. Inline

```html
<button onclick="alert('Hello')">Click</button>
```

---

## 2. Internal

```html
<script>
  console.log("Hello");
</script>
```

---

## 3. External (Best Practice)

```html
<script src="script.js"></script>
```

---

# Comments

## Single Line

```javascript
// This is a comment
```

---

## Multi Line

```javascript
/*
This is
a multi-line
comment
*/
```

---

# Output Methods

## console.log()

```javascript
console.log("Hello World");
```

Prints output in the browser console.

---

## alert()

```javascript
alert("Welcome");
```

Shows a popup message.

---

## document.write()

```javascript
document.write("Hello");
```

Writes directly to the webpage.

---

## innerHTML

```javascript
document.getElementById("demo").innerHTML = "Hello";
```

Changes HTML content.

---

# Variables

Variables store data.

## let

```javascript
let name = "Ketan";
```

- Block Scope
- Can Reassign
- Cannot Redeclare

---

## const

```javascript
const PI = 3.14;
```

- Block Scope
- Cannot Reassign
- Cannot Redeclare

---

## var

```javascript
var age = 20;
```

- Function Scope
- Can Reassign
- Can Redeclare
- Avoid in Modern JavaScript

---

# Variable Naming Rules

## Valid

```javascript
let firstName;
let age1;
let _user;
let $price;
```

---

## Invalid

```javascript
let 1age;
let first-name;
let let;
```

---

# Case Sensitive

```javascript
let name = "Ketan";

let Name = "Rahul";
```

Both are different variables.

---

# Reserved Keywords

Cannot be used as variable names.

Examples:

```text
let
const
if
for
while
return
class
function
switch
```

---

# Input Methods

## prompt()

```javascript
const name = prompt("Enter Your Name");
```

Returns user input.

---

## confirm()

```javascript
const result = confirm("Are you sure?");
```

Returns:

```text
true

or

false
```

---

# Strict Mode

```javascript
"use strict";
```

Helps detect common mistakes.

Example:

```javascript
"use strict";

x = 10;
```

❌ Error because `x` is not declared.

---

# Semicolon

```javascript
let a = 10;
let b = 20;
```

Semicolons are optional but recommended.

---

# JavaScript Flow

```text
Write Code

↓

JavaScript Engine

↓

Execution

↓

Output
```

---

# Best Practices

- Use `const` by default.
- Use `let` if the value changes.
- Avoid `var`.
- Use meaningful variable names.
- Write comments only when necessary.
- Keep code clean and readable.

---

# Interview Questions

### 1. What is JavaScript?

A high-level programming language used to create interactive web applications.

---

### 2. Who created JavaScript?

Brendan Eich.

---

### 3. What is ECMAScript?

The official standard specification of JavaScript.

---

### 4. Difference between JavaScript and ECMAScript?

- JavaScript → Programming Language
- ECMAScript → Standard Specification

---

### 5. Difference between let, const and var?

| Feature   | var      | let   | const    |
| --------- | -------- | ----- | -------- |
| Scope     | Function | Block | Block    |
| Reassign  | ✅       | ✅    | ❌       |
| Redeclare | ✅       | ❌    | ❌       |
| Hoisting  | ✅       | ✅    | ✅ (TDZ) |

---

### 6. Why use "use strict"?

To catch errors early and prevent unsafe JavaScript behavior.

---

### 7. Best way to include JavaScript?

External JavaScript file.

---

# Practice

### Beginner

- Print "Hello World"
- Create variables using `let`, `const`, and `var`
- Use `alert()`
- Use `prompt()`
- Use `confirm()`

---

### Intermediate

Create variables:

```javascript
let name = "Ketan";
let age = 20;
let city = "Mahuva";
```

Output:

```text
My Name is Ketan
Age: 20
City: Mahuva
```

---

# Mini Project

## User Information

Take input:

- Name
- Age
- City

Display:

```text
Hello Ketan

Age : 20

City : Mahuva
```

using:

- `console.log()`
- `alert()`
- `innerHTML`

---

# Summary

| Concept       | Description          |
| ------------- | -------------------- |
| JavaScript    | Programming Language |
| ECMAScript    | JavaScript Standard  |
| let           | Block Scope Variable |
| const         | Constant Variable    |
| var           | Old Variable Keyword |
| console.log() | Console Output       |
| alert()       | Popup Message        |
| prompt()      | User Input           |
| confirm()     | True/False Dialog    |
| use strict    | Strict Mode          |

---

# Memory Trick

```text
JavaScript

↓

Variables

↓

Input

↓

Output

↓

Comments

↓

Strict Mode

↓

Best Practices
```
