function a() {
  console.log("a");
}

function b() {
  a();
  console.log("b");
}

function c() {
  b();
  console.log("c");
}

c();
