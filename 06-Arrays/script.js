let array =  [3, 12, 19, 24, 48, 55, 62, 74, 87, 91];

// array.push(12);                              // add end
// array.pop();                                 // remove end
// array.unshift(0);                            // add start
// array.shift();                               // remove start



// let spliceArr = array.splice(4,2);          // remove from middle --> 4th index, and 2 value remove ("" Change Original "")
// let sliceArr = array.slice(0, 2);           // copy of Array 



// array.reverse();                            // reverse array



// sortArr = array.sort(function(a, b) {
//     return a-b;
// });                                          // sort array ( a-b OR b-a )                    



// array.forEach(function (val) {
//     console.log(val + 10);
// });                                          // Function run for each value



// let newArr = array.map(function(val){
//     if(val > 19) return val;
// });                                          // Same size New Array - use map - (No value - undefined)



// let newFilter = array.filter(function(val){
//     if(val > 19) return val;
// });                                          // New Array - true value only



// let reduceArr = array.reduce(function(accumulator, val){
//     return accumulator + val;
// },0);                                        // Only one single value return



// let arr = [
//     {id:1 , key:1},
//     {id:2 , key:2},
//     {id:3 , key:1}
// ];

// let findArr = arr.find(function(val) {
//     return val.key ===1;
// });                                      // find first value of array



// let someArr = array.some(function (val) {
    // return val < 15;
// });                                      // for show any one be Exist here ? (true - false)



// let everyArr = array.every(function (val) {
//     return val < 15;
// });                                      // for show All be Exist here ? (true - false)



// let [a, b, c, , d] = array;              // Destructuring ( create variable )  


let array2 = [...array];                    // spread  - for  copy array

// console.log(array);
