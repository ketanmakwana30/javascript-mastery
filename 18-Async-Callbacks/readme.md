# What is a Callback?

A **Callback** is a function that is **passed as an argument to another function** and is executed later.

In simple words:

> **A callback is a function that is called after another function finishes its work.**

---

# Why Do We Need Callbacks?

JavaScript is **single-threaded** and many operations take time, such as:

- API Requests
- File Reading
- Database Queries
- Timers
- User Events

Callbacks allow these operations to complete before executing the next piece of code.

---

# Basic Syntax

```javascript
function greet(name) {
  console.log("Hello " + name);
}

function processUser(callback) {
  callback("Ketan");
}

processUser(greet);
```

Output:

```text
Hello Ketan
```

---

# Anonymous Callback

```javascript
function calculate(a, b, callback) {
  callback(a, b);
}

calculate(10, 20, function (x, y) {
  console.log(x + y);
});
```

Output:

```text
30
```

---

# Arrow Function Callback

```javascript
calculate(10, 20, (x, y) => {
  console.log(x * y);
});
```

Output:

```text
200
```

---

# Callback with setTimeout()

```javascript
console.log("Start");

setTimeout(() => {
  console.log("After 2 Seconds");
}, 2000);

console.log("End");
```

Output:

```text
Start
End
After 2 Seconds
```

The callback runs only after the timer completes.

---

# Callback Flow

```text
Function Starts

↓

Pass Callback

↓

Main Function Executes

↓

Operation Completes

↓

Callback Executes
```

---

# Synchronous Callback

Runs immediately.

```javascript
function greet(callback) {
  console.log("Hello");

  callback();
}

greet(() => {
  console.log("World");
});
```

Output:

```text
Hello
World
```

---

# Asynchronous Callback

Runs later.

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Done");
}, 1000);

console.log("Finish");
```

Output:

```text
Start
Finish
Done
```

---

# Real-Life Example

```text
Order Pizza

↓

Wait

↓

Pizza Ready

↓

Call Customer
```

The phone call is the callback.

---

# Callback Hell

When callbacks become deeply nested.

```javascript
login(function () {
  getUser(function () {
    getPosts(function () {
      getComments(function () {
        console.log("Done");
      });
    });
  });
});
```

Problems:

- Hard to read
- Difficult to debug
- Difficult to maintain

This is called **Callback Hell** or the **Pyramid of Doom**.

---

# Solution to Callback Hell

Use:

- Promises
- Async/Await

Example:

```javascript
login().then(getUser).then(getPosts).then(getComments).catch(console.error);
```

Or:

```javascript
async function loadData() {
  try {
    const user = await login();

    const posts = await getPosts(user.id);

    const comments = await getComments(posts[0].id);
  } catch (error) {
    console.log(error);
  }
}
```

---

# Advantages

- Simple to use
- Supports asynchronous programming
- Works with timers and events
- Flexible

---

# Disadvantages

- Callback Hell
- Difficult error handling
- Hard to maintain large applications
- Less readable than Promises or Async/Await

---

# Common Uses

- `setTimeout()`
- `setInterval()`
- Event Listeners
- Array methods (`forEach`, `map`, `filter`)
- Node.js asynchronous APIs

---

# Interview Questions

### 1. What is a Callback?

A function passed as an argument to another function that is executed later.

---

### 2. Why are callbacks used?

To execute code after another operation has completed, especially asynchronous operations.

---

### 3. What is Callback Hell?

Deeply nested callbacks that make code difficult to read and maintain.

---

### 4. How do Promises improve callbacks?

Promises flatten nested callbacks and provide better error handling.

---

### 5. Difference between Synchronous and Asynchronous Callbacks?

| Synchronous          | Asynchronous                    |
| -------------------- | ------------------------------- |
| Executes immediately | Executes later                  |
| Doesn't wait         | Waits for an operation or event |

---

### 6. Give examples of callbacks.

- `setTimeout()`
- `setInterval()`
- `addEventListener()`
- `forEach()`
- `map()`

---

# Callback vs Promise vs Async/Await

| Callback                    | Promise                           | Async/Await                      |
| --------------------------- | --------------------------------- | -------------------------------- |
| Function passed as argument | Object representing future result | Cleaner syntax built on Promises |
| Can lead to Callback Hell   | Supports chaining                 | Looks like synchronous code      |
| Harder error handling       | `.catch()`                        | `try...catch`                    |

---

# Summary

| Concept               | Description                           |
| --------------------- | ------------------------------------- |
| Callback              | Function passed to another function   |
| Synchronous Callback  | Executes immediately                  |
| Asynchronous Callback | Executes after an operation completes |
| Callback Hell         | Deeply nested callbacks               |
| Solution              | Promises and Async/Await              |

---

# Easy Trick to Remember

```text
Main Function

↓

Operation Running

↓

Operation Finished

↓

Callback Executes
```

## Memory Trick

- **Callback = "Call me back when you're done."**
- **Nested callbacks = Callback Hell**
- **Promises solve Callback Hell**
- **Async/Await makes Promises easier to read**
