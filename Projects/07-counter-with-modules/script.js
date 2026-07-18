let div = document.querySelector("div");
let inc = document.querySelector(".inc");
let dec = document.querySelector(".dec");
let restart = document.querySelector(".reset");
// IIFE

const counter = (function () {
  let count = 0;

  function increment() {
    count++;
    div.textContent = count;
  }

  function decrement() {
    count--;
    div.textContent = count;
  }

  function reset() {
    count = 0;
    div.textContent = count;
  }

  return {
    increment,
    decrement,
    reset,
  };
})();
inc.addEventListener("click", counter.increment);
dec.addEventListener("click", counter.decrement);
restart.addEventListener("click", counter.reset);

// Revealing module

// const counter = (function () {
//   let count = 0;

//   function increment() {
//     count++;
//     console.log(count);
//   }

//   function decrement() {
//     count--;
//   }

//   function getCount() {
//     return count;
//   }

//   return {
//     inc: increment,
//     decrement: decrement,
//     getCount: getCount,
//   };
// })();

// counter.inc();

// method 2 of Releaving

// const counter = (function () {
//   let count = 0;

//   return {
//     increment() {
//       count++;
//       console.log(count);
//     },

//     getCount() {
//       return count;
//     },
//   };
// })();

// counter.increment();
