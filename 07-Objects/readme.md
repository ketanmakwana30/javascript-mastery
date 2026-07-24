# What is an Object?

An **Object** is a collection of **key-value pairs** used to store related data and functionality.

In simple words:

> **An object represents a real-world entity with properties and methods.**

Example:

```javascript
const user = {
  name: "Ketan",
  age: 20,
  city: "Mahuva",
};
```

---

# Why Use Objects?

- Store related data together
- Represent real-world entities
- Easy to organize complex data
- Can contain functions (methods)

---

# Object Syntax

```javascript
const objectName = {
  key1: value1,
  key2: value2,
};
```

Example

```javascript
const student = {
  name: "Ketan",
  age: 20,
  isStudent: true,
};
```

---

# Properties & Methods

### Properties

Store data.

```javascript
const car = {
  brand: "BMW",
  color: "Black",
};
```

---

### Methods

Store functions.

```javascript
const car = {
  brand: "BMW",

  start() {
    console.log("Car Started");
  },
};

car.start();
```

---

# Accessing Properties

## Dot Notation

```javascript
const user = {
  name: "Ketan",
};

console.log(user.name);
```

Output

```text
Ketan
```

---

## Bracket Notation

```javascript
console.log(user["name"]);
```

Useful when the property name is dynamic.

```javascript
const key = "name";

console.log(user[key]);
```

---

# Adding Properties

```javascript
const user = {
  name: "Ketan",
};

user.age = 20;
```

Output

```javascript
{
    name: "Ketan",
    age: 20
}
```

---

# Updating Properties

```javascript
user.name = "Rahul";
```

---

# Deleting Properties

```javascript
delete user.age;
```

---

# Nested Objects

```javascript
const student = {
  name: "Ketan",

  address: {
    city: "Mahuva",

    state: "Gujarat",
  },
};

console.log(student.address.city);
```

Output

```text
Mahuva
```

---

# Object Methods

```javascript
const person = {
  firstName: "Ketan",

  lastName: "Makwana",

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person.fullName());
```

---

# this Keyword

`this` refers to the current object.

```javascript
const user = {
  name: "Ketan",

  greet() {
    console.log(this.name);
  },
};

user.greet();
```

Output

```text
Ketan
```

---

# Object.keys()

Returns all keys.

```javascript
const user = {
  name: "Ketan",

  age: 20,
};

console.log(Object.keys(user));
```

Output

```text
["name","age"]
```

---

# Object.values()

Returns all values.

```javascript
console.log(Object.values(user));
```

Output

```text
["Ketan",20]
```

---

# Object.entries()

Returns key-value pairs.

```javascript
console.log(Object.entries(user));
```

Output

```text
[
 ["name","Ketan"],
 ["age",20]
]
```

---

# hasOwnProperty()

Checks whether a property exists.

```javascript
console.log(user.hasOwnProperty("name"));
```

Output

```text
true
```

---

# for...in Loop

Used to iterate over object keys.

```javascript
const user = {
  name: "Ketan",

  age: 20,
};

for (const key in user) {
  console.log(key);
}
```

Output

```text
name
age
```

Values

```javascript
for (const key in user) {
  console.log(user[key]);
}
```

---

# Object Destructuring

```javascript
const user = {
  name: "Ketan",

  age: 20,
};

const { name, age } = user;

console.log(name);
```

Output

```text
Ketan
```

---

# Renaming During Destructuring

```javascript
const { name: fullName } = user;

console.log(fullName);
```

---

# Spread Operator

```javascript
const user = {
  name: "Ketan",

  age: 20,
};

const updatedUser = {
  ...user,

  city: "Mahuva",
};
```

---

# Object.assign()

Copies objects.

```javascript
const obj1 = {
  a: 1,
};

const obj2 = {
  b: 2,
};

const obj3 = Object.assign({}, obj1, obj2);
```

---

# Optional Chaining

Safely accesses nested properties.

```javascript
console.log(user.address?.city);
```

If `address` doesn't exist:

```text
undefined
```

instead of an error.

---

# Nullish Coalescing

```javascript
const city = user.city ?? "Unknown";
```

Uses `"Unknown"` only if `city` is `null` or `undefined`.

---

# Freezing Objects

```javascript
const user = {
  name: "Ketan",
};

Object.freeze(user);

user.name = "Rahul";
```

No changes occur.

---

# Sealing Objects

```javascript
Object.seal(user);
```

- Can update existing properties.
- Cannot add or delete properties.

---

# Object Flow

```text
Create Object

↓

Add Properties

↓

Access

↓

Update

↓

Delete

↓

Loop

↓

Destructure

↓

Copy

↓

Freeze / Seal
```

---

# Interview Questions

### 1. What is an Object?

A collection of key-value pairs used to store related data and behavior.

---

### 2. Difference between Dot and Bracket Notation?

| Dot             | Bracket              |
| --------------- | -------------------- |
| Static property | Dynamic property     |
| Easy to read    | Works with variables |

---

### 3. Difference between Object.keys() and Object.values()?

| Object.keys() | Object.values() |
| ------------- | --------------- |
| Returns keys  | Returns values  |

---

### 4. Difference between Object.freeze() and Object.seal()?

| freeze()           | seal()                                  |
| ------------------ | --------------------------------------- |
| No changes allowed | Only existing properties can be updated |

---

### 5. What does Object.entries() return?

An array of key-value pairs.

---

### 6. What is Object Destructuring?

Extracting object properties into variables.

---

### 7. What is Optional Chaining?

Safely accesses nested properties using `?.`.

---

### 8. What is the difference between `??` and `||`?

- `||` uses the right value for any **falsy** value (`0`, `""`, `false`, `null`, `undefined`, `NaN`).
- `??` uses the right value **only** when the left side is `null` or `undefined`.

Example:

```javascript
console.log(0 || 100); // 100
console.log(0 ?? 100); // 0
```

---

# Practice

## Beginner

- Create a `student` object.
- Print all properties.
- Update one property.
- Delete one property.

---

## Intermediate

- Loop through an object using `for...in`.
- Print keys using `Object.keys()`.
- Print values using `Object.values()`.
- Destructure an object.

---

## Advanced

- Merge two objects.
- Create nested objects.
- Use optional chaining.
- Freeze and seal an object and observe the behavior.

---

# Mini Project

## Student Management System

Create an object:

```javascript
const student = {
  name: "Ketan",

  age: 20,

  marks: 89,

  city: "Mahuva",
};
```

Perform:

- Print student details.
- Update marks.
- Add email.
- Delete city.
- Print keys.
- Print values.
- Destructure the object.

---

# Summary

| Method             | Purpose                 |
| ------------------ | ----------------------- |
| `.`                | Access property         |
| `[]`               | Dynamic property access |
| `delete`           | Remove property         |
| `Object.keys()`    | Get keys                |
| `Object.values()`  | Get values              |
| `Object.entries()` | Get key-value pairs     |
| `Object.assign()`  | Copy/Merge objects      |
| `Object.freeze()`  | Prevent all changes     |
| `Object.seal()`    | Prevent add/delete      |
| `?.`               | Optional chaining       |
| `??`               | Nullish coalescing      |

---

# Memory Trick

```text
Object

↓

Properties

↓

Methods

↓

Access

↓

Update

↓

Delete

↓

Loop

↓

Object.keys()

↓

Object.values()

↓

Object.entries()

↓

Destructuring

↓

Spread

↓

Freeze / Seal
```
