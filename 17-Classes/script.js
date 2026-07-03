// Create class

class CreatePencil {
  constructor(name, price, color) {
    this.name = name;
    this.price = price;
    this.color = color;
  }
  write(text) {
    let h1 = document.createElement("h1");
    h1.style.color = this.color;
    h1.textContent = text;
    document.body.appendChild(h1);
  }

  erase() {
    document.body.querySelectorAll("h1").forEach((elem) => {
      if (elem.style.color === this.color) {
        elem.remove();
      }
    });
  }
}

let pencil1 = new CreatePencil("natraj", 10, "red");
let pencil2 = new CreatePencil("apsara", 15, "orange");
let pencil3 = new CreatePencil("doms", 20, "blue");
