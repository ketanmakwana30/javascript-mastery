// Create Promises

let promise1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let random = Math.floor(Math.random() * 10);
    if (random > 5) resolve("resolve with " + random);
    else reject("reject with " + random);
  }, 3000);
});

// Async - Await

async function promiseRun() {
  try {
    let value = await promise1;
    console.log(value);
  } catch (err) {
    console.log(err);
  }
}

promiseRun();
