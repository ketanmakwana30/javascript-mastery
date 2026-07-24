# What is DOM?

**DOM (Document Object Model)** is a programming interface that represents an HTML document as a tree of objects.

In simple words:

> **The DOM allows JavaScript to access, modify, add, remove, and style HTML elements dynamically.**

---

# Why Do We Need DOM?

Without DOM:

- HTML remains static.
- Cannot respond to user actions.

With DOM:

- Change text
- Change styles
- Add/Delete elements
- Handle events
- Create interactive websites

---

# DOM Structure

```text
Document

↓

<html>

├── <head>

│   └── <title>

└── <body>

    ├── <h1>

    ├── <p>

    └── <button>
```

Every HTML element is represented as a **Node**.

---

# Types of Nodes

- Document Node
- Element Node
- Text Node
- Attribute Node
- Comment Node

---

# Selecting Elements

## getElementById()

Selects an element by its ID.

```javascript
const heading = document.getElementById("title");
```

---

## getElementsByClassName()

Returns an HTMLCollection.

```javascript
const items = document.getElementsByClassName("item");
```

---

## getElementsByTagName()

Returns elements with the specified tag.

```javascript
const paragraphs = document.getElementsByTagName("p");
```

---

## querySelector()

Returns the first matching element.

```javascript
const btn = document.querySelector(".btn");
```

Examples

```javascript
document.querySelector("#title");

document.querySelector(".box");

document.querySelector("h1");
```

---

## querySelectorAll()

Returns all matching elements.

```javascript
const buttons = document.querySelectorAll(".btn");
```

Returns a **NodeList**.

---

# Difference Between HTMLCollection and NodeList

| HTMLCollection                         | NodeList                         |
| -------------------------------------- | -------------------------------- |
| Live Collection                        | Static Collection                |
| Elements Only                          | Elements + Nodes                 |
| Returned by `getElementsByClassName()` | Returned by `querySelectorAll()` |

---

# Reading Content

## innerHTML

Returns HTML content.

```javascript
element.innerHTML;
```

Example

```javascript
heading.innerHTML = "<h2>Hello</h2>";
```

---

## innerText

Returns only visible text.

```javascript
console.log(heading.innerText);
```

---

## textContent

Returns all text, including hidden text.

```javascript
console.log(heading.textContent);
```

---

# Changing Content

```javascript
heading.innerText = "Welcome";
```

```javascript
heading.innerHTML = "<b>Welcome</b>";
```

---

# Changing Styles

```javascript
heading.style.color = "red";

heading.style.backgroundColor = "yellow";

heading.style.fontSize = "30px";
```

---

# Working with Classes

## className

```javascript
element.className = "active";
```

---

## classList.add()

```javascript
element.classList.add("active");
```

---

## classList.remove()

```javascript
element.classList.remove("active");
```

---

## classList.toggle()

```javascript
element.classList.toggle("dark");
```

---

## classList.contains()

```javascript
element.classList.contains("active");
```

Returns:

```text
true

or

false
```

---

# Working with Attributes

## getAttribute()

```javascript
image.getAttribute("src");
```

---

## setAttribute()

```javascript
image.setAttribute("src", "image.jpg");
```

---

## removeAttribute()

```javascript
image.removeAttribute("alt");
```

---

# Creating Elements

```javascript
const div = document.createElement("div");
```

---

# Adding Content

```javascript
div.innerText = "Hello DOM";
```

---

# Appending Elements

```javascript
document.body.appendChild(div);
```

---

# prepend()

Adds at the beginning.

```javascript
document.body.prepend(div);
```

---

# append()

Adds one or more nodes.

```javascript
container.append(div);
```

---

# Removing Elements

```javascript
element.remove();
```

OR

```javascript
parent.removeChild(child);
```

---

# Replacing Elements

```javascript
parent.replaceChild(newElement, oldElement);
```

---

# Parent, Child & Sibling

## Parent

```javascript
element.parentElement;
```

---

## Children

```javascript
element.children;
```

---

## First Child

```javascript
element.firstElementChild;
```

---

## Last Child

```javascript
element.lastElementChild;
```

---

## Next Sibling

```javascript
element.nextElementSibling;
```

---

## Previous Sibling

```javascript
element.previousElementSibling;
```

---

# Traversing DOM

```text
Parent

↓

Children

↓

Siblings
```

---

# DOM Flow

```text
HTML Page

↓

Browser

↓

DOM Tree

↓

JavaScript

↓

Read Elements

↓

Modify Elements

↓

Updated Page
```

---

# Interview Questions

### 1. What is DOM?

The Document Object Model is a tree-like representation of an HTML document that JavaScript can manipulate.

---

### 2. Difference between `getElementById()` and `querySelector()`?

| getElementById()   | querySelector()       |
| ------------------ | --------------------- |
| Selects by ID only | Uses any CSS selector |
| Faster             | More flexible         |

---

### 3. Difference between `innerHTML`, `innerText`, and `textContent`?

| innerHTML   | innerText         | textContent |
| ----------- | ----------------- | ----------- |
| HTML + Text | Visible Text Only | All Text    |

---

### 4. Difference between `querySelector()` and `querySelectorAll()`?

- `querySelector()` → First matching element.
- `querySelectorAll()` → All matching elements.

---

### 5. Difference between `append()` and `appendChild()`?

| append()            | appendChild() |
| ------------------- | ------------- |
| Multiple nodes/text | One node only |
| Modern              | Older         |

---

### 6. Difference between `className` and `classList`?

| className            | classList                 |
| -------------------- | ------------------------- |
| Replaces all classes | Add/Remove/Toggle classes |

---

### 7. What does `createElement()` do?

Creates a new HTML element in memory.

---

### 8. How do you remove an element?

```javascript
element.remove();
```

---

# Practice

## Beginner

- Select an element by ID.
- Change its text.
- Change its color.
- Change its background color.

---

## Intermediate

- Create a new `<div>`.
- Add text to it.
- Append it to the page.
- Remove it after 5 seconds.

---

## Advanced

- Create a Todo List using DOM.
- Create a Dynamic Card.
- Create a Dark/Light Mode Toggle.
- Build an Image Gallery.

---

# Mini Project

## Dynamic Profile Card

Create:

```html
<div id="card"></div>
```

Using JavaScript:

- Create an `<img>`
- Create `<h2>`
- Create `<p>`
- Append everything inside the card.
- Change styles using JavaScript.

---

# Summary

| Method               | Purpose                |
| -------------------- | ---------------------- |
| `getElementById()`   | Select by ID           |
| `querySelector()`    | First matching element |
| `querySelectorAll()` | All matching elements  |
| `innerHTML`          | Get/Set HTML           |
| `innerText`          | Get/Set visible text   |
| `textContent`        | Get/Set all text       |
| `style`              | Change CSS             |
| `classList.add()`    | Add class              |
| `classList.remove()` | Remove class           |
| `classList.toggle()` | Toggle class           |
| `getAttribute()`     | Get attribute          |
| `setAttribute()`     | Set attribute          |
| `createElement()`    | Create element         |
| `appendChild()`      | Add child              |
| `append()`           | Add element(s)         |
| `remove()`           | Remove element         |

---

# Memory Trick

```text
DOM

↓

Select

↓

Read

↓

Modify

↓

Style

↓

Attributes

↓

Create

↓

Append

↓

Remove

↓

Traverse
```
