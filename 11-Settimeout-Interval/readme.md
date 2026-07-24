# setTimeout() & setInterval()

# What is setTimeout()?

`setTimeout()` is a built-in JavaScript function that executes a function **once after a specified delay**.

In simple words:

> **Run a function one time after waiting for a specified number of milliseconds.**

---

# Syntax

```javascript
setTimeout(function, delay);
```

OR

```javascript
setTimeout(() => {
  // Code
}, 2000);
```

---

# Example

```javascript
setTimeout(() => {
  console.log("Hello");
}, 2000);
```

Output

```text
(Wait 2 Seconds)

Hello
```

---

# Delay Unit

The delay is measured in **milliseconds (ms).**

```text
1000 ms = 1 second

2000 ms = 2 seconds

5000 ms = 5 seconds
```

---

# Storing Timeout ID

```javascript
const timer = setTimeout(() => {
  console.log("Hello");
}, 3000);
```

`setTimeout()` returns a **Timer ID**.

---

# clearTimeout()

Stops a scheduled timeout before it runs.

```javascript
const timer = setTimeout(() => {
  console.log("Hello");
}, 3000);

clearTimeout(timer);
```

Output

```text
Nothing Happens
```

---

# Passing Arguments

```javascript
function greet(name) {
  console.log(`Hello ${name}`);
}

setTimeout(greet, 2000, "Ketan");
```

Output

```text
Hello Ketan
```

---

# What is setInterval()?

`setInterval()` executes a function **repeatedly after every specified interval.**

In simple words:

> **Run the same function again and again after a fixed time.**

---

# Syntax

```javascript
setInterval(function, delay);
```

---

# Example

```javascript
setInterval(() => {
  console.log("Hello");
}, 1000);
```

Output

```text
Hello

(after 1 sec)

Hello

(after 1 sec)

Hello
```

Runs continuously until stopped.

---

# Storing Interval ID

```javascript
const interval = setInterval(() => {
  console.log("Running");
}, 1000);
```

---

# clearInterval()

Stops a running interval.

```javascript
const interval = setInterval(() => {
  console.log("Running");
}, 1000);

clearInterval(interval);
```

---

# Counter Example

```javascript
let count = 1;

const interval = setInterval(() => {
  console.log(count);

  count++;

  if (count > 5) {
    clearInterval(interval);
  }
}, 1000);
```

Output

```text
1

2

3

4

5
```

---

# Difference Between setTimeout() and setInterval()

| setTimeout()        | setInterval()           |
| ------------------- | ----------------------- |
| Executes once       | Executes repeatedly     |
| Stops automatically | Needs `clearInterval()` |
| One-time task       | Repeated task           |

---

# Execution Flow

## setTimeout()

```text
Call Function

↓

Wait

↓

Delay Complete

↓

Execute Once
```

---

## setInterval()

```text
Call Function

↓

Wait

↓

Execute

↓

Wait

↓

Execute

↓

Repeat

↓

clearInterval()

↓

Stop
```

---

# Common Use Cases

## setTimeout()

- Show popup after 3 seconds
- Delay animations
- Hide notifications
- Auto logout
- API retry

---

## setInterval()

- Clock
- Stopwatch
- Countdown Timer
- Image Slider
- Polling APIs
- Live Updates

---

# Nested setTimeout()

```javascript
setTimeout(() => {
  console.log("1");

  setTimeout(() => {
    console.log("2");
  }, 1000);
}, 1000);
```

Output

```text
1

(1 sec)

2
```

---

# Recursive setTimeout()

Instead of `setInterval()`:

```javascript
function repeat() {
  console.log("Hello");

  setTimeout(repeat, 1000);
}

repeat();
```

Useful when the next execution should happen only after the previous one finishes.

---

# Timers and the Event Loop

`setTimeout()` and `setInterval()` are **asynchronous**.

Example

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");
```

Output

```text
Start

End

Timeout
```

Even with a `0` ms delay, the callback runs after the current synchronous code because it waits in the **Event Loop**.

---

# Memory Leaks with Timers

Always clear timers when they are no longer needed.

```javascript
const timer = setInterval(() => {
  console.log("Running");
}, 1000);

clearInterval(timer);
```

---

# Interview Questions

### 1. What is `setTimeout()`?

Executes a function once after a specified delay.

---

### 2. What is `setInterval()`?

Executes a function repeatedly after a specified interval.

---

### 3. Difference between `setTimeout()` and `setInterval()`?

| setTimeout() | setInterval()   |
| ------------ | --------------- |
| Runs once    | Runs repeatedly |

---

### 4. What does `clearTimeout()` do?

Cancels a scheduled timeout.

---

### 5. What does `clearInterval()` do?

Stops a running interval.

---

### 6. Does `setTimeout(0)` execute immediately?

❌ No.

It executes after the current call stack is empty.

---

### 7. Are `setTimeout()` and `setInterval()` synchronous?

❌ No.

They are asynchronous and work with the Event Loop.

---

# Practice

## Beginner

- Print "Hello" after 3 seconds.
- Stop a timeout before it executes.
- Print numbers from 1 to 5 every second.

---

## Intermediate

- Create a digital clock.
- Create a countdown timer.
- Create a stopwatch.

---

## Advanced

- Build an Image Slider.
- Build an Auto Notification System.
- Build an OTP Countdown Timer.

---

# Mini Project

## Countdown Timer

Requirements:

- Start from 10.
- Decrease every second.
- Display the number.
- Stop automatically at 0.
- Display:

```text
Time's Up!
```

---

# Summary

| Method            | Purpose                  |
| ----------------- | ------------------------ |
| `setTimeout()`    | Execute once after delay |
| `clearTimeout()`  | Cancel timeout           |
| `setInterval()`   | Execute repeatedly       |
| `clearInterval()` | Stop interval            |

---

# Memory Trick

```text
Timers

↓

setTimeout()

↓

Run Once

↓

clearTimeout()

----------------

setInterval()

↓

Run Repeatedly

↓

clearInterval()

↓

Stop
```
