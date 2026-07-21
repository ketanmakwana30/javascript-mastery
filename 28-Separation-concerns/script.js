let btn = document.querySelector("button");
let ul = document.querySelector("ul");

// Separate logic
function add(a, b) {
  return a + b;
}

btn.addEventListener("click", () => {
  let num1 = Math.floor(Math.random() * 10 + 1);
  let num2 = Math.floor(Math.random() * 10 + 1);

  let finalAdd = add(num1, num2);

  let li = document.createElement("li");
  li.textContent = finalAdd;
  ul.appendChild(li);
});
