# What is Form Validation?

**Form Validation** is the process of checking whether the user has entered valid data before submitting a form.

In simple words:

> **Check the user's input before sending it to the server.**

---

# Validation Flow

```text
User Fills Form

↓

Click Submit

↓

preventDefault()

↓

Validate Inputs

↓

Errors?

↓

Yes → Show Errors

↓

No → Submit Form
```

---

# Step 1: Create HTML Form

```html
<form id="form">
  <input type="text" id="username" placeholder="Username" />

  <small></small>

  <input type="email" id="email" placeholder="Email" />

  <small></small>

  <input type="password" id="password" placeholder="Password" />

  <small></small>

  <button type="submit">Register</button>
</form>
```

---

# Step 2: Select Elements

```javascript
const form = document.getElementById("form");

const username = document.getElementById("username");

const email = document.getElementById("email");

const password = document.getElementById("password");
```

---

# Step 3: Listen for Submit Event

```javascript
form.addEventListener("submit", validateForm);
```

---

# Step 4: Prevent Default Form Submission

```javascript
function validateForm(event) {
  event.preventDefault();
}
```

### Why use `preventDefault()`?

Normally:

```text
Submit

↓

Page Refresh

↓

Form Sent
```

With `preventDefault()`:

```text
Submit

↓

Stop Refresh

↓

Validate Data

↓

Submit If Valid
```

---

# Step 5: Validate Empty Fields

```javascript
if (username.value.trim() === "") {
  console.log("Username Required");
}
```

---

# trim()

Removes spaces from the beginning and end.

```javascript
let name = "   Ketan   ";

console.log(name.trim());
```

Output

```text
Ketan
```

---

# Step 6: Validate Email

```javascript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(email.value)) {
  console.log("Invalid Email");
}
```

---

# Understanding Email Regex

```javascript
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```

| Part      | Meaning   |
| --------- | --------- |
| `^`       | Start     |
| `[^\s@]+` | Username  |
| `@`       | @ Symbol  |
| `[^\s@]+` | Domain    |
| `\.`      | Dot       |
| `[^\s@]+` | Extension |
| `$`       | End       |

Valid

```text
abc@gmail.com

user123@yahoo.in
```

Invalid

```text
abcgmail.com

@gmail.com

abc@
```

---

# test() Method

Checks whether a string matches a Regular Expression.

```javascript
console.log(emailRegex.test("abc@gmail.com"));
```

Output

```text
true
```

---

# Step 7: Validate Password

```javascript
if (password.value.length < 8) {
  console.log("Password Too Short");
}
```

---

# Step 8: Confirm Password

```javascript
if (password.value !== confirmPassword.value) {
  console.log("Passwords Don't Match");
}
```

---

# Step 9: Show Error

```javascript
function showError(input, message) {
  input.style.border = "2px solid red";

  input.nextElementSibling.innerText = message;
}
```

---

# Step 10: Show Success

```javascript
function showSuccess(input) {
  input.style.border = "2px solid green";

  input.nextElementSibling.innerText = "";
}
```

---

# Example

```javascript
if (username.value === "") {
  showError(username, "Username Required");
} else {
  showSuccess(username);
}
```

---

# Complete Validation Example

```javascript
form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (username.value.trim() === "") {
    showError(username, "Username Required");

    return;
  }

  if (!emailRegex.test(email.value)) {
    showError(email, "Invalid Email");

    return;
  }

  if (password.value.length < 8) {
    showError(password, "Minimum 8 Characters");

    return;
  }

  alert("Form Submitted Successfully");
});
```

---

# Live Validation

```javascript
username.addEventListener("input", () => {
  if (username.value.length >= 3) {
    showSuccess(username);
  }
});
```

---

# Validation Order

```text
Username

↓

Email

↓

Password

↓

Confirm Password

↓

Phone

↓

Submit
```

---

# Common Validation Rules

| Field            | Validation        |
| ---------------- | ----------------- |
| Username         | Required          |
| Email            | Regex             |
| Password         | 8+ Characters     |
| Confirm Password | Match Password    |
| Phone            | Numbers Only      |
| Age              | Between Min & Max |

---

# Best Practices

- Use `trim()`
- Use `preventDefault()`
- Show errors below input
- Don't use too many alerts
- Validate on server also
- Keep validation functions reusable

---

# Interview Questions

### 1. What is Form Validation?

Checking user input before submitting the form.

---

### 2. Why use `preventDefault()`?

Stops the browser from submitting the form before validation.

---

### 3. What does `trim()` do?

Removes leading and trailing spaces.

---

### 4. What does `test()` do?

Checks whether a string matches a Regular Expression.

Returns:

- `true`
- `false`

---

### 5. Why use Regular Expressions?

To validate patterns like:

- Email
- Phone Number
- Password
- Username

---

### 6. Difference between Client-side and Server-side Validation?

| Client Side | Server Side           |
| ----------- | --------------------- |
| Browser     | Server                |
| Fast        | Secure                |
| Better UX   | Required for security |

---

### 7. Can JavaScript validation be trusted?

❌ No.

Always validate again on the server.

---

# Practice

### Beginner

- Validate username.
- Validate email.
- Validate password.

---

### Intermediate

- Confirm password.
- Validate phone number.
- Validate age.

---

### Advanced

- Password strength checker.
- Login form.
- Registration form.
- Multi-step form.

---

# Mini Project

## Registration Form

Fields:

- Username
- Email
- Phone
- Password
- Confirm Password

Features:

- Empty field validation
- Email validation
- Password validation
- Password matching
- Error messages
- Success messages

---

# Summary

| Method               | Purpose              |
| -------------------- | -------------------- |
| `preventDefault()`   | Stop form submission |
| `trim()`             | Remove spaces        |
| `test()`             | Check Regex          |
| `showError()`        | Display error        |
| `showSuccess()`      | Display success      |
| `addEventListener()` | Listen for events    |

---

# Memory Trick

```text
Form

↓

Submit

↓

preventDefault()

↓

Validate

↓

trim()

↓

Regex

↓

test()

↓

Show Error

↓

Show Success

↓

Submit
```
