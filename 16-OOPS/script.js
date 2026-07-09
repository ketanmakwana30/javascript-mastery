// When we create a Constructor function first letter was Capitle

// This is constructor function
function CreateCar(name, color, price, mxSpeed, average) {
  this.name = name;
  this.color = color;
  this.price = price;
  this.mxSpeed = mxSpeed;
  this.average = average;
  // this.write = function () {
  //   let h1 = document.createElement("h1");
  //   h1.style.color = this.color;
  //   h1.textContent = `This is ${this.name}. It's Max speed is ${this.mxSpeed}`;
  //   document.body.appendChild(h1);
  // };
}

// Use prototype

CreateCar.prototype.company = "Toyota";

CreateCar.prototype.write = function () {
  let h1 = document.createElement("h1");
  h1.style.color = this.color;
  h1.textContent = `This is ${this.name}. It's Max speed is ${this.mxSpeed}`;
  document.body.appendChild(h1);
};

// Create Object
let car1 = new CreateCar("innova", "gray", "$50000", 400, 14);
let car2 = new CreateCar("Fortuner", "wheat", "$65000", 500, 20);
