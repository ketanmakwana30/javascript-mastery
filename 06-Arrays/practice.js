let fruit = ["Banana", "Apple", "Orange"];
// console.log(fruit[1]);

fruit.push("Mango");
fruit.unshift("Pineapple");

fruit.splice(1, 1, "Kiwi");

// console.log(fruit);

let number = [1, 2, 3, 4];
number.pop();

// console.log(number);

let colors = ["Green", "Yellow"];
colors.splice(1, 0, "Red", "Blue");

// console.log(colors);

let items = [1, 2, 3, 4, 5, 6, 7];
let newItem = items.slice(2, 5);

// console.log(newItem);

let names = ["Mira", "Zara", "Krishna", "Arjuna"];
let newName = names.sort().reverse();

// console.log(newName);

number = [1, 2, 3, 4];
let square = number.map(function (val) {
  return val * val;
});

// console.log(square);

number = [5, 12, 8, 20, 3];
let grater = number.filter(function (val) {
  return val > 10;
});
// console.log(grater);

let sumValue = [10, 20, 30];
let sum = sumValue.reduce((accumulator, val) => {
  return accumulator + val;
}, 0);

// console.log(sum);

let less = [12, 15, 3, 8, 20];
let newLess = less.find((val) => {
  return val < 10;
});

// console.log(newLess);

let studentMark = [45, 60, 28, 90];
let score = studentMark.some((val) => {
  return val < 35;
});

// console.log(score);

let even = [2, 4, 6, 8, 10];
let ansEven = even.every((val) => {
  return val % 2 === 0;
});

// console.log(ansEven);

let fullName = ["Harsh", "Sharma"];
let [firstName, lastName] = fullName;

// console.log(firstName);
// console.log(lastName);

let a = [1, 2];
let b = [3, 4];

let ab = [...a, ...b];

// console.log(ab);

let countries = ["UK", "USA"];
countries = ["India", ...countries];

// console.log(countries);

let numArray = [1, 2, 3, 4];
let newNumArray = [...numArray];

console.log(newNumArray);
