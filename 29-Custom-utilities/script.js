// Create Own map function

const arr = [1, 2, 3, 4, 5, 6, 7];

function myMap(arr, callback) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i], i, arr));
  }
  return newArr;
}

let ans = myMap(arr, function (val) {
  return val * 10;
});

console.log(ans);
