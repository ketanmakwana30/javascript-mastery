# What is Separation of Code?

**Separation of Code** means organizing your project by dividing it into **small, independent, and reusable files or modules**, where each file has a specific responsibility.

In simple words:

> **Instead of writing everything in one file, split your code into logical parts.**

---

# Why Do We Need Separation of Code?

Imagine writing an entire website in one file.

```text
app.js

↓

5000+ Lines

↓

Hard to Read

Hard to Debug

Hard to Maintain
```

Instead, divide the code into multiple files.

```text
app.js

↓

auth.js

↓

api.js

↓

validation.js

↓

utils.js
```

Now every file has one responsibility.

---

# Benefits

- Clean code
- Easy to understand
- Easy to maintain
- Reusable functions
- Easy debugging
- Better teamwork
- Better scalability

---

# Without Separation

```text
project/

↓

app.js

↓

Login

Signup

Validation

API Calls

DOM

Events

Storage

Everything in One File
```

Problems:

- Huge file
- Difficult debugging
- Duplicate code
- Hard maintenance

---

# With Separation

```text
project/

│── index.html
│── style.css
│── app.js
│── api.js
│── validation.js
│── utils.js
│── storage.js
│── auth.js
```

Each file performs one task.

---

# Example Project Structure

```text
project/

│── index.html

│── css/
│     └── style.css

│── js/

│     ├── app.js
│     ├── api.js
│     ├── validation.js
│     ├── storage.js
│     ├── helpers.js
│     └── config.js
```

---

# Example Responsibilities

## app.js

Main application.

```javascript
import { login } from "./auth.js";

login();
```

---

## validation.js

Contains only validation functions.

```javascript
export function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
```

---

## api.js

Contains API requests.

```javascript
export async function getUsers() {
  const response = await fetch("/users");

  return response.json();
}
```

---

## storage.js

Handles Local Storage.

```javascript
export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
```

---

## helpers.js

Contains reusable utility functions.

```javascript
export function capitalize(text) {
  return text[0].toUpperCase() + text.slice(1);
}
```

---

# Separation by Feature

Instead of grouping by file type, group by feature.

```text
src/

│── login/

│     ├── login.js
│     ├── login.css
│     └── login.html

│── dashboard/

│     ├── dashboard.js
│     ├── dashboard.css

│── profile/

│     ├── profile.js
│     └── profile.css
```

Large applications often use this approach.

---

# Separation by Layer

```text
Application

↓

UI

↓

Business Logic

↓

API

↓

Database
```

Example

```text
Button Click

↓

Validation

↓

API Request

↓

Store Data

↓

Update UI
```

---

# Separation of HTML, CSS and JS

❌ Bad

```html
<button onclick="alert('Hello')" style="color:red;"></button>
```

---

✅ Good

### HTML

```html
<button id="btn">Click</button>
```

---

### CSS

```css
button {
  color: red;
}
```

---

### JavaScript

```javascript
document.getElementById("btn").addEventListener("click", () => {
  alert("Hello");
});
```

---

# Using ES Modules

Export

```javascript
export function add(a, b) {
  return a + b;
}
```

Import

```javascript
import { add } from "./math.js";

console.log(add(5, 3));
```

---

# Folder Structure Example

```text
src/

│── assets/

│── components/

│── pages/

│── services/

│── utils/

│── styles/

│── app.js
```

---

# Real-Life Example

Imagine a restaurant.

Without separation:

```text
One Person

↓

Cook

Cashier

Cleaner

Manager
```

Very inefficient.

With separation:

```text
Chef

↓

Cashier

↓

Manager

↓

Waiter
```

Each person has one responsibility.

Code works the same way.

---

# Best Practices

- One responsibility per file.
- Use meaningful file names.
- Keep functions small.
- Reuse helper functions.
- Avoid duplicate code.
- Use modules (`import` / `export`).
- Group related files together.

---

# Advantages

- Easier maintenance
- Better readability
- Better reusability
- Faster debugging
- Easier testing
- Better collaboration

---

# Disadvantages

- More files to manage
- Slightly more setup for small projects
- Requires understanding of modules

---

# Interview Questions

### 1. What is Separation of Code?

Organizing code into smaller files or modules, each with a single responsibility.

---

### 2. Why is Separation of Code important?

It improves readability, maintainability, reusability, and scalability.

---

### 3. What is the Single Responsibility Principle (SRP)?

A file, class, or function should have **one reason to change**—it should perform only one main task.

---

### 4. Which JavaScript feature helps separate code?

**ES Modules** using:

- `export`
- `import`

---

### 5. Should HTML, CSS, and JavaScript be written in one file?

Generally **no**. Keep them in separate files for better organization.

---

# Practice

## Beginner

- Create:
  - `math.js`
  - `app.js`

- Export an `add()` function and import it.

---

## Intermediate

Create:

```text
project/

│── validation.js

│── api.js

│── storage.js

│── app.js
```

Assign one responsibility to each file.

---

## Advanced

Organize a Todo App using:

- Components
- Services
- Utilities
- Storage
- Validation

---

# Summary

| File          | Responsibility        |
| ------------- | --------------------- |
| app.js        | Main application      |
| api.js        | API requests          |
| validation.js | Form validation       |
| storage.js    | Local/Session Storage |
| helpers.js    | Utility functions     |
| config.js     | Configuration values  |

---

# Memory Trick

```text
Big Project

↓

Split Files

↓

One Responsibility

↓

Import

↓

Export

↓

Reusable

↓

Easy Maintenance
```
