# Local Storage & Session Storage

# What is Web Storage?

**Web Storage** is a browser feature that allows JavaScript to store data in the user's browser.

In simple words:

> **Web Storage lets websites save data locally in the browser.**

Unlike variables, the data can remain available even after a page refresh or browser restart (depending on the storage type).

---

# Types of Web Storage

```text
Web Storage

↓

Local Storage

↓

Session Storage
```

---

# Why Use Web Storage?

- Save user preferences
- Remember login state (non-sensitive)
- Store theme (Dark/Light Mode)
- Save shopping cart
- Store form data
- Cache API responses

---

# Local Storage

**Local Storage** stores data **permanently** until it is manually removed.

Even if the browser is closed and reopened, the data remains.

---

# Session Storage

**Session Storage** stores data only for the current browser tab.

When the tab is closed, the data is removed.

---

# Difference Between Local Storage & Session Storage

| Local Storage                         | Session Storage         |
| ------------------------------------- | ----------------------- |
| Permanent                             | Temporary               |
| Survives browser restart              | Removed when tab closes |
| Shared across tabs of the same origin | Separate for each tab   |
| Capacity ≈ 5–10 MB                    | Capacity ≈ 5 MB         |

---

# Data Format

Both Local Storage and Session Storage store **only strings**.

If you store an object:

```javascript
localStorage.setItem("user", {
  name: "Ketan",
});
```

Output:

```text
[object Object]
```

Use JSON instead.

---

# setItem()

Stores data.

## Syntax

```javascript
localStorage.setItem("key", "value");
```

Example

```javascript
localStorage.setItem("name", "Ketan");
```

---

# getItem()

Retrieves stored data.

```javascript
const name = localStorage.getItem("name");

console.log(name);
```

Output

```text
Ketan
```

---

# removeItem()

Removes one item.

```javascript
localStorage.removeItem("name");
```

---

# clear()

Removes all stored data.

```javascript
localStorage.clear();
```

---

# key()

Returns the key at a given index.

```javascript
console.log(localStorage.key(0));
```

---

# length

Returns the number of stored items.

```javascript
console.log(localStorage.length);
```

---

# Storing Objects

Use `JSON.stringify()`.

```javascript
const user = {
  name: "Ketan",

  age: 20,
};

localStorage.setItem("user", JSON.stringify(user));
```

---

# Retrieving Objects

Use `JSON.parse()`.

```javascript
const user = JSON.parse(localStorage.getItem("user"));

console.log(user.name);
```

Output

```text
Ketan
```

---

# Storing Arrays

```javascript
const colors = ["Red", "Blue", "Green"];

localStorage.setItem(
  "colors",

  JSON.stringify(colors),
);
```

Retrieve

```javascript
const colors = JSON.parse(localStorage.getItem("colors"));
```

---

# Session Storage Methods

Exactly the same methods.

```javascript
sessionStorage.setItem("theme", "dark");

sessionStorage.getItem("theme");

sessionStorage.removeItem("theme");

sessionStorage.clear();
```

---

# Local Storage Flow

```text
JavaScript

↓

JSON.stringify()

↓

localStorage

↓

Refresh Page

↓

JSON.parse()

↓

JavaScript Object
```

---

# Common Use Cases

## Local Storage

- Dark Mode
- Shopping Cart
- Remember Username
- Language Preference
- Recently Viewed Items

---

## Session Storage

- OTP Verification
- Temporary Form Data
- Current Session Details
- Multi-step Forms

---

# Example: Dark Mode

Save theme

```javascript
localStorage.setItem("theme", "dark");
```

Load theme

```javascript
const theme = localStorage.getItem("theme");

if (theme === "dark") {
  document.body.classList.add("dark");
}
```

---

# Example: Remember Username

```javascript
const username = input.value;

localStorage.setItem("username", username);
```

Retrieve

```javascript
input.value = localStorage.getItem("username");
```

---

# Storage Event

The `storage` event fires in **other browser tabs** when Local Storage changes.

```javascript
window.addEventListener("storage", (event) => {
  console.log(event.key);

  console.log(event.newValue);
});
```

---

# Limitations

- Stores only strings.
- Not suitable for large files.
- Not secure for passwords or tokens.
- Accessible through JavaScript.

---

# Best Practices

- Store only necessary data.
- Convert objects using `JSON.stringify()`.
- Parse objects using `JSON.parse()`.
- Remove unused data.
- Never store sensitive information (passwords, credit card details).

---

# Interview Questions

### 1. What is Local Storage?

A browser storage that keeps data permanently until removed.

---

### 2. What is Session Storage?

A browser storage that keeps data until the current tab is closed.

---

### 3. Difference between Local Storage and Session Storage?

| Local Storage      | Session Storage |
| ------------------ | --------------- |
| Permanent          | Temporary       |
| Shared across tabs | Per-tab         |

---

### 4. Why use `JSON.stringify()`?

To convert JavaScript objects into strings before storing them.

---

### 5. Why use `JSON.parse()`?

To convert stored JSON strings back into JavaScript objects.

---

### 6. Which methods are available?

- `setItem()`
- `getItem()`
- `removeItem()`
- `clear()`
- `key()`

---

### 7. Can Local Storage store objects directly?

❌ No.

It stores only strings.

---

### 8. Is Local Storage secure?

❌ No.

Do not store sensitive information.

---

# Practice

## Beginner

- Store your name.
- Retrieve your name.
- Remove your name.

---

## Intermediate

- Store an object.
- Store an array.
- Build a Remember Me feature.

---

## Advanced

- Build Dark Mode using Local Storage.
- Save Todo List in Local Storage.
- Save Form Data automatically.

---

# Mini Project

## Todo App with Local Storage

Features:

- Add Todo
- Delete Todo
- Save Todos in Local Storage
- Load Todos after page refresh

---

# Summary

| Method             | Purpose                |
| ------------------ | ---------------------- |
| `setItem()`        | Store data             |
| `getItem()`        | Retrieve data          |
| `removeItem()`     | Remove one item        |
| `clear()`          | Remove all items       |
| `key()`            | Get key by index       |
| `length`           | Number of stored items |
| `JSON.stringify()` | Object → String        |
| `JSON.parse()`     | String → Object        |

---

# Memory Trick

```text
Web Storage

↓

Local Storage

↓

Permanent

↓

Session Storage

↓

Temporary

↓

setItem()

↓

getItem()

↓

removeItem()

↓

clear()

↓

JSON.stringify()

↓

JSON.parse()
```
