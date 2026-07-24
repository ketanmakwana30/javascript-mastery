# What is a Loop?

A **loop** is used to execute a block of code **multiple times** until a condition becomes false.

Instead of writing:

```javascript
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
```

Use a loop:

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

---

# Why Use Loops?

- Reduce code repetition
- Save time
- Improve readability
- Process arrays and objects efficiently

---

# Types of Loops

```text
Loops

↓

for

while

do...while

for...of

for...in
```

---

# 1. for Loop

Used when the number of iterations is known.

## Syntax

```javascript
for (initialization; condition; update) {
  // Code
}
```

## Example

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
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

# Flow of for Loop

```text
Initialization

↓

Condition

↓

True ?

↓

Execute Code

↓

Update

↓

Condition

↓

False

↓

Stop
```

---

# 2. while Loop

Executes while the condition is true.

## Syntax

```javascript
while (condition) {
  // Code
}
```

## Example

```javascript
let i = 1;

while (i <= 5) {
  console.log(i);

  i++;
}
```

---

# 3. do...while Loop

Executes the code **at least once**, even if the condition is false.

## Syntax

```javascript
do {
  // Code
} while (condition);
```

## Example

```javascript
let i = 1;

do {
  console.log(i);

  i++;
} while (i <= 5);
```

---

# Difference Between while and do...while

| while                  | do...while                   |
| ---------------------- | ---------------------------- |
| Checks condition first | Executes first, checks later |
| May execute zero times | Executes at least once       |

---

# 4. for...of Loop

Used to iterate over **iterable values**.

Examples:

- Arrays
- Strings
- Maps
- Sets

## Example

```javascript
const fruits = ["Apple", "Banana", "Mango"];

for (const fruit of fruits) {
  console.log(fruit);
}
```

Output

```text
Apple
Banana
Mango
```

---

# String Example

```javascript
const name = "Ketan";

for (const char of name) {
  console.log(char);
}
```

---

# 5. for...in Loop

Used to iterate over **object keys**.

## Example

```javascript
const user = {
  name: "Ketan",

  age: 20,

  city: "Mahuva",
};

for (const key in user) {
  console.log(key);
}
```

Output

```text
name
age
city
```

Values:

```javascript
for (const key in user) {
  console.log(user[key]);
}
```

---

# break Statement

Stops the loop immediately.

```javascript
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }

  console.log(i);
}
```

Output

```text
1
2
3
4
```

---

# continue Statement

Skips the current iteration.

```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }

  console.log(i);
}
```

Output

```text
1
2
4
5
```

---

# Nested Loop

A loop inside another loop.

```javascript
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(i, j);
  }
}
```

Output

```text
1 1
1 2
2 1
2 2
3 1
3 2
```

---

# Infinite Loop

Occurs when the loop condition never becomes false.

```javascript
while (true) {
  console.log("Hello");
}
```

⚠ Avoid unless intentionally required.

---

# Which Loop Should You Use?

| Situation                    | Loop         |
| ---------------------------- | ------------ |
| Fixed number of iterations   | `for`        |
| Unknown number of iterations | `while`      |
| Execute at least once        | `do...while` |
| Arrays / Strings             | `for...of`   |
| Objects                      | `for...in`   |

---

# Interview Questions

### 1. What is a loop?

A loop repeatedly executes a block of code while a condition is true.

---

### 2. Difference between `for` and `while`?

| for                            | while                            |
| ------------------------------ | -------------------------------- |
| Used when iterations are known | Used when iterations are unknown |

---

### 3. Difference between `while` and `do...while`?

- `while` checks first.
- `do...while` executes first.

---

### 4. Difference between `for...of` and `for...in`?

| for...of        | for...in      |
| --------------- | ------------- |
| Iterates values | Iterates keys |
| Arrays, Strings | Objects       |

---

### 5. What does `break` do?

Stops the loop immediately.

---

### 6. What does `continue` do?

Skips the current iteration and continues with the next one.

---

# Practice

### Beginner

- Print numbers from 1 to 10.
- Print numbers from 10 to 1.
- Print even numbers from 1 to 20.
- Print odd numbers from 1 to 20.

---

### Intermediate

- Print the multiplication table of 5.
- Calculate the sum of numbers from 1 to 100.
- Find the factorial of a number.

---

### Advanced

- Print a star pattern.

```text
*
**
***
****
*****
```

- Reverse a string using a loop.
- Find the largest number in an array.

---

# Mini Project

## Number Guessing Loop

- Generate a random number.
- Ask the user to guess it.
- Continue asking until the correct number is entered.
- Print "Correct!" when guessed.

---

# Summary

| Loop         | Purpose                |
| ------------ | ---------------------- |
| `for`        | Fixed iterations       |
| `while`      | Unknown iterations     |
| `do...while` | Runs at least once     |
| `for...of`   | Iterate values         |
| `for...in`   | Iterate object keys    |
| `break`      | Stop loop              |
| `continue`   | Skip current iteration |

---

# Memory Trick

```text
Loops

↓

for

↓

while

↓

do...while

↓

for...of (Values)

↓

for...in (Keys)

↓

break

↓

continue
```
