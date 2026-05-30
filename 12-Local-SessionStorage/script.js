localStorage.setItem("name", "Ketan");
let val = localStorage.getItem("name");
localStorage.removeItem("name");
localStorage.setItem("name", "Krishna");
localStorage.clear();

// localStorage.setItem("friends", ["jay", "rakesh", "rajvir"])  // It not work
localStorage.setItem("friends", JSON.stringify(["jay", "rakesh", "rajvir"]));

let friend = JSON.parse(localStorage.getItem("friends"));

