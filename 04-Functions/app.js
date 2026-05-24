function greet(){                   // declaration / Statments
    console.log("Hello");
}
    
let Greeting = function () {        // Exprestion
    console.log("Hello Bhaiya");
}

let greetHello = () => {            // Arrow function( fet arrow)
    console.log("Hello Bhai");   
}



let sum = (a,b) => {                // Parameters
    console.log(a + b);
}
// sum(9,29);                          // Arguments



// # type of Paremeters ( Default, rest, spread -- array & Object)

 function add (a = 0,b = 0)  {  // Default Parameters
    console.log(a + b);
}
// add(4,3);


function abcd(a, b, c, ...value){            // rest parameters( for function )
    console.log(a, b, c, value);
}
// abcd(1,2,3,4,5,6,7,8,9,10);



function chechReturn(v =0) {        // return ( use only in function)
    return 12 + v;
}
let val = chechReturn();
// console.log(val);


// first class function --> it use as a value , function call - use function as  

// Higher order function --> return function OR Accept function in parameters

function xyz(value) {               // Higher order function
    return function (){
        console.log("Hello");
    };
}
xyz()();

// xyz( function() {
//     console.log("high order"); 
// });



// IIFE

(function(){
    console.log("IIFE   ");
    
})();