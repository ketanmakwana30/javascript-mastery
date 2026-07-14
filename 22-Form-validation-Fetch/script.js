const form = document.querySelector("#signupForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

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
