// Create Promises

let promise1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let random = Math.floor(Math.random() * 10);
    if (random > 5) resolve("resolve with " + random);
    else reject("reject with " + random);
  }, 3000);
});

promise1
  .then(function (value) {
    console.log(value);
  })
  .catch(function (value) {
    console.log(value);
  });
