// 1. For loop

// for(let i=1; i<=10; i++){
//     console.log(i);
// }




// 2. While loop

// let i = 10;
// while(i<=22) {
//     console.log("Hello", i);
//     i++;
// }




// 3. Do-While

// let i = 50;
// do{
//     console.log("Hello ", i);
//     i--;
// } while(i>40);




// 4. for --> even 20 

// for(let i=1; i<=20; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }




// 5. while --> odd 15

// let i=1;
// while(i<=15){
//     if(i % 2 === 1){
//         console.log(i);
//     }
//     i++;    
// }


 
// 6. 5 table 

// for (let i=1; i<=10; i++){
//     console.log(`5 X ${i} = ${i*5}`);
// }



// 7. 1 to 100 sum 

// sum = 0;
// for( let i=1; i<=100; i++){
//     sum = sum + i;
// }
// console.log(sum);



// 8. Print 1 to 50 Divid by 3

// for(let i=1; i<=50; i++){
//     if (i % 3 === 0){
//         console.log(i);
//     }
// }



// 9. take user no and odd - even 

// let num = prompt("Enter a number");

// for(let i=1; i<=num; i++){
//     if( i % 2 === 0){
//         console.log(`${i} is Even`);
//     } else {
//         console.log(`${i} is Odd`);   
//     }
// }



// 10. How many num are dev in 1 to 100 by 3 and 5

// for (let i=1; i<=100; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log(i);
//     }
// }




// Use of Continue and Break 

// 1. Stop when find 1st multiple by 7

// for (let i=1; i<=100; i++){
//     console.log(i);
//     if(i % 7 === 0){
//         break;
//     }
// }



// 2. Skip 3 multiple in 1 to 20

// for (let i=1; i<=20; i++){
//     if(i % 3 === 0) continue;
//     console.log(i);
// }



// 3. first 5 odd num only

let count = 0;
for (let i=1; i<=100; i++){
    if (i % 2 === 1){
        count++;
        console.log(i);
    }
    if (count === 5) break;
}