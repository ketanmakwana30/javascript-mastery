# What are Custom Utilities?

**Custom Utilities (Utility Functions)** are small, reusable functions that perform common tasks and can be used throughout your application.

In simple words:

> **Write a function once and reuse it everywhere instead of writing the same code repeatedly.**

---

# Why Use Custom Utilities?

Without Utilities:

```javascript
const username = input.value.trim();

const email = emailInput.value.trim();

const city = cityInput.value.trim();
```

The same logic is repeated many times.

With Utilities:

```javascript
trimText(input.value);

trimText(email.value);

trimText(city.value);
```

One function can be reused everywhere.

---

# Benefits

- Reusable code
- Less duplication
- Easier maintenance
- Cleaner code
- Better readability
- Easier testing

---

# Utility Flow

```text id="jlwm7r"
Application

↓

Needs Common Task

↓

Call Utility Function

↓

Return Result
```

---

# Example 1 – Capitalize Text

Without Utility

```javascript
let name = "ketan";

name = name.charAt(0).toUpperCase() + name.slice(1);
```

With Utility

```javascript
function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

console.log(capitalize("ketan"));
```

Output

```text
Ketan
```

---

# Example 2 – Random Number

```javascript
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomNumber(1, 100));
```

---

# Example 3 – Format Currency

```javascript
function formatCurrency(amount) {
  return `₹${amount.toFixed(2)}`;
}

console.log(formatCurrency(250));
```

Output

```text
₹250.00
```

---

# Example 4 – Email Validation

```javascript
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(email);
}
```

Usage

```javascript
console.log(isValidEmail("abc@gmail.com"));
```

Output

```text
true
```

---

# Example 5 – Phone Validation

```javascript
function isValidPhone(phone) {
  return /^\d{10}$/.test(phone);
}
```

---

# Example 6 – Generate ID

```javascript
function generateId() {
  return Date.now();
}
```

Output

```text
1721812345678
```

---

# Example 7 – Convert to Title Case

```javascript
function titleCase(text) {
  return text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

console.log(titleCase("ketan makwana"));
```

Output

```text
Ketan Makwana
```

---

# Example 8 – Debounce Utility

```javascript
function debounce(callback, delay) {
  let timer;

  return function () {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback();
    }, delay);
  };
}
```

Used for:

- Search bar
- Resize
- Auto save

---

# Example 9 – Throttle Utility

```javascript
function throttle(callback, delay) {
  let waiting = false;

  return function () {
    if (waiting) return;

    callback();

    waiting = true;

    setTimeout(() => {
      waiting = false;
    }, delay);
  };
}
```

Used for:

- Scroll
- Mouse Move
- Resize

---

# Example 10 – Local Storage Utility

```javascript
function save(key, value) {
  localStorage.setItem(
    key,

    JSON.stringify(value),
  );
}

function get(key) {
  return JSON.parse(localStorage.getItem(key));
}
```

Usage

```javascript
save("user", {
  name: "Ketan",
});

console.log(get("user"));
```

---

# Example 11 – Copy Array

```javascript
function cloneArray(array) {
  return [...array];
}
```

---

# Example 12 – Check Empty String

```javascript
function isEmpty(text) {
  return text.trim() === "";
}
```

---

# Example 13 – Sleep Utility

```javascript
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
```

Usage

```javascript
await sleep(2000);

console.log("Done");
```

---

# Organizing Utilities

Project Structure

```text id="7pslhk"
project/

│── app.js

│── utils/

│      ├── validation.js

│      ├── helpers.js

│      ├── storage.js

│      ├── date.js

│      └── api.js
```

---

# Example

helpers.js

```javascript
export function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
```

app.js

```javascript
import { capitalize } from "./helpers.js";

console.log(capitalize("ketan"));
```

---

# Real-Life Example

Imagine a toolbox.

```text id="7rwnc4"
Toolbox

↓

Hammer

↓

Screwdriver

↓

Pliers

↓

Wrench
```

You don't buy a new hammer every time.

Similarly, utility functions are written **once** and reused everywhere.

---

# Best Practices

- Keep utility functions small.
- One utility = One responsibility.
- Avoid depending on global variables.
- Make utilities reusable.
- Group related utilities together.
- Use `import` and `export`.

---

# Advantages

- Less code duplication
- Easier debugging
- Reusable functions
- Cleaner project structure
- Better maintainability

---

# Disadvantages

- Too many utility files can become difficult to manage.
- Poorly named utilities can cause confusion.

---

# Interview Questions

### 1. What is a Utility Function?

A reusable function that performs a common task across the application.

---

### 2. Why use Utility Functions?

To reduce duplicate code and improve maintainability.

---

### 3. Where should Utility Functions be stored?

In a dedicated `utils/` or `helpers/` folder.

---

### 4. Give examples of Utility Functions.

- Email validation
- Capitalize text
- Format currency
- Random number generator
- Debounce
- Throttle
- Local Storage helpers

---

### 5. Difference between Utility Function and Business Logic?

| Utility Function     | Business Logic                         |
| -------------------- | -------------------------------------- |
| Generic and reusable | Specific to the application's features |
| Used in many places  | Used for a particular workflow         |

---

# Practice

## Beginner

- Create `capitalize()`
- Create `isEmpty()`
- Create `randomNumber()`

---

## Intermediate

- Create `formatCurrency()`
- Create `isValidEmail()`
- Create `isValidPhone()`

---

## Advanced

- Build `debounce()`
- Build `throttle()`
- Build Local Storage helper functions
- Build a reusable Date Formatter

---

# Summary

