# What are Debouncing and Throttling?

Both **Debouncing** and **Throttling** are performance optimization techniques used to control how often a function executes when an event fires repeatedly.

Examples of frequent events:

- Typing (`input`)
- Scrolling (`scroll`)
- Resizing (`resize`)
- Mouse movement (`mousemove`)

---

# Debouncing

## Definition

**Debouncing** delays the execution of a function until the user stops triggering the event for a specified amount of time.

**Simple Definition:**

> Wait until the user finishes an action, then execute the function once.

---

## How It Works

```text
User Types

↓

Clear Previous Timer

↓

Start New Timer

↓

User Stops Typing

↓

Delay Ends

↓

Function Executes
```

---

## Syntax

```javascript
function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
```

---

## Example

```javascript
function search(query) {
  console.log("Searching:", query);
}

const debouncedSearch = debounce(search, 500);

input.addEventListener("input", (e) => {
  debouncedSearch(e.target.value);
});
```

---

## Output

If the user types:

```text
H
He
Hel
Hell
Hello
```

Without Debouncing:

```text
5 API Requests
```

With Debouncing (500ms):

```text
1 API Request
```

---

## Real-Life Uses

- Search bar
- Search suggestions
- Auto-save
- Form validation
- Live filtering
- Resize event

---

## Advantages

- Reduces API requests
- Improves performance
- Better user experience
- Prevents unnecessary function calls

---

## Disadvantages

- Function execution is delayed
- Not suitable when continuous updates are required

---

# Throttling

## Definition

**Throttling** limits how often a function can execute.

**Simple Definition:**

> Execute the function at most once every specified time interval.

---

## How It Works

```text
Event Starts

↓

Run Function

↓

Ignore Events During Delay

↓

Delay Ends

↓

Run Again
```

---

## Syntax

```javascript
function throttle(fn, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      fn(...args);
    }
  };
}
```

---

## Example

```javascript
function handleScroll() {
  console.log("Scrolling...");
}

const throttledScroll = throttle(handleScroll, 1000);

window.addEventListener("scroll", throttledScroll);
```

---

## Output

User scrolls continuously:

```text
Scroll Scroll Scroll Scroll Scroll
```

Without Throttling:

```text
100 Function Calls
```

With Throttling (1 second):

```text
Run

(wait)

Run

(wait)

Run
```

---

## Real-Life Uses

- Scroll events
- Mouse movement
- Window resize
- Infinite scrolling
- Button click protection
- Drag and drop

---

## Advantages

- Improves performance
- Reduces CPU usage
- Limits repeated execution
- Suitable for continuous events

---

## Disadvantages

- Some events are skipped
- May not capture every user action

---

# Debouncing vs Throttling

| Feature        | Debouncing                        | Throttling                |
| -------------- | --------------------------------- | ------------------------- |
| Meaning        | Wait until user stops             | Run at fixed intervals    |
| Execution      | Once after inactivity             | Once every delay interval |
| Best For       | Search, validation, auto-save     | Scroll, resize, mousemove |
| API Calls      | Greatly reduced                   | Limited but continuous    |
| Implementation | `setTimeout()` + `clearTimeout()` | Timestamp or timer flag   |

---

# Visual Difference

## Debouncing

```text
Typing

A
AB
ABC
ABCD

(wait)

↓

Run Once
```

---

## Throttling

```text
Scrolling

↓

Run

↓

Ignore

↓

Run

↓

Ignore

↓

Run
```

---

# When to Use Which?

### Use Debouncing

- Search input
- Form validation
- Auto-save
- Search suggestions
- Live filtering

---

### Use Throttling

- Scroll event
- Resize event
- Mouse movement
- Infinite scrolling
- Button click protection

---

# Interview Questions

### 1. What is Debouncing?

Delays function execution until the event stops for a specified time.

---

### 2. What is Throttling?

Limits function execution to once every specified interval.

---

### 3. Difference between Debouncing and Throttling?

- Debouncing waits until the user stops.
- Throttling runs continuously but at controlled intervals.

---

### 4. Which is better for Search?

✅ Debouncing

---

### 5. Which is better for Scroll Events?

✅ Throttling

---

### 6. Why do we use Debouncing and Throttling?

To improve performance by reducing unnecessary function executions.

---

# Summary

| Debouncing                     | Throttling                       |
| ------------------------------ | -------------------------------- |
| Waits for inactivity           | Runs at fixed intervals          |
| Uses `clearTimeout()`          | Uses timestamps or timer control |
| Best for search and validation | Best for scroll and resize       |
| Executes once                  | Executes repeatedly with a limit |

---

# Easy Trick to Remember

```text
Debounce = WAIT

User Types

↓

Stop Typing

↓

Run Once
```

```text
Throttle = LIMIT

Event

↓

Run

↓

Wait

↓

Run

↓

Wait

↓

Run
```

## Memory Trick

- **Debounce = Delay until Done**
- **Throttle = Limit the Rate**
