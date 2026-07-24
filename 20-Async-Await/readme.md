# What is Async/Await?

**Async/Await** is a modern JavaScript feature used to work with **Promises** in a cleaner and more readable way.

In simple words:

> **Async/Await lets you write asynchronous code that looks like synchronous code.**

It is built **on top of Promises**.

---

# Why Do We Need Async/Await?

Using Promises:

```javascript
login().then(getUser).then(getPosts).then(showPosts).catch(handleError);
```

Works fine, but complex applications can become harder to read.

Using Async/Await:

```javascript
async function loadData() {
  try {
    const user = await login();
    const posts = await getPosts(user.id);

    console.log(posts);
  } catch (error) {
    console.log(error);
  }
}
```

Much cleaner and easier to understand.

---

# async Keyword

The **`async`** keyword makes a function always return a **Promise**.

Syntax:

```javascript
async function hello() {
  return "Hello";
}
```

Even though `"Hello"` is a string, JavaScript automatically wraps it in a Promise.

```javascript
hello().then(console.log);
```

Output:

```text
Hello
```

---

# await Keyword

The **`await`** keyword pauses the execution of the current `async` function until the Promise settles.

Syntax:

```javascript
const result = await promise;
```

`await` can only be used:

- Inside an `async` function
- Or at the top level of an ES module (where supported)

---

# Basic Example

```javascript
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data Loaded");
    }, 2000);
  });
}

async function getData() {
  const result = await fetchData();

  console.log(result);
}

getData();
```

Output (after 2 seconds):

```text
Data Loaded
```

---

# How Async/Await Works

```text
Call Async Function

↓

Promise Starts

↓

await

↓

Pause Current Async Function

↓

Other JavaScript Continues Running

↓

Promise Resolves

↓

Continue Execution
```

---

# Error Handling

Always use **`try...catch`**.

```javascript
async function getUsers() {
  try {
    const response = await fetch(url);

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
```

---

# Multiple await (Sequential)

```javascript
const user = await getUser();

const posts = await getPosts(user.id);

const comments = await getComments(posts[0].id);
```

Each operation waits for the previous one.

---

# Parallel Execution

If the operations are independent, use `Promise.all()`.

```javascript
const [users, posts] = await Promise.all([fetchUsers(), fetchPosts()]);
```

Both requests start at the same time, making the code faster.

---

# Async Function Returns a Promise

```javascript
async function add() {
  return 10;
}
```

Equivalent to:

```javascript
function add() {
  return Promise.resolve(10);
}
```

---

# Using Fetch API

```javascript
async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const users = await response.json();

    console.log(users);
  } catch (error) {
    console.log(error);
  }
}

getUsers();
```

---

# await with Timers

```javascript
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function demo() {
  console.log("Start");

  await wait(2000);

  console.log("End");
}

demo();
```

Output:

```text
Start

(2 seconds)

End
```

---

# Async/Await Flow

```text
Call Async Function

↓

Promise Starts

↓

await

↓

Promise Pending

↓

Promise Resolved?

Yes
↓

Continue Execution

↓

Return Promise
```

---

# Promise vs Async/Await

| Promise                      | Async/Await      |
| ---------------------------- | ---------------- |
| `.then()`                    | `await`          |
| `.catch()`                   | `try...catch`    |
| Chaining                     | Sequential style |
| Less readable in long chains | Easier to read   |

---

# Advantages

- Cleaner syntax
- Easier to understand
- Better error handling
- Looks like synchronous code
- Easy debugging

---

# Disadvantages

- Must use `async`
- `await` only works with Promises
- Sequential `await`s can be slower if tasks are independent

---

# Real-Life Example

```text
Order Pizza

↓

Order Sent

↓

Wait for Pizza

↓

Pizza Arrives

↓

Eat Pizza
```

You cannot eat before the pizza arrives.

`await` works the same way.

---

# Interview Questions

### 1. What is Async/Await?

A cleaner syntax for working with Promises.

---

### 2. What does `async` do?

It makes a function always return a Promise.

---

### 3. What does `await` do?

It pauses the current async function until a Promise settles.

---

### 4. Can `await` be used without `async`?

❌ No (except top-level `await` in ES modules).

---

### 5. Does `await` block JavaScript?

❌ No.

It pauses only the current async function. The JavaScript event loop continues running other tasks.

---

### 6. Why use `try...catch`?

To handle rejected Promises and other errors.

---

### 7. When should you use `Promise.all()` with `await`?

When multiple asynchronous tasks are independent and can run in parallel.

---

### 8. Does an async function always return a Promise?

✅ Yes.

---

# Summary

| Keyword         | Purpose                           |
| --------------- | --------------------------------- |
| `async`         | Makes a function return a Promise |
| `await`         | Waits for a Promise to settle     |
| `try...catch`   | Handles errors                    |
| `Promise.all()` | Runs Promises in parallel         |

---

# Easy Trick to Remember

```text
async

↓

Returns Promise

↓

await

↓

Wait for Promise

↓

Continue

↓

try...catch

↓

Handle Errors
```

## Memory Trick

- **`async` = Promise Creator**
- **`await` = Wait for Result**
- **`try...catch` = Handle Errors**
- **`Promise.all()` = Run Together**
