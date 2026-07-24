# What is an Array?

An **Array** is a special JavaScript object used to store **multiple values in a single variable**.

Instead of creating many variables:

```javascript
let student1 = "Ketan";
let student2 = "Rahul";
let student3 = "Amit";
```

Use an array:

```javascript
const students = ["Ketan", "Rahul", "Amit"];
```

---

# Why Use Arrays?

- Store multiple values
- Easy to access data
- Easy to loop through
- Dynamic size
- Built-in methods

---

# Creating an Array

## Array Literal (Recommended)

```javascript
const fruits = ["Apple", "Banana", "Mango"];
```

---

## Array Constructor

```javascript
const numbers = new Array(10, 20, 30);
```

---

# Accessing Elements

Array indexing starts from **0**.

```javascript
const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[0]);

console.log(fruits[2]);
```

Output

```text
Apple
Mango
```

---

# Updating Elements

```javascript
const fruits = ["Apple", "Banana"];

fruits[1] = "Orange";

console.log(fruits);
```

Output

```text
["Apple", "Orange"]
```

---

# Array Length

```javascript
const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.length);
```

Output

```text
3
```

---

# Adding Elements

## push()

Adds at the end.

```javascript
const fruits = ["Apple"];

fruits.push("Banana");

console.log(fruits);
```

Output

```text
["Apple", "Banana"]
```

---

## unshift()

Adds at the beginning.

```javascript
const fruits = ["Banana"];

fruits.unshift("Apple");
```

Output

```text
["Apple", "Banana"]
```

---

# Removing Elements

## pop()

Removes the last element.

```javascript
const fruits = ["Apple", "Banana"];

fruits.pop();
```

Output

```text
["Apple"]
```

---

## shift()

Removes the first element.

```javascript
const fruits = ["Apple", "Banana"];

fruits.shift();
```

Output

```text
["Banana"]
```

---

# Searching

## indexOf()

Returns the index.

```javascript
const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.indexOf("Banana"));
```

Output

```text
1
```

---

## includes()

Checks whether a value exists.

```javascript
const fruits = ["Apple", "Banana"];

console.log(fruits.includes("Apple"));
```

Output

```text
true
```

---

# Joining Arrays

## concat()

```javascript
const a = [1, 2];

const b = [3, 4];

console.log(a.concat(b));
```

Output

```text
[1,2,3,4]
```

---

# slice()

Returns a copy of part of an array.

```javascript
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.slice(1, 4));
```

Output

```text
[2,3,4]
```

Original array remains unchanged.

---

# splice()

Adds, removes, or replaces elements.

```javascript
const numbers = [1, 2, 3, 4];

numbers.splice(1, 2);

console.log(numbers);
```

Output

```text
[1,4]
```

---

# reverse()

```javascript
const numbers = [1, 2, 3];

numbers.reverse();

console.log(numbers);
```

Output

```text
[3,2,1]
```

---

# sort()

```javascript
const numbers = [5, 2, 8, 1];

numbers.sort();
```

Output

```text
[1,2,5,8]
```

### Numeric Sort

```javascript
numbers.sort((a, b) => a - b);
```

Descending

```javascript
numbers.sort((a, b) => b - a);
```

---

# Looping Through Arrays

## for Loop

```javascript
const fruits = ["Apple", "Banana", "Mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

---

## for...of

```javascript
for (const fruit of fruits) {
  console.log(fruit);
}
```

---

## forEach()

```javascript
fruits.forEach((fruit) => {
  console.log(fruit);
});
```

---

# Important Array Methods

## map()

Creates a new array.

```javascript
const nums = [1, 2, 3];

const result = nums.map((num) => num * 2);

console.log(result);
```

Output

```text
[2,4,6]
```

---

## filter()

Returns matching elements.

```javascript
const nums = [1, 2, 3, 4, 5];

const even = nums.filter((num) => num % 2 === 0);

console.log(even);
```

Output

```text
[2,4]
```

---

## find()

Returns the first matching element.

```javascript
const nums = [10, 20, 30];

