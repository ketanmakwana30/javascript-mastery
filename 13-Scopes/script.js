if(true){
    let a = 30;                 // block scope
}

function abcd (){       
    let a = 20;                 // Functional scope
    console.log(a);
}

function func(){
    let a = 40;
    function func2(){
        console.log(a);         // Lexical scope
    }
}

let a = 10;                     // Global scope

function xyz (){   
    console.log(a);
}

function pqr(){
    let a = 50;
    xyz();                      // Dynamic scope (it not working in js - js is Lexical scoped)
}

pqr();