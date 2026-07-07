// Global
console.log(this); // window

// Function
function abcd() {
  // window
  console.log(this);
}
abcd();

// Method of Object (With ES5 function)
let obj = {
  // object
  name: "Ketan",
  age: 19,
  sayName: function () {
    console.log(this);
  },
};
obj.sayName();

// Method of Object (With ES6 Arrow function)
let obj2 = {
  // window
  name: "Ketan",
  age: 19,
  sayName: () => {
    console.log(this);
  },
};
obj2.sayName();

// Method of Object (With ES5 inner ES5  function)
let obj3 = {
  // window
  name: "Ketan",
  age: 19,
  sayName: function () {
    function inner() {
      console.log(this);
    }
    inner();
  },
};
obj3.sayName();

// Method of Object (With ES5 inner ES6 Arrow  function)
let obj4 = {
  // Object
  name: "Ketan",
  age: 19,
  sayName: function () {
    let inner = () => {
      console.log(this);
    };
    inner();
  },
};
obj4.sayName();

// Event Handler
document.querySelector("h2").addEventListener("click", function () {
  // element
  console.log(this);
});

// Classes
class Student {
  constructor() {
    console.log("This is Class !");
    this.a = 20; // Blank Object
  }
}
let createClass = new Student();
console.log(createClass);
