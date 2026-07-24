# What is a Data Type?

A **Data Type** defines the type of value that a variable can store.

Example:

```javascript
let name = "Ketan";
let age = 20;
let isStudent = true;
```

Here,

- `"Ketan"` → String
- `20` → Number
- `true` → Boolean

---

# Types of Data Types

JavaScript has **8 Data Types**.

```text
Data Types

↓

Primitive (7)

↓

String
Number
Boolean
Undefined
Null
BigInt
Symbol

↓

Non-Primitive (1)

↓

Object
```

---

# Primitive Data Types

Primitive values are **immutable** and stored by **value**.

---

## 1. String

Stores text.

```javascript
let name = "Ketan";

let city = "Mahuva";
```

Example:

```javascript
console.log(typeof name);
```

Output:

```text
string
```

---

## 2. Number

Stores integers and decimal numbers.

```javascript
let age = 20;

let price = 99.99;
```

Output:

```javascript
typeof age;
```

```text
number
```

---

## 3. Boolean

Stores only two values.

```javascript
let isLogin = true;

let isAdmin = false;
```

Output:

```text
boolean
```

---

## 4. Undefined

A variable declared but not assigned a value.

```javascript
let user;

console.log(user);
```

Output:

```text
undefined
```

---

## 5. Null

Represents an intentional empty value.

```javascript
let data = null;
```

Output:

```javascript
typeof data;
```

```text
object
```

**Note:** This is a historical bug in JavaScript. Even though `typeof null` returns `"object"`, `null` is a primitive value.

---

## 6. BigInt

Used for very large integers.

```javascript
let number = 123456789012345678901234567890n;
```

Output:

```text
bigint
```

---

## 7. Symbol

Creates a unique value.

```javascript
let id = Symbol("id");
```

Output:

```text
symbol
```

---

# Non-Primitive Data Type

## Object

Objects store multiple values.

```javascript
const user = {
  name: "Ketan",

  age: 20,
};
```

Arrays and functions are also objects in JavaScript.

---

# typeof Operator

Used to check the data type.

```javascript
typeof "Hello";
```

Output:

```text
string
```

Examples:

```javascript
typeof 10;
```

```text
number
```

```javascript
typeof true;
```

```text
boolean
```

```javascript
typeof undefined;
```

```text
undefined
```

```javascript
typeof null;
```

```text
object
```

```javascript
typeof {};
```

```text
object
```

```javascript
typeof [];
```

```text
object
```

```javascript
typeof function () {};
```

```text
function
```

---

# Primitive vs Non-Primitive

| Primitive       | Non-Primitive       |
| --------------- | ------------------- |
| Immutable       | Mutable             |
| Stored by Value | Stored by Reference |
| Fixed Value     | Can Change          |

---

# Value vs Reference

## Primitive

```javascript
let a = 10;

let b = a;

b = 20;

console.log(a);
```

Output:

```text
10
```

Because a copy is created.

---

## Object

```javascript
let obj1 = {
  name: "Ketan",
};

let obj2 = obj1;

obj2.name = "Rahul";

console.log(obj1.name);
```

Output:

```text
Rahul
```

Both variables refer to the same object.

---

# Type Conversion

## Number to String

```javascript
let age = 20;

String(age);
```

---

## String to Number

```javascript
Number("100");
```

---

## Boolean to Number

```javascript
Number(true);
```

Output:

```text
1
```

---

## Number to Boolean

```javascript
Boolean(1);
```

Output:

```text
true
```

---

# Truthy and Falsy Values

## Falsy Values

```text
false

0

-0

0n

""

null

undefined

NaN
```

Everything else is **Truthy**.

---

# NaN

NaN means **Not a Number**.

```javascript
Number("Hello");
```

Output:

```text
NaN
```

---

# JavaScript Flow

```text
Variable

↓

Value

↓

Data Type

↓

Memory

↓

Operations
```

---

# Best Practices

- Use meaningful variable names.
- Use `typeof` while debugging.
- Avoid comparing different data types unnecessarily.
- Understand primitive vs reference behavior.

---

# Interview Questions

### 1. What is a Data Type?

A data type specifies the kind of value stored in a variable.

---

### 2. How many data types are there?

8

- 7 Primitive
- 1 Non-Primitive

---

### 3. What are Primitive Data Types?

- String
- Number
- Boolean
- Undefined
- Null
- BigInt
- Symbol

---

### 4. What is Non-Primitive?

Objects.

---

### 5. Why does `typeof null` return `"object"`?

Because of a historical bug in JavaScript.

---

### 6. Difference between Undefined and Null?

| Undefined         | Null                |
| ----------------- | ------------------- |
| No value assigned | Intentionally empty |
| Automatic         | Assigned manually   |

---

### 7. Difference between Primitive and Object?

| Primitive     | Object            |
| ------------- | ----------------- |
| Copy by Value | Copy by Reference |
| Immutable     | Mutable           |

---

### 8. What is NaN?

A special number value representing an invalid numeric result.

---

# Practice

### Beginner

Create variables for:

- Name
- Age
- Boolean
- Null
- Undefined

Print their types using `typeof`.

---

### Intermediate

Convert:

- Number → String
- String → Number
- Boolean → Number
- Number → Boolean

---

### Advanced

Predict the output:

```javascript
console.log(typeof []);

console.log(typeof null);

console.log(typeof function () {});

console.log(typeof Symbol());
```

---

# Mini Project

## User Profile

Create an object:

```javascript
const user = {
  name: "Ketan",

  age: 20,

  isStudent: true,
};
```

Print:

- Name
- Age
- Data type of each property

---

# Summary

| Data Type | Example    |
| --------- | ---------- |
| String    | `"Hello"`  |
| Number    | `100`      |
| Boolean   | `true`     |
| Undefined | `let a;`   |
| Null      | `null`     |
| BigInt    | `100n`     |
| Symbol    | `Symbol()` |
| Object    | `{}`       |

---

# Memory Trick

```text
Data Types

↓

Primitive (7)

↓

String
Number
Boolean
Undefined
Null
BigInt
Symbol

↓

Non-Primitive

↓

Object
```
