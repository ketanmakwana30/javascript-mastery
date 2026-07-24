# What is a Promise?

A **Promise** is a JavaScript object that represents the **eventual completion (success)** or **failure** of an asynchronous operation.

In simple words:

> **A Promise is a promise that a value will be available now, later, or never.**

Examples:

- Fetching API data
- Reading files
- Database queries
- Timers
- Network requests

---

# Why Do We Need Promises?

Before Promises, JavaScript used **Callbacks**.

Nested callbacks created **Callback Hell**.

```javascript
login(function () {
  getUser(function () {
    getPosts(function () {
      console.log("Done");
    });
  });
});
```

Problems:

- Hard to read
- Hard to debug
- Difficult to maintain

Promises solve these problems.

---

# Promise States

A Promise has **three states**.

```text
          Promise

             │
             ▼

        Pending

        /      \

Resolved      Rejected

(Fulfilled)    (Failed)
```

### 1. Pending

The operation is still running.

Example:

```javascript
fetch(url);
```

The request has started but hasn't finished.

---

### 2. Fulfilled (Resolved)

The operation completed successfully.

```javascript
resolve(data);
```

---

### 3. Rejected

The operation failed.

```javascript
reject(error);
```

---

# Creating a Promise

```javascript
const promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});
```

---

# Promise Constructor

```javascript
new Promise((resolve, reject) => {});
```

The constructor receives two functions:

- `resolve()`
- `reject()`

---

# Consuming a Promise

```javascript
promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
```

---

# Full Example

```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data Loaded");
  }, 2000);
});

promise.then((data) => {
  console.log(data);
});
```

Output after 2 seconds:

```text
Data Loaded
```

---

# reject()

```javascript
const promise = new Promise((resolve, reject) => {
  reject("Server Error");
});

promise.catch((error) => {
  console.log(error);
});
```

Output:

```text
Server Error
```

---

# then()

`then()` executes when the Promise is fulfilled.

```javascript
promise.then((value) => {
  console.log(value);
});
```

---

# catch()

`catch()` executes when the Promise is rejected.

```javascript
promise.catch((error) => {
  console.log(error);
});
```

---

# finally()

`finally()` executes whether the Promise is fulfilled or rejected.

```javascript
promise
  .then(() => {})
  .catch(() => {})
  .finally(() => {
    console.log("Finished");
  });
```

Useful for:

- Hiding loaders
- Closing connections
- Cleaning up resources

---

# Promise Chaining

```javascript
login()
  .then(getUser)

  .then(getPosts)

  .then(showPosts)

  .catch(handleError);
```

Each `.then()` returns another Promise.

---

# Promise Methods

## Promise.resolve()

Creates a resolved Promise.

```javascript
Promise.resolve("Hello").then(console.log);
```

---

## Promise.reject()

Creates a rejected Promise.

```javascript
Promise.reject("Error").catch(console.log);
```

---

## Promise.all()

Runs multiple Promises in parallel.

```javascript
Promise.all([fetchUsers(), fetchPosts(), fetchComments()])

  .then((data) => {
    console.log(data);
  });
```

### Behavior

- All succeed → returns all results.
- One fails → rejects immediately.

---

## Promise.race()

Returns the first Promise to settle.

```javascript
Promise.race([promise1, promise2]);
```

Useful for:

- Timeouts
- Fastest response

---

## Promise.allSettled()

Waits for every Promise.

```javascript
Promise.allSettled([promise1, promise2]);
```

Returns the result of every Promise, whether fulfilled or rejected.

---

## Promise.any()

Returns the first fulfilled Promise.

```javascript
Promise.any([promise1, promise2]);
```

Ignores rejected Promises unless all reject.

---

# Promise Flow

```text
Create Promise

↓

Pending

↓

Success?
      │
 ┌────┴────┐
 │         │
Yes        No
 │         │
 ▼         ▼
resolve   reject
 │         │
 ▼         ▼
then()   catch()

↓

finally()
```

---

# Promise vs Callback

| Callback            | Promise                    |
| ------------------- | -------------------------- |
| Callback Hell       | Cleaner                    |
| Hard to maintain    | Easy to read               |
| Nested code         | Chaining                   |
| Poor error handling | Centralized error handling |

---

# Promise vs Async/Await

| Promise               | Async/Await                 |
| --------------------- | --------------------------- |
| Uses `.then()`        | Uses `await`                |
| Uses `.catch()`       | Uses `try...catch`          |
| Good for chaining     | Easier to read              |
| Slightly more verbose | Looks like synchronous code |

---

# Real-Life Example

```text
Food Delivery

Order Food

↓

Pending

↓

Restaurant Accepts?

Yes
↓

Food Delivered

No
↓

Order Cancelled
```

---

# Interview Questions

### 1. What is a Promise?

An object representing the eventual completion or failure of an asynchronous operation.

---

### 2. What are the three Promise states?

- Pending
- Fulfilled (Resolved)
- Rejected

---

### 3. Difference between `resolve()` and `reject()`?

- `resolve()` → Success
- `reject()` → Failure

---

### 4. Difference between `.then()` and `.catch()`?

- `.then()` handles fulfilled Promises.
- `.catch()` handles rejected Promises.

---

### 5. What is `finally()`?

Runs regardless of success or failure.

---

### 6. Difference between `Promise.all()` and `Promise.race()`?

- `Promise.all()` waits for all Promises.
- `Promise.race()` returns the first Promise to settle.

---

### 7. Difference between `Promise.all()` and `Promise.allSettled()`?

- `Promise.all()` fails immediately if one Promise rejects.
- `Promise.allSettled()` waits for all Promises and reports every result.

---

### 8. What problem do Promises solve?

They eliminate Callback Hell and improve asynchronous code readability.

---

# Summary

| Method                 | Purpose                    |
| ---------------------- | -------------------------- |
| `then()`               | Handle success             |
| `catch()`              | Handle failure             |
| `finally()`            | Always execute             |
| `resolve()`            | Create a fulfilled Promise |
| `reject()`             | Create a rejected Promise  |
| `Promise.all()`        | Wait for all Promises      |
| `Promise.race()`       | First Promise to settle    |
| `Promise.allSettled()` | Wait for all outcomes      |
| `Promise.any()`        | First fulfilled Promise    |

---

# Easy Trick to Remember

```text
Promise

↓

Pending

↓

Success?
      │
 ┌────┴────┐
 │         │
Yes        No
 │         │
 ▼         ▼
then()   catch()

↓

finally()
```

## Memory Trick

- **Promise = Future Result**
- **`then()` = Success**
- **`catch()` = Error**
- **`finally()` = Always Runs**
- **`Promise.all()` = Everyone must finish**
- **`Promise.race()` = First one wins**
- **`Promise.any()` = First success wins**
