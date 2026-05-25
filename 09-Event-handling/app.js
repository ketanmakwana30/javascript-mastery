let h1 = document.querySelector('h1');
let input = document.querySelector('input');

h1.addEventListener("click", ()=> {
    h1.style.color = "red";
})

input.addEventListener ("input", (dets) => {
    if(dets.data !== null){
        console.log(dets.data);
        
    }
})

let ul = document.querySelector("ul");
ul.addEventListener("click", function (dets) {
    dets.target.classList.toggle("lt");
})