let input = document.querySelector("input");

// Debounceing

function debounce(fun, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fun(...args);
    }, delay);
  };
}
function search(value) {
  console.log("Searching:", value);
}
const debouncedSearch = debounce(search, 500);

// input.addEventListener("input", (e) => {
//   debouncedSearch(e.target.value);
// });

// Throttling

function throttle(fun, delay) {
  timer = 0;
  return function (...args) {
    let now = Date.now();
    if (now - timer >= delay) {
      timer = now;
      fun(...args);
    }
  };
}

input.addEventListener(
  "input",
  throttle(function (dets) {
    console.log("letter: ", dets.data);
  }, 1000),
);