| Utility            | Purpose                 |
| ------------------ | ----------------------- |
| `capitalize()`     | Capitalize first letter |
| `randomNumber()`   | Generate random number  |
| `formatCurrency()` | Format currency         |
| `isValidEmail()`   | Validate email          |
| `isValidPhone()`   | Validate phone          |
| `isEmpty()`        | Check empty string      |
| `cloneArray()`     | Copy array              |
| `save()` / `get()` | Local Storage helpers   |
| `sleep()`          | Delay execution         |
| `debounce()`       | Delay frequent calls    |
| `throttle()`       | Limit frequent calls    |

---

# Memory Trick

```text id="fv2j9j"
Utility Functions

↓

Reusable

↓

Small

↓

One Task

↓

Import

↓

Use Anywhere

↓

Clean Code
```

# Advanced Custom Utility Functions

---

# 1. Custom map()

Creates a new array by applying a callback to every element.

```javascript
function myMap(array, callback) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }

  return result;
}
```

Example

```javascript
const numbers = [1, 2, 3];

const doubled = myMap(numbers, (num) => num * 2);

console.log(doubled);
```

Output

```text
[2,4,6]
```

---

# 2. Custom filter()

Returns only matching elements.

```javascript
function myFilter(array, callback) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }

  return result;
}
```

Example

```javascript
const even = myFilter([1, 2, 3, 4], (n) => n % 2 === 0);

console.log(even);
```

Output

```text
[2,4]
```

---

# 3. Custom reduce()

Reduces an array into a single value.

```javascript
function myReduce(array, callback, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i]);
  }

  return accumulator;
}
```

Example

```javascript
const total = myReduce(
  [1, 2, 3, 4],

  (sum, num) => sum + num,

  0,
);

console.log(total);
```

Output

```text
10
```

---

# 4. Shallow Clone

Copies only the first level.

```javascript
function shallowClone(obj) {
  return { ...obj };
}
```

Example

```javascript
const user = {
  name: "Ketan",

  address: {
    city: "Mahuva",
  },
};

const copy = shallowClone(user);
```

### Problem

```javascript
copy.address.city = "Rajkot";

console.log(user.address.city);
```

Output

```text
Rajkot
```

Nested objects are still shared.

---

# 5. Deep Clone

Copies every nested object.

### Modern Way

```javascript
const copy = structuredClone(user);
```

---

### JSON Method

```javascript
const copy = JSON.parse(JSON.stringify(user));
```

---

### Recursive Deep Clone Utility

```javascript
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  const clone = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    clone[key] = deepClone(obj[key]);
  }

  return clone;
}
```

Example

```javascript
const user = {
  name: "Ketan",

  address: {
    city: "Mahuva",
  },
};

const copy = deepClone(user);

copy.address.city = "Rajkot";

console.log(user.address.city);
```

Output

```text
Mahuva
```

Original object remains unchanged.

---

# Shallow vs Deep Clone

| Shallow Clone                    | Deep Clone                            |
| -------------------------------- | ------------------------------------- |
| Copies first level only          | Copies all nested levels              |
| Nested objects share memory      | Completely independent                |
| Faster                           | Slower                                |
| Uses spread or `Object.assign()` | Uses `structuredClone()` or recursion |

---

# 6. Remove Duplicate Values

```javascript
function unique(array) {
  return [...new Set(array)];
}
```

Example

```javascript
console.log(unique([1, 2, 2, 3, 3, 4]));
```

Output

```text
[1,2,3,4]
```

---

# 7. Group Array by Property

```javascript
function groupBy(array, key) {
  return array.reduce((group, item) => {
    const value = item[key];

    group[value] = group[value] || [];

    group[value].push(item);

    return group;
  }, {});
}
```

---

# 8. Array Chunk Utility

```javascript
function chunk(array, size) {
  const result = [];

  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }

  return result;
}
```

Example

```javascript
console.log(chunk([1, 2, 3, 4, 5, 6], 2));
```

Output

```text
[[1,2],[3,4],[5,6]]
```

---

# 9. Delay (Sleep)

```javascript
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
```

Usage

```javascript
await sleep(2000);

console.log("Done");
```

---

# 10. Retry Utility

Retries an async function if it fails.

```javascript
async function retry(fn, retries) {
  while (retries > 0) {
    try {
      return await fn();
    } catch {
      retries--;
    }
  }
}
```

---

# Most Common Utilities Used in Real Projects

- `debounce()`
- `throttle()`
- `deepClone()`
- `shallowClone()`
- `myMap()`
- `myFilter()`
- `myReduce()`
- `capitalize()`
- `formatCurrency()`
- `isValidEmail()`
- `isValidPhone()`
- `sleep()`
- `groupBy()`
- `chunk()`
- `unique()`

---

# Interview Questions

### 1. Why create your own `map()` if JavaScript already has one?

To understand how array methods work internally and to customize behavior when needed.

---

### 2. What is the difference between Shallow Clone and Deep Clone?

- **Shallow Clone:** Copies only the first level; nested objects remain shared.
- **Deep Clone:** Creates completely independent copies, including nested objects.

---

### 3. Which is the best modern method for deep cloning?

✅ `structuredClone()` (when supported).

---

### 4. Why are utility functions important?

They reduce duplicate code, improve readability, and make applications easier to maintain.

---

# Memory Trick

```text
Utilities

↓

myMap()

↓

myFilter()

↓

myReduce()

↓

Shallow Clone

↓

Deep Clone

↓

Debounce

↓

Throttle

↓

Helpers

↓

Reusable Code
```
