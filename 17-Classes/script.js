// Create class

class User {
  constructor(name, email, color, role) {
    this.name = name;
    this.email = email;
    this.color = color;
    this.role = "User";
  }

  // Write method
  write(text) {
    let h2 = document.createElement("h2");
    h2.style.color = this.color;
    h2.textContent = `${this.name}: ${text}`;
    document.body.appendChild(h2);
  }

  // checkRole
  checkRole() {
    return `You are ${this.role}`;
  }
}

// Clasical Inheritance --> using extends (class -> class)
class Admin extends User {
  constructor(name, email, color) {
    super(name, email, color);
    this.role = "Admin";
  }

  // Remove method
  remove() {
    document.body.querySelectorAll("h2").forEach(function (elem) {
      elem.remove();
    });
  }
}

let user1 = new User("Rajvir", "raj@gmail.com", "blue");
let user2 = new User("Aniket", "anii@gmail.com", "orange");
let admin1 = new Admin("Ketan", "ketanadmin@gmail.com", "red");

//Prototypel Inheritance  --> object inherite all methods/ props ( object -> object)

let coffee = {
  color: "dard",
  drink: function () {
    console.log("Gut gut gut");
  },
};

let arabiataCoffee = Object.create(coffee);

arabiataCoffee.drink(); // Gut gut gut
