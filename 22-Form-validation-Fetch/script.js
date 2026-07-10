const form = document.querySelector("#signupForm");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

// const nameError = document.querySelector("#nameError");
// const emailError = document.querySelector("#emailError");
// const passwordError = document.querySelector("#passwordError");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  fetch("url", {
    method: "POST",
    body: JSON.stringify({
      nameInput,
      emailInput,
      passwordInput,
    }),
  });
});
