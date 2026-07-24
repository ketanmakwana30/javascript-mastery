# What is Form Validation?

**Form Validation** is the process of checking whether the user has entered valid and complete data before submitting a form.

In simple words:

> **Validate user input before sending it to the server.**

---

# Why Do We Need Form Validation?

Without validation:

- Empty fields can be submitted.
- Invalid email addresses can be entered.
- Weak passwords can be used.
- Incorrect data reaches the server.

With validation:

- Better user experience
- Cleaner data
- Improved security
- Fewer server errors

---

# Types of Validation

```text id="m6gxbo"
Form Validation

↓

Client-Side Validation

↓

Server-Side Validation
```

---

# Client-Side Validation

Performed in the browser using:

- HTML
- JavaScript

Advantages:

- Fast
- No server request
- Better user experience

---

# Server-Side Validation

Performed on the server.

Examples:

- Node.js
- PHP
- Python
- Java
- ASP.NET

Important:

> **Never rely only on client-side validation. Always validate again on the server.**

---

# HTML Validation

## required

```html id="pvtebo"
<input type="text" required />
```

---

## minlength

```html id="cx8r7j"
<input type="password" minlength="8" />
```

---

## maxlength

```html id="ld1bzw"
<input type="text" maxlength="20" />
```

---

## min

```html id="jbd5na"
<input type="number" min="18" />
```

---

## max

```html id="zhnrse"
<input type="number" max="60" />
```

---

## pattern

```html id="5b56v8"
<input type="text" pattern="[A-Za-z]+" />
```

Uses Regular Expressions.

---

# JavaScript Validation

## Empty Field

```javascript id="o0blv2"
const name = input.value.trim();

if (name === "") {
  alert("Name is required");
}
```

---

# Length Validation

```javascript id="w4t09k"
if (password.length < 8) {
  console.log("Weak Password");
}
```

---

# Email Validation

```javascript id="zq3g7e"
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

console.log(emailRegex.test(email));
```

Returns:

```text id="tv5b6u"
true

or

false
```

---

# Number Validation

```javascript id="7e26yj"
if (age < 18) {
  console.log("Invalid Age");
}
```

---

# Password Validation

Example Requirements:

- Minimum 8 characters
- One uppercase letter
- One lowercase letter
- One number
- One special character

Example Regex

```javascript id="s1n2co"
/^(?=.*[a-z])
(?=.*[A-Z])
(?=.*\d)
(?=.*[@$!%*?&])
[A-Za-z\d@$!%*?&]{8,}$/;
```

---

# Confirm Password

```javascript id="4kqdkv"
if (password !== confirmPassword) {
  console.log("Passwords do not match");
}
```

---

# preventDefault()

Prevent form submission until validation succeeds.

```javascript id="mb7ixs"
form.addEventListener("submit", (event) => {
  event.preventDefault();
});
```

---

# Form Validation Example

HTML

```html id="aqp9w4"
<form id="form">
  <input id="username" type="text" />

  <button>Submit</button>
</form>
```

JavaScript

```javascript id="nj7owz"
const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();

  if (username === "") {
    alert("Username Required");

    return;
  }

  alert("Form Submitted");
});
```

---

# Showing Error Messages

```javascript id="k8h26v"
error.innerText = "Email is required";
```

---

# Clearing Errors

```javascript id="h8z7z5"
error.innerText = "";
```

---

# Real-Time Validation

```javascript id="rh8rq0"
input.addEventListener("input", () => {
  console.log(input.value);
});
```

Useful for:

- Password strength
- Live search
- Email validation

---

# Validation Flow

```text id="zoc6rv"
User Fills Form

↓

Click Submit

↓

Validate Inputs

↓

Valid?

↓

Yes

↓

Submit Form

↓

No

↓

Show Errors
```

---

# Common Validation Rules

| Field            | Validation     |
| ---------------- | -------------- |
| Name             | Required       |
| Email            | Regex          |
| Password         | Minimum Length |
| Confirm Password | Match Password |
| Age              | Range Check    |
| Phone            | Digits Only    |

---

# Best Practices

- Validate on both client and server.
- Show clear error messages.
- Highlight invalid fields.
- Trim whitespace.
- Never trust client-side validation alone.

---

# Interview Questions

### 1. What is Form Validation?

Checking user input before processing or submitting it.

---

### 2. Why is Form Validation important?

To ensure correct, complete, and secure data.

---

### 3. What are the two types of validation?

- Client-Side Validation
- Server-Side Validation

---

### 4. Why use `preventDefault()`?

To stop form submission until validation is complete.

---

### 5. What does `trim()` do?

Removes whitespace from the beginning and end of a string.

Example:

```javascript id="g0qgdr"
"  Ketan  ".trim();
```

Output:

```text id="96c4jb"
"Ketan"
```

---

### 6. What does `test()` do?

Checks whether a string matches a Regular Expression.

Returns:

```text id="jmtomr"
true

or

false
```

Example:

```javascript id="3g44kp"
emailRegex.test(email);
```

---

### 7. What is Regex?

A **Regular Expression** is a pattern used to match, search, and validate text.

---

### 8. Difference between HTML Validation and JavaScript Validation?

| HTML     | JavaScript |
| -------- | ---------- |
| Built-in | Custom     |
| Limited  | Flexible   |

---

# Practice

## Beginner

- Validate an empty username.
- Validate password length.
- Validate age greater than 18.

---

## Intermediate

- Validate email using Regex.
- Validate phone number.
- Match password and confirm password.

---

## Advanced

- Build a Login Form.
- Build a Registration Form.
- Show live validation messages.
- Display password strength.

---

# Mini Project

## Registration Form

Fields:

- Name
- Email
- Phone
- Password
- Confirm Password

Validation:

- All fields required.
- Email format valid.
- Phone contains only digits.
- Password at least 8 characters.
- Passwords match.

Display appropriate error messages for invalid input.

---

# Summary

| Validation       | Purpose              |
| ---------------- | -------------------- |
| required         | Mandatory field      |
| minlength        | Minimum characters   |
| maxlength        | Maximum characters   |
| pattern          | Regex validation     |
| trim()           | Remove spaces        |
| test()           | Test Regex           |
| preventDefault() | Stop form submission |
| Regex            | Validate patterns    |

---

# Memory Trick

```text id="3i6xyu"
Form

↓

Input

↓

Validate

↓

Required

↓

Regex

↓

trim()

↓

test()

↓

preventDefault()

↓

Errors

↓

Submit
```
