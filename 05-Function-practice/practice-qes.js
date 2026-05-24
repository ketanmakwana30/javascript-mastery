// Create BMI calculator (Body Mass Index)

function BMI (weight, height){
    return weight / (height * height)
} 
// console.log(BMI(50,1.71).toFixed(4));



// Discount Calc

function discountCalc (discount){
    return function (price){
        return price - price * (discount / 100);
    }   
}
let ten = discountCalc(10);
let twenty = discountCalc(20);

// console.log(ten(50000));
// console.log(twenty(2700));


// Counter 

function counter (){
    let count = 0;
    return function(){
        count ++;
        return count;
    }
}
let c = counter()
// console.log(c());


// Pure function

function double(val){
    return val * 2;
}
// console.log(double(5)); 


// use IIFE for variable

( function () {
    const password = "harsh@123";
    console.log(password);
})();