console.log(nums.find((num) => num > 15));
```

Output

```text
20
```

---

## some()

Returns `true` if at least one element matches.

```javascript
const nums = [1, 2, 3];

console.log(nums.some((num) => num > 2));
```

Output

```text
true
```

---

## every()

Returns `true` if all elements match.

```javascript
const nums = [2, 4, 6];

console.log(nums.every((num) => num % 2 === 0));
```

Output

```text
true
```

---

## reduce()

Reduces an array to a single value.

```javascript
const nums = [1, 2, 3, 4];

const sum = nums.reduce((total, num) => total + num, 0);

console.log(sum);
```

Output

```text
10
```

---

# Destructuring Arrays

```javascript
const colors = ["Red", "Green", "Blue"];

const [first, second] = colors;

console.log(first);
```

Output

```text
Red
```

---

# Spread Operator

```javascript
const a = [1, 2];

const b = [...a, 3, 4];

console.log(b);
```

Output

```text
[1,2,3,4]
```

---

# Rest Operator

```javascript
const [first, ...others] = [1, 2, 3, 4];

console.log(others);
```

Output

```text
[2,3,4]
```

---

# Shallow Copy

```javascript
const arr1 = [1, 2, 3];

const arr2 = [...arr1];
```

---

# Array Flow

```text
Create Array

↓

Access Elements

↓

Add / Remove

↓

Search

↓

Loop

↓

Transform

↓

Result
```

---

# Interview Questions

### 1. What is an Array?

A collection of multiple values stored in a single variable.

---

### 2. Difference between `slice()` and `splice()`?

| slice()                       | splice()                |
| ----------------------------- | ----------------------- |
| Doesn't modify original array | Modifies original array |
| Returns a copy                | Adds/Removes/Replaces   |

---

### 3. Difference between `map()` and `forEach()`?

| map()                   | forEach()           |
| ----------------------- | ------------------- |
| Returns a new array     | Returns `undefined` |
| Used for transformation | Used for iteration  |

---

### 4. Difference between `filter()` and `find()`?

| filter()                      | find()                         |
| ----------------------------- | ------------------------------ |
| Returns all matching elements | Returns first matching element |

---

### 5. Difference between `push()` and `unshift()`?

| push()      | unshift()         |
| ----------- | ----------------- |
| Adds at end | Adds at beginning |

---

### 6. Difference between `pop()` and `shift()`?

| pop()                | shift()               |
| -------------------- | --------------------- |
| Removes last element | Removes first element |

---

### 7. What does `reduce()` do?

It reduces all array elements into a single value.

---

# Practice

## Beginner

- Create an array of 5 fruits.
- Print the first and last element.
- Add one fruit using `push()`.
- Remove one fruit using `pop()`.

---

## Intermediate

- Find even numbers using `filter()`.
- Double all numbers using `map()`.
- Find the sum using `reduce()`.
- Sort numbers in ascending order.

---

## Advanced

- Remove duplicate values from an array.
- Find the largest number in an array.
- Reverse an array without using `reverse()`.
- Count occurrences of each element.

---

# Mini Project

## Student Marks Manager

Create an array:

```javascript
const marks = [85, 90, 75, 60, 95];
```

Perform:

- Find total marks.
- Find average marks.
- Find highest mark.
- Find lowest mark.
- Print passed students (marks ≥ 35).

---

# Summary

| Method    | Purpose                |
| --------- | ---------------------- |
| push()    | Add at end             |
| pop()     | Remove last            |
| shift()   | Remove first           |
| unshift() | Add first              |
| slice()   | Copy part of array     |
| splice()  | Modify array           |
| map()     | Create new array       |
| filter()  | Filter elements        |
| find()    | First matching element |
| some()    | At least one match     |
| every()   | All match              |
| reduce()  | Single value           |
| sort()    | Sort array             |
| reverse() | Reverse array          |

---

# Memory Trick

```text
Array

↓

Access

↓

Add / Remove

↓

Search

↓

Loop

↓

map()

↓

filter()

↓

find()

↓

reduce()

↓

sort()

↓

reverse()
```
