let h1 = document.querySelector("h1");
let para = document.querySelector("#para");
let image = document.querySelector("img");
let btn = document.querySelector("#btn");
let a = document.querySelector("a");

h1.innerHTML = "Hello !";

para.style.color = "orange";
para.style.fontSize = "20px";

console.log(a.getAttribute("href"));

btn.removeAttribute("disabled");
// btn.classList.add("colorful");
// btn.classList.remove("colorful");
btn.classList.toggle("colorful");

image.setAttribute("title", "Random Image");
image.setAttribute(
  "src",
  "https://plus.unsplash.com/premium_photo-1664391859117-39b8ac442b94?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzcm1IU1p6bm5zY3x8ZW58MHx8fHx8",
);
image.removeAttribute("title");

let h5 = document.createElement("h5");
h5.innerHTML = "This is a Heading 5";
h1.append(h5);

let li = document.querySelectorAll("ul li:nth-child(2n)");
li.forEach(function (elem) {
  elem.classList.add("highlight");
});
