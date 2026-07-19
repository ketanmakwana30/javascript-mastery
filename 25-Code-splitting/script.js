const btn = document.querySelector(".btn");

btn.addEventListener("click", async () => {
  const heavy = await import("./heavy.js");
  console.log(heavy.heavyFeature());
});
