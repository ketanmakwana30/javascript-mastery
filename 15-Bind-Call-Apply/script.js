let obj = {
  name: "ketan",
  age: 19,
};

// Use of Call  --> this is object in this case
function showName() {
  console.log(this);
}
showName.call(obj);

// Use of Call with parameters & Arguments
function showName2(a, b, c) {
  console.log(this, a, b, c);
}
showName2.call(obj, 1, 2, 3);

// Use of Apply --> only 2 Arguments are allowed
function showName3(a, b, c) {
  console.log(this, a, b, c);
}
showName3.apply(obj, [1, 2, 3]);

// Use of Bind --> Create brand-new Function (It store in variable)
function showName3(a, b, c) {
  console.log(this, a, b, c);
}
let func = showName3.bind(obj, 1, 2, 3);
func();
