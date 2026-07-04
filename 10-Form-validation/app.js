const form = document.getElementById("form");

const email = document.getElementById("email");
const password = document.getElementById("password");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", function (e) {
  // Prevent page refresh
  e.preventDefault();

  let isValid = true;

  // Email Regex
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  // Password Regex
  const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

  // ================= EMAIL VALIDATION =================

  if (email.value.trim() === "") {
    emailError.innerText = "Email is required";
    email.classList.add("fail");
    email.classList.remove("success");

    isValid = false;
  } else if (!emailPattern.test(email.value)) {
    emailError.innerText = "Enter valid email";
    email.classList.add("fail");
    email.classList.remove("success");

    isValid = false;
  } else {
    emailError.innerText = "";
    email.classList.remove("fail");
    email.classList.add("success");
  }

  // ================= PASSWORD VALIDATION =================

  if (password.value.trim() === "") {
    passwordError.innerText = "Password is required";
    password.classList.add("fail");
    password.classList.remove("success");

    isValid = false;
  } else if (!passwordPattern.test(password.value)) {
    passwordError.innerText =
      "Password must contain uppercase, number & special character";

    password.classList.add("fail");
    password.classList.remove("success");

    isValid = false;
  } else {
    passwordError.innerText = "";
    password.classList.remove("fail");
    password.classList.add("success");
  }

  // ================= SUCCESS =================

  if (isValid) {
    alert("Form Submitted Successfully");
  }
});
