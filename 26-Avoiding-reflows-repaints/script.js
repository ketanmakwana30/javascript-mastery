const ul = document.querySelector("ul");
const space = document.createDocumentFragment();

for (let i = 1; i <= 100; i++) {
  let li = document.createElement("li");
  let random = Math.floor(Math.random() * i);
  li.textContent = random;
  space.appendChild(li);
}
ul.appendChild(space);
