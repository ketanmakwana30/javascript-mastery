# What is the Fetch API?

The **Fetch API** is a built-in JavaScript API used to **send HTTP requests** and **receive responses** from a server.

In simple words:

> **The Fetch API allows your JavaScript code to communicate with a server.**

Examples:

- Login
- Weather App
- GitHub API
- YouTube API
- Instagram Feed
- E-commerce Products

---

# Why Do We Need the Fetch API?

Suppose your website needs user data.

Without Fetch API:

```text
Website

↓

No Communication

↓

No Data
```

With Fetch API:

```text
Website

↓

Fetch API

↓

Server

↓

Response

↓

Display Data
```

---

# What is an API?

**API = Application Programming Interface**

An API allows two applications to communicate.

Example:

```text
Customer

↓

Waiter (API)

↓

Kitchen

↓

Food
```

The waiter carries your request to the kitchen and brings back the result.

---

# What is HTTP?

The Fetch API works over the **HTTP (HyperText Transfer Protocol)**.

Common HTTP Methods:

| Method | Purpose                      |
| ------ | ---------------------------- |
| GET    | Read data                    |
| POST   | Create data                  |
| PUT    | Replace existing data        |
| PATCH  | Update part of existing data |
| DELETE | Delete data                  |

---

# Basic Syntax

```javascript
fetch(url);
```

Example:

```javascript
fetch("https://jsonplaceholder.typicode.com/users");
```

The Fetch API returns a **Promise**.

---

# GET Request

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
```

---

# GET Request with Async/Await

```javascript
async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const users = await response.json();

    console.log(users);
  } catch (error) {
    console.log(error);
  }
}

getUsers();
```

---

# How Fetch Works

```text
Browser

↓

fetch()

↓

HTTP Request

↓

Server

↓

Database

↓

HTTP Response

↓

Response Object

↓

response.json()

↓

JavaScript Object

↓

Display Data
```

---

# Response Object

`fetch()` does **not** return the data directly.

It returns a **Response** object.

```javascript
const response = await fetch(url);

console.log(response);
```

Example:

```text
Response {
    ok: true,
    status: 200,
    headers: {...},
    body: ReadableStream
}
```

---

# Important Response Properties

| Property  | Meaning                     |
| --------- | --------------------------- |
| `ok`      | `true` if status is 200–299 |
| `status`  | HTTP status code            |
| `headers` | Response headers            |
| `body`    | Response body               |
| `url`     | Request URL                 |

---

# response.json()

The server usually sends **JSON text**.

Example:

```json
{
  "name": "Ketan",
  "age": 20
}
```

Convert it into a JavaScript object:

```javascript
const data = await response.json();
```

---

# POST Request

```javascript
const user = {
  name: "Ketan",
  age: 20,
};

fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST",

  headers: {
    "Content-Type": "application/json",
  },

  body: JSON.stringify(user),
});
```

---

# Why JSON.stringify()?

HTTP sends **text**, not JavaScript objects.

```text
JavaScript Object

↓

JSON.stringify()

↓

JSON String

↓

Server
```

---

# PUT Request

```javascript
fetch(url, {
  method: "PUT",

  headers: {
    "Content-Type": "application/json",
  },

  body: JSON.stringify(updatedUser),
});
```

Replaces the entire resource.

---

# PATCH Request

```javascript
fetch(url, {
  method: "PATCH",

  headers: {
    "Content-Type": "application/json",
  },

  body: JSON.stringify({
    age: 21,
  }),
});
```

Updates only specific fields.

---

# DELETE Request

```javascript
fetch(url, {
  method: "DELETE",
});
```

Deletes a resource.

---

# Checking for Errors

`fetch()` only rejects on **network errors**.

HTTP errors like **404** or **500** do **not** automatically reject the Promise.

Always check `response.ok`.

```javascript
const response = await fetch(url);

if (!response.ok) {
  throw new Error("Request Failed");
}

const data = await response.json();
```

---

# HTTP Status Codes

| Code | Meaning               |
| ---- | --------------------- |
| 200  | OK                    |
| 201  | Created               |
| 204  | No Content            |
| 400  | Bad Request           |
| 401  | Unauthorized          |
| 403  | Forbidden             |
| 404  | Not Found             |
| 500  | Internal Server Error |

---

# Headers

Headers provide additional information about the request.

```javascript
headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer TOKEN"
}
```

---

# Request Body

Used mainly with:

- POST
- PUT
- PATCH

Example:

```javascript
body: JSON.stringify({
  name: "Ketan",
});
```

GET requests normally do **not** have a request body.

---

# Fetch Lifecycle

```text
User Action

↓

fetch()

↓

Request Sent

↓

Server

↓

Process Request

↓

Response

↓

Response Object

↓

response.json()

↓

JavaScript Object

↓

Update UI
```

---

# Advantages

- Built into modern browsers
- Promise-based
- Easy to use with Async/Await
- Supports all HTTP methods
- No external library required

---

# Disadvantages

- Doesn't reject on HTTP errors (404, 500)
- Doesn't show upload/download progress by default
- Older browsers may require a polyfill

---

# Interview Questions

### 1. What is the Fetch API?

A built-in API used to send HTTP requests and receive responses.

---

### 2. Does `fetch()` return data directly?

❌ No.

It returns a Promise that resolves to a **Response** object.

---

### 3. What does `response.json()` do?

Converts the JSON response into a JavaScript object.

---

### 4. Difference between GET and POST?

| GET             | POST                    |
| --------------- | ----------------------- |
| Retrieves data  | Sends new data          |
| Usually no body | Usually includes a body |

---

### 5. Difference between PUT and PATCH?

- **PUT** replaces the entire resource.
- **PATCH** updates only selected fields.

---

### 6. Why use `JSON.stringify()`?

Converts a JavaScript object into a JSON string before sending it.

---

### 7. Does `fetch()` reject on a 404 error?

❌ No.

It rejects only on network failures. Check `response.ok` to detect HTTP errors.

---

### 8. Which HTTP methods are commonly used?

- GET
- POST
- PUT
- PATCH
- DELETE

---

# Summary

| Method | Purpose      |
| ------ | ------------ |
| GET    | Read data    |
| POST   | Create data  |
| PUT    | Replace data |
| PATCH  | Update data  |
| DELETE | Delete data  |

---

# Easy Trick to Remember

```text
fetch()

↓

Returns Promise

↓

Response Object

↓

response.json()

↓

JavaScript Object

↓

Display Data
```

## Memory Trick

- **Fetch = Send Request**
- **Response = Server Reply**
- **`response.json()`\*\*** = Convert JSON to Object\*\*
- **GET = Read**
- **POST = Create**
- **PUT = Replace**
- **PATCH = Update**
- **DELETE = Remove**
