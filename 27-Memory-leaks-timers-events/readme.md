# What is a Memory Leak?

A **Memory Leak** occurs when memory that is no longer needed is **not released**, causing the application to consume more and more memory over time.

In simple words:

> **Objects remain in memory even though they are no longer being used.**

This can make your application:

- Slow
- Laggy
- Unresponsive
- Crash due to high memory usage

---

# How JavaScript Manages Memory

JavaScript automatically manages memory using the **Garbage Collector (GC)**.

```text
Create Object

↓

Use Object

↓

No References Left

↓

Garbage Collector Removes It

↓

Memory Freed
```

If an object is still referenced, the Garbage Collector **cannot** remove it.

---

# Common Causes of Memory Leaks

1. Timers (`setInterval`, `setTimeout`)
2. Event Listeners
3. Global Variables
4. Closures
5. Detached DOM Elements
6. Large Cached Objects

---

# 1. Memory Leak with Timers

## Bad Example

```javascript
const timer = setInterval(() => {
  console.log("Running...");
}, 1000);
```

If you never stop this timer, it keeps running forever.

The callback and any referenced variables stay in memory.

---

## Good Example

```javascript
const timer = setInterval(() => {
  console.log("Running...");
}, 1000);

clearInterval(timer);
```

Always clear intervals when they are no longer needed.

---

## setTimeout

```javascript
const timer = setTimeout(() => {
  console.log("Done");
}, 5000);

clearTimeout(timer);
```

If the timeout is no longer needed, cancel it.

---

# 2. Memory Leak with Event Listeners

## Bad Example

```javascript
button.addEventListener("click", handleClick);
```

If the button is removed from the page but the listener isn't cleaned up, it can keep references alive.

---

## Good Example

```javascript
button.removeEventListener("click", handleClick);
```

Always remove listeners when they are no longer needed.

---

# 3. Global Variables

## Bad Example

```javascript
users = [];
```

Without `let`, `const`, or `var`, this becomes a global variable (in non-strict mode).

Global variables stay in memory for the lifetime of the page.

---

## Good Example

```javascript
const users = [];
```

Keep variables scoped as narrowly as possible.

---

# 4. Closures

Closures are useful but can accidentally keep data alive.

```javascript
function createUser() {
  const largeData = new Array(100000).fill("Data");

  return function () {
    console.log("Hello");
  };
}
```

The returned function closes over `largeData`, so it may remain in memory as long as that function exists.

---

# 5. Detached DOM Elements

## Bad Example

```javascript
const div = document.getElementById("box");

document.body.removeChild(div);
```

If another variable still references `div`, the browser cannot free its memory.

---

## Good Example

```javascript
let div = document.getElementById("box");

document.body.removeChild(div);

div = null;
```

Remove unnecessary references when appropriate.

---

# 6. Large Arrays or Objects

```javascript
let data = new Array(1000000).fill("JavaScript");
```

If `data` is no longer needed:

```javascript
data = null;
```

This removes your reference, allowing the Garbage Collector to reclaim the memory if nothing else references it.

---

# How Garbage Collection Works

```text
Object Created

↓

Reference Exists?

Yes
↓

Keep in Memory

No
↓

Garbage Collector Removes It
```

---

# How to Prevent Memory Leaks

✅ Clear timers (`clearInterval`, `clearTimeout`)

✅ Remove event listeners

✅ Avoid unnecessary global variables

✅ Remove references to unused objects

✅ Be careful with closures holding large data

✅ Clean up detached DOM elements

---

# Interview Questions

### 1. What is a Memory Leak?

Memory that is no longer needed but cannot be freed because references to it still exist.

---

### 2. What is Garbage Collection?

An automatic process that removes objects that are no longer reachable.

---

### 3. Can `setInterval()` cause a Memory Leak?

✅ Yes.

If you never call `clearInterval()`, the callback continues running and may keep references alive.

---

### 4. Can Event Listeners cause Memory Leaks?

✅ Yes.

If they are not removed when no longer needed, they can keep objects in memory.

---

### 5. How do you prevent Memory Leaks?

- Clear timers
- Remove event listeners
- Avoid globals
- Release unnecessary references
- Clean up DOM elements

---

# Summary

| Cause            | Solution                                  |
| ---------------- | ----------------------------------------- |
| `setInterval()`  | `clearInterval()`                         |
| `setTimeout()`   | `clearTimeout()`                          |
| Event Listeners  | `removeEventListener()`                   |
| Global Variables | Use `let` or `const`                      |
| Detached DOM     | Remove references                         |
| Closures         | Avoid capturing unnecessary large objects |

---

# Easy Trick to Remember

```text
Create Memory

↓

Still Referenced?

Yes
↓

❌ Cannot Remove

No
↓

✅ Garbage Collector Frees Memory
```

**Rule:**

> If something is no longer needed, remove the references to it so the Garbage Collector can reclaim the memory.
