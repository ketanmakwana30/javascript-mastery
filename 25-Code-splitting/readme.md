# What is Code Splitting?

**Code Splitting** is a technique of breaking a large JavaScript application into **smaller chunks (files)** that are loaded only when needed.

In simple words:

> **Instead of loading the entire JavaScript file at once, load only the code required for the current page or feature.**

---

# Why Do We Need Code Splitting?

Imagine a website with:

- Home Page
- About Page
- Contact Page
- Dashboard
- Admin Panel

Without Code Splitting:

```text
main.js (5 MB)

↓

Loads Everything

↓

Slow Website
```

Even if the user only visits the Home page, all JavaScript is downloaded.

With Code Splitting:

```text
Home

↓

home.js

----------------

Dashboard

↓

dashboard.js

----------------

Admin

↓

admin.js
```

Only the required code is downloaded.

---

# Benefits of Code Splitting

- Faster page loading
- Better performance
- Smaller JavaScript bundles
- Lower memory usage
- Better user experience

---

# How Code Splitting Works

```text
Application

↓

Split into Chunks

↓

User Visits Page

↓

Load Required Chunk

↓

Execute Code
```

---

# Without Code Splitting

```text
App

↓

Load Everything

↓

Home

Dashboard

Settings

Profile

Admin

↓

Slow Initial Load
```

---

# With Code Splitting

```text
App

↓

Home

↓

Load home.js

----------------

Dashboard

↓

Load dashboard.js

----------------

Settings

↓

Load settings.js
```

---

# Dynamic Import

JavaScript supports **Dynamic Imports** using the `import()` function.

## Syntax

```javascript
import("./module.js");
```

Unlike a normal `import`, this loads the module only when it is needed.

---

# Example

## math.js

```javascript
export function add(a, b) {
  return a + b;
}
```

---

## app.js

```javascript
button.addEventListener("click", async () => {
  const math = await import("./math.js");

  console.log(math.add(10, 20));
});
```

The `math.js` file is downloaded **only when the button is clicked**.

---

# Normal Import vs Dynamic Import

## Normal Import

```javascript
import { add } from "./math.js";
```

Loads immediately when the application starts.

---

## Dynamic Import

```javascript
const math = await import("./math.js");
```

Loads only when required.

---

# Lazy Loading

**Lazy Loading** means loading resources only when they are needed.

Examples:

- Images
- Videos
- JavaScript files
- Components

Example:

```text
User Opens Gallery

↓

Load Gallery JavaScript

↓

Display Images
```

---

# Route-Based Code Splitting

Each page loads its own JavaScript.

```text
Home

↓

home.js

----------------

About

↓

about.js

----------------

Profile

↓

profile.js
```

Common in:

- React
- Vue
- Angular

---

# Component-Based Code Splitting

Each component has its own JavaScript.

```text
App

↓

Navbar.js

↓

Sidebar.js

↓

Footer.js

↓

Dashboard.js
```

Only required components are loaded.

---

# Bundlers

Bundlers automatically split code into smaller chunks.

Popular Bundlers:

- Webpack
- Vite
- Rollup
- Parcel
- esbuild

---

# Webpack Example

```javascript
import("./dashboard").then((module) => {
  module.loadDashboard();
});
```

Webpack creates a separate chunk automatically.

---

# React Example

```javascript
import { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("./Dashboard"));
```

---

# Advantages

- Faster initial page load
- Better performance
- Smaller bundle size
- Efficient resource usage
- Improved user experience

---

# Disadvantages

- More HTTP requests
- Slight delay when loading a new chunk
- More complex project structure

---

# When Should You Use Code Splitting?

✅ Large applications

✅ Single Page Applications (SPA)

✅ React Projects

✅ Vue Projects

✅ Angular Projects

Not usually necessary for very small websites.

---

# Code Splitting Flow

```text
User Opens Website

↓

Load Main Bundle

↓

User Opens Feature

↓

Download Required Chunk

↓

Execute Chunk
```

---

# Real-Life Example

Imagine a library.

Without Code Splitting:

```text
Bring Every Book Home
```

With Code Splitting:

```text
Bring Only the Book You Need
```

This saves time and effort.

---

# Best Practices

- Split large modules.
- Use dynamic imports for rarely used features.
- Lazy-load images and components.
- Keep the main bundle as small as possible.
- Use a bundler like Webpack or Vite.

---

# Interview Questions

### 1. What is Code Splitting?

A technique that divides JavaScript into smaller files that are loaded only when needed.

---

### 2. Why is Code Splitting important?

It improves loading speed and application performance.

---

### 3. What is Dynamic Import?

A way to load JavaScript modules at runtime using `import()`.

---

### 4. Difference between Static Import and Dynamic Import?

| Static Import             | Dynamic Import               |
| ------------------------- | ---------------------------- |
| Loads immediately         | Loads on demand              |
| Better for essential code | Better for optional features |

---

### 5. What is Lazy Loading?

Loading resources only when they are needed instead of loading everything initially.

---

### 6. Which bundlers support Code Splitting?

- Webpack
- Vite
- Rollup
- Parcel
- esbuild

---

### 7. Is Code Splitting useful for small projects?

Usually **no**. It provides the biggest benefit in medium and large applications.

---

# Practice

## Beginner

- Create two JavaScript modules.
- Import one using a static import.
- Import another using `import()`.

---

## Intermediate

- Load a calculator module only when a button is clicked.
- Create separate modules for Home and About pages.

---

## Advanced

- Build a multi-page application using dynamic imports.
- Implement lazy loading in a React application using `React.lazy()`.

---

# Summary

| Concept                   | Purpose                         |
| ------------------------- | ------------------------------- |
| Code Splitting            | Split large JavaScript files    |
| Dynamic Import            | Load modules on demand          |
| Lazy Loading              | Load resources only when needed |
| Route-Based Splitting     | Split by pages                  |
| Component-Based Splitting | Split by components             |
| Bundler                   | Creates optimized chunks        |

---

# Memory Trick

```text
Large App

↓

Split Code

↓

Small Chunks

↓

Dynamic Import

↓

Lazy Load

↓

Fast Website
```
