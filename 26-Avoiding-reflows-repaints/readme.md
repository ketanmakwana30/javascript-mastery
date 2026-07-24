# What are Reflows and Repaints?

When you change the DOM using JavaScript or CSS, the browser may need to update the page.

There are two types of updates:

1. **Reflow (Layout)**
2. **Repaint (Paint)**

Reflow is more expensive than repaint.

---

# Browser Rendering Process

```text
HTML
   ↓
Parse HTML
   ↓
DOM Tree

CSS
   ↓
CSSOM Tree

DOM + CSSOM
   ↓
Render Tree
   ↓
Layout (Reflow)
   ↓
Paint (Repaint)
   ↓
Composite
   ↓
Display on Screen
```

---

# What is Reflow?

A **Reflow** (also called **Layout**) happens when the browser must recalculate the size and position of elements.

Example:

```javascript
box.style.width = "300px";
```

Changing the width changes the layout, so the browser recalculates positions.

---

## Properties that Trigger Reflow

Changing:

- width
- height
- margin
- padding
- font-size
- display
- border
- position
- adding/removing DOM elements

Example:

```javascript
box.style.height = "200px";
```

Reflow occurs.

---

# What is Repaint?

A **Repaint** happens when only the appearance changes, but the layout stays the same.

Example:

```javascript
box.style.backgroundColor = "red";
```

The size and position don't change.

Only the color changes.

---

## Properties that Trigger Repaint

- color
- background-color
- visibility
- outline
- box-shadow

Example:

```javascript
box.style.color = "blue";
```

Only repaint occurs.

---

# Reflow vs Repaint

| Reflow                         | Repaint                 |
| ------------------------------ | ----------------------- |
| Changes layout                 | Changes appearance only |
| Expensive                      | Less expensive          |
| Recalculates element positions | No layout calculation   |
| May trigger repaint            | Doesn't trigger reflow  |

---

# Visual Example

### Reflow

```text
Before

+--------+
| Button |
+--------+

↓

Increase Width

↓

+------------------+
| Button           |
+------------------+
```

Everything around it may need to move.

---

### Repaint

```text
Before

Blue Button

↓

Change Color

↓

Red Button
```

Only the color changes.

---

# Why Avoid Reflows?

Frequent reflows make websites:

- Slow
- Laggy
- Less responsive
- Poor user experience

Especially on:

- Mobile devices
- Large web pages
- Animations

---

# Bad Example

```javascript
box.style.width = "100px";
box.style.height = "100px";
box.style.margin = "20px";
box.style.padding = "10px";
```

Each change can cause another layout calculation.

---

# Better Example

Use CSS classes.

```css
.active {
  width: 100px;
  height: 100px;
  margin: 20px;
  padding: 10px;
}
```

```javascript
box.classList.add("active");
```

One class change is usually more efficient than many inline style changes.

---

# Batch DOM Changes

Bad:

```javascript
list.appendChild(item1);
list.appendChild(item2);
list.appendChild(item3);
```

Better:

```javascript
const fragment = document.createDocumentFragment();

fragment.appendChild(item1);
fragment.appendChild(item2);
fragment.appendChild(item3);

list.appendChild(fragment);
```

Using a `DocumentFragment` reduces repeated updates to the live DOM.

---

# Avoid Layout Thrashing

Bad:

```javascript
box.style.width = "200px";

console.log(box.offsetWidth);

box.style.height = "100px";
```

Reading layout information (`offsetWidth`) immediately after changing it may force the browser to recalculate the layout right away.

Better:

```javascript
const width = box.offsetWidth;

// Read first

box.style.width = "200px";
box.style.height = "100px";

// Write later
```

Read values first, then perform writes.

---

# Animate Efficiently

Prefer animating:

- `transform`
- `opacity`

Example:

```css
transform: translateX(100px);

opacity: 0.5;
```

Avoid animating:

- width
- height
- top
- left
- margin

because they often trigger reflows.

---

# Tips to Avoid Reflows and Repaints

✅ Minimize DOM updates

✅ Batch DOM changes

✅ Use CSS classes instead of many inline styles

✅ Read DOM values first, then write

✅ Use `DocumentFragment`

✅ Animate with `transform` and `opacity`

✅ Avoid unnecessary layout calculations

---

# Interview Questions

### 1. What is Reflow?

Recalculating the layout (size and position) of elements after a layout-affecting change.

---

### 2. What is Repaint?

Redrawing an element's appearance without changing its layout.

---

### 3. Which is more expensive?

**Reflow** is more expensive because it may trigger repaint as well.

---

### 4. How can you reduce reflows?

- Batch DOM updates
- Use CSS classes
- Use `DocumentFragment`
- Read first, write later
- Animate `transform` and `opacity`

---

### 5. Does every reflow cause a repaint?

✅ Yes.

### 6. Does every repaint cause a reflow?

❌ No.

---

# Summary

- **Reflow (Layout):** Changes the size or position of elements.
- **Repaint (Paint):** Changes only the appearance (such as color).
- Reflow is more expensive than repaint.
- Batch DOM changes, use CSS classes, and prefer `transform`/`opacity` animations for better performance.
