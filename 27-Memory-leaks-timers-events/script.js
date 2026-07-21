let count = 0;
const inter = setInterval(() => {
  if (count < 10) {
    count++;
    console.log(count);
  } else {
    clearInterval(inter);
    console.log("Finished");
  }
}, 500);
