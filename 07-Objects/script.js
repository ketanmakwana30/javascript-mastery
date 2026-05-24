let role = "admin"

let students = {
    fullName: 'Ketan Makwana',
    age: 19,
    class: 'BCA',
    marks: {
        math: 76,
        eng: 89,
        eco: 90
    },
    [role]: "ketan"    // Computed properties
}

// console.log(students.age);

let { math, eng, eco } = students.marks;                // Destructuring

for (let key in students) {
    console.log(key);                                   // Print key
    console.log(students[key]);                         // print value of key
}

console.log(Object.keys(students));                     // When all Keys required ( in array) 

console.log(Object.entries(students));                  // Array of Array - make array 

let newstd = { ...students }                            // spread operator ( copy )
let newstd2 = Object.assign({ address: 'Khari' }, students);  // for copy as spread - not use


let newstd33 = JSON.parse(JSON.stringify(students));      // nested obj copy

//      console.log(newstd3?.marks?.eco);                      // obj not exist - but no Error ( Optional Chaining)

