// function score(...marks){
//     let total = 0;
//     marks.forEach(function (val) {
//         total = total + val;
//     })
//     return total;
// }

// console.log(score(20, 54, 74, 34, 65 , 75, 34, 68, 34, 56, 34, 24, 57 , 56, 76, 53));

// let other = (val) => {
//     val();
// }
// other(function(){
//     console.log("hellow worlds");
// });

//Closure

function outer() {
  let a = 10;
  function inner() {
    let b = 20;
    console.log(a + b);
  }
  return inner;
}

let innerfun = outer();
console.log(innerfun());
