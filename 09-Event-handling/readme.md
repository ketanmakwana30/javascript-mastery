# What is an Event?

An **Event** is an action that occurs in the browser.

Examples:

- Clicking a button
- Typing in an input
- Moving the mouse
- Scrolling
- Submitting a form

In simple words:

> **An event is something that happens on a webpage and JavaScript can respond to it.**

---

# What is Event Handling?

**Event Handling** is the process of detecting an event and executing JavaScript code in response.

Example:

```text
User Clicks Button

↓

Click Event Occurs

↓

JavaScript Function Executes
```

---

# Event Listener

The most common way to handle events.

## Syntax

```javascript
element.addEventListener("event", callback);
```

Example

```javascript
const button = document.querySelector("button");

button.addEventListener("click", () => {
  console.log("Button Clicked");
});
```

---

# Ways to Handle Events

## 1. Inline Event

```html
<button onclick="sayHello()">Click</button>
```

Not recommended.

---

## 2. DOM Property

```javascript
button.onclick = function () {
  console.log("Clicked");
};
```

---

## 3. addEventListener() ✅ (Best Practice)

```javascript
button.addEventListener("click", function () {
  console.log("Clicked");
});
```

Advantages:

- Multiple listeners
- Cleaner code
- Easier to remove

---

# Common Events

| Event     | Description         |
| --------- | ------------------- |
| click     | Mouse click         |
| dblclick  | Double click        |
| mouseover | Mouse enters        |
| mouseout  | Mouse leaves        |
| mousemove | Mouse moves         |
| keydown   | Key pressed         |
| keyup     | Key released        |
| input     | Input value changes |
| change    | Value changed       |
| submit    | Form submitted      |
| focus     | Input focused       |
| blur      | Input loses focus   |
| load      | Page loaded         |
| scroll    | Page scrolled       |
| resize    | Window resized      |

---

# Mouse Events

```javascript
button.addEventListener("click", () => {
  console.log("Clicked");
});
```

```javascript
button.addEventListener("dblclick", () => {
  console.log("Double Click");
});
```

---

# Keyboard Events

```javascript
document.addEventListener("keydown", (event) => {
  console.log(event.key);
});
```

Output

```text
a
Enter
ArrowUp
```

---

# Input Event

```javascript
input.addEventListener("input", (event) => {
  console.log(event.target.value);
});
```

---

# Change Event

```javascript
select.addEventListener("change", (event) => {
  console.log(event.target.value);
});
```

---

# Submit Event

```javascript
form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log("Submitted");
});
```

---

# Event Object

Every event handler receives an **event object**.

```javascript
button.addEventListener("click", (event) => {
  console.log(event);
});
```

Useful Properties:

```javascript
event.target;

event.type;

event.key;

event.clientX;

event.clientY;
```

---

# event.target

Returns the element that triggered the event.

```javascript
button.addEventListener("click", (event) => {
  console.log(event.target);
});
```

---

# preventDefault()

Stops the browser's default behavior.

Example:

```javascript
form.addEventListener("submit", (event) => {
  event.preventDefault();
});
```

Used for:

- Form validation
- AJAX forms
- Custom behavior

---

# stopPropagation()

Stops the event from bubbling.

```javascript
event.stopPropagation();
```

---

# Event Bubbling

Events travel from the target element **up** through its ancestors.

```text
Button

↓

Div

↓

Body

↓

HTML

↓

Document
```

Example

```javascript
button.addEventListener("click", () => {
  console.log("Button");
});

div.addEventListener("click", () => {
  console.log("Div");
});
```

Clicking the button prints:

```text
Button

Div
```

---

# Event Capturing

Events travel from the top **down** to the target.

```javascript
div.addEventListener("click", handler, true);
```

`true` enables capturing.

---

# Bubbling vs Capturing

| Bubbling     | Capturing    |
| ------------ | ------------ |
| Bottom → Top | Top → Bottom |
| Default      | Optional     |

---

# Event Delegation

Attach one event listener to a parent instead of many child elements.

Example

```javascript
list.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log(event.target.innerText);
  }
});
```

Advantages:

- Better performance
- Less memory usage
- Handles dynamically added elements

---

# removeEventListener()

Removes an event listener.

```javascript
function greet() {
  console.log("Hello");
}

button.addEventListener("click", greet);

button.removeEventListener("click", greet);
```

---

# Event Flow

```text
User Action

↓

Event Occurs

↓

Event Listener

↓

Callback Function

↓

Browser Updates
```

---

# Interview Questions

### 1. What is an Event?

An action performed by the user or browser.

---

### 2. What is Event Handling?

Executing JavaScript code when an event occurs.

---

### 3. What is addEventListener()?

A method used to attach an event listener to an element.

---

### 4. Difference between onclick and addEventListener()?

| onclick        | addEventListener() |
| -------------- | ------------------ |
| One handler    | Multiple handlers  |
| Older approach | Modern approach    |

---

### 5. What is event.target?

The element that triggered the event.

---

### 6. What does preventDefault() do?

Stops the browser's default action.

---

### 7. What is Event Bubbling?

Events move from the target element up to its ancestors.

---

### 8. What is Event Capturing?

Events move from the root element down to the target.

---

### 9. What is Event Delegation?

Handling child events using one listener on the parent.

---

### 10. What does stopPropagation() do?

Stops the event from continuing through the propagation phases.

---

# Practice

## Beginner

- Print "Button Clicked" on click.
- Change heading text on click.
- Change background color on double-click.
- Show mouse coordinates.

---

## Intermediate

- Display typed text in real time.
- Show pressed keyboard key.
- Prevent form submission.
- Toggle dark mode on button click.

---

## Advanced

- Build a Counter App.
- Build a Todo List.
- Build an Image Slider.
- Build a Calculator.

---

# Mini Project

## Color Changer

HTML

```html
<button>Red</button>
<button>Blue</button>
<button>Green</button>
```

JavaScript

- Clicking **Red** changes the page background to red.
- Clicking **Blue** changes it to blue.
- Clicking **Green** changes it to green.

---

# Summary

| Event     | Purpose             |
| --------- | ------------------- |
| click     | Mouse click         |
| dblclick  | Double click        |
| mouseover | Mouse enters        |
| mouseout  | Mouse leaves        |
| keydown   | Key pressed         |
| keyup     | Key released        |
| input     | Input changes       |
| change    | Value changed       |
| submit    | Form submitted      |
| focus     | Element focused     |
| blur      | Element loses focus |

---

# Important Methods

| Method                | Purpose                          |
| --------------------- | -------------------------------- |
| addEventListener()    | Add event listener               |
| removeEventListener() | Remove event listener            |
| preventDefault()      | Prevent default browser behavior |
| stopPropagation()     | Stop event propagation           |

---

# Memory Trick

```text
Event

↓

Listener

↓

Callback

↓

Event Object

↓

preventDefault()

↓

stopPropagation()

↓

Bubbling

↓

Capturing

↓

Delegation
```
