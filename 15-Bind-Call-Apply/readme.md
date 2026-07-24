# What are call(), apply(), and bind()?

`call()`, `apply()`, and `bind()` are **Function methods** used to control the value of the **`this`** keyword.

In simple words:

> **They allow you to call a function with a specific object as `this`.**

---

# Why Do We Need Them?

Consider this object:

```javascript id="hj9qvh"
const user = {
  name: "Ketan",

  greet() {
    console.log(`Hello ${this.name}`);
  },
};
```

Normally:

```javascript id="z5ymt6"
user.greet();
```

Output:

```text id="j4m2n4"
Hello Ketan
```

But what if we want to use the same function for another object?

That's where **call**, **apply**, and **bind** help.

---

# call()

## Definition

`call()` invokes a function immediately and lets you specify the value of `this`.

---

## Syntax

```javascript id="iq4cna"
functionName.call(thisArg, arg1, arg2, ...);
```

---

## Example

```javascript id="jhk79m"
function greet(city) {
  console.log(`Hello ${this.name} from ${city}`);
}

const user = {
  name: "Ketan",
};

greet.call(user, "Ahmedabad");
```

Output:

```text id="2z9k0i"
Hello Ketan from Ahmedabad
```

---

# apply()

## Definition

`apply()` is similar to `call()`, but arguments are passed as an **array**.

---

## Syntax

```javascript id="n90jqc"
functionName.apply(thisArg, [arg1, arg2]);
```

---

## Example

```javascript id="iuxz0w"
function greet(city, country) {
  console.log(`${this.name} lives in ${city}, ${country}`);
}

const user = {
  name: "Ketan",
};

greet.apply(user, ["Ahmedabad", "India"]);
```

Output:

```text id="2wkxt8"
Ketan lives in Ahmedabad, India
```

---

# bind()

## Definition

`bind()` does **not** call the function immediately.

Instead, it returns a **new function** with `this` permanently bound.

---

## Syntax

```javascript id="q0fd4u"
const newFunction = functionName.bind(thisArg, arg1, arg2);
```

---

## Example

```javascript id="yqjuhd"
function greet() {
  console.log(`Hello ${this.name}`);
}

const user = {
  name: "Ketan",
};

const sayHello = greet.bind(user);

sayHello();
```

Output:

```text id="5zc0bw"
Hello Ketan
```

---

# Real Difference

## call()

```javascript id="s1evr2"
greet.call(user);
```

✅ Executes immediately.

---

## apply()

```javascript id="6h6kj3"
greet.apply(user);
```

✅ Executes immediately.

---

## bind()

```javascript id="3cqqsk"
const fn = greet.bind(user);

fn();
```

❌ Doesn't execute immediately.

Returns a new function.

---

# call vs apply

Both do the same thing.

Difference:

### call()

```javascript id="nl8q1i"
sum.call(user, 10, 20);
```

Arguments individually.

---

### apply()

```javascript id="fwvnzg"
sum.apply(user, [10, 20]);
```

Arguments in an array.

---

# bind Example with Event Listener

```javascript id="e1ksju"
const user = {
  name: "Ketan",

  greet() {
    console.log(this.name);
  },
};

button.addEventListener("click", user.greet.bind(user));
```

Without `bind()`, `this` inside `greet()` would refer to the button instead of the `user` object.

---

# Internal Flow

```text id="kjlwmq"
Function

↓

call()

↓

Set this

↓

Execute

-----------------

Function

↓

apply()

↓

Set this

↓

Execute

-----------------

Function

↓

bind()

↓

Set this

↓

Return New Function

↓

Execute Later
```

---

# Real-Life Example

Imagine a TV remote.

```text id="w3qlvf"
TV

↓

Remote

↓

Power Button

↓

TV Turns On
```

The remote decides **which TV** receives the command.

Similarly:

`call()`, `apply()`, and `bind()` decide **which object becomes `this`.**

---

# Advantages

- Reuse functions
- Control `this`
- Avoid duplicate code
- Useful with event listeners
- Useful in callbacks

---

# Interview Questions

### 1. What is `call()`?

Calls a function immediately with a specified `this`.

---

### 2. What is `apply()`?

Calls a function immediately with a specified `this`, passing arguments as an array.

---

### 3. What is `bind()`?

Returns a new function with `this` permanently bound.

---

### 4. Difference between `call()` and `apply()`?

| call()                 | apply()               |
| ---------------------- | --------------------- |
| Arguments individually | Arguments in an array |

---

### 5. Difference between `call()` and `bind()`?

| call()               | bind()                 |
| -------------------- | ---------------------- |
| Executes immediately | Returns a new function |
| No stored function   | Can be called later    |

---

### 6. When should you use `bind()`?

- Event listeners
- Callbacks
- Passing methods around while preserving `this`

---

### 7. Which method returns a new function?

✅ `bind()`

---

### 8. Which methods execute immediately?

✅ `call()`

✅ `apply()`

---

# Comparison Table

| Feature              | call()     | apply() | bind()              |
| -------------------- | ---------- | ------- | ------------------- |
| Changes `this`       | ✅         | ✅      | ✅                  |
| Executes immediately | ✅         | ✅      | ❌                  |
| Returns new function | ❌         | ❌      | ✅                  |
| Arguments            | Individual | Array   | Individual (stored) |

---

# Summary

| Method    | Purpose                                                    |
| --------- | ---------------------------------------------------------- |
| `call()`  | Execute immediately with custom `this`                     |
| `apply()` | Execute immediately with custom `this` and array arguments |
| `bind()`  | Return a new function with fixed `this`                    |

---

# Easy Trick to Remember

```text id="6fjh1u"
call()

↓

Call Now

-----------------

apply()

↓

Apply Array

↓

Call Now

-----------------

bind()

↓

Bind this

↓

Call Later
```

## Memory Trick

- **call() = Call Now**
- **apply() = Apply Array**
- **bind() = Bind First, Execute Later**
- **All three control the value of `this`**
