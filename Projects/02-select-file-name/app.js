let fileBtn = document.querySelector('.fileBtn');
let input = document.querySelector('input');

fileBtn.addEventListener("click", () => {
    input.click();
});

input.addEventListener("change", (dets) => {
    const file = dets.target.files[0];
    if (file){
        fileBtn.textContent = file.name;
    }
});