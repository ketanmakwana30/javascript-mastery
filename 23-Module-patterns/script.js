// 1.........

// Module Patterns ::  IIFE --> Immediately Invoked Function Expression

let Bank = (function () {
  let balance = 12000;

  function checkBalance() {
    console.log(balance);
  }

  function setBalance(val) {
    balance = val;
  }

  function withdraw(val) {
    if (val <= balance) {
      balance -= val;
      console.log(`You withdraw ${val} and Available balance is ${balance}`);
    } else {
      console.log("Unsufficient Balance !");
    }
  }

  // Return a Object in IIFE
  return {
    checkBalance,
    setBalance,
    withdraw,
  };
})();

// Bank.checkBalance();
// Bank.setBalance(22600);
// Bank.checkBalance();
// Bank.withdraw(4500);

// 2.........

//   Revealing module pattern

let Bank1 = (function () {
  let balance = 12000;

  function checkBalance() {
    console.log(balance);
  }

  function setBalance(val) {
    balance = val;
  }

  function withdraw(val) {
    if (val <= balance) {
      balance -= val;
      console.log(`You withdraw ${val} and Available balance is ${balance}`);
    } else {
      console.log("Unsufficient Balance !");
    }
  }

  // Reveal public pointers   ::    Return a Object with Keys ---> revealing
  return {
    check: checkBalance,
    set: setBalance,
    draw: withdraw,
  };
})();

// Bank1.check();
// Bank1.set(22600);
// Bank1.check();
// Bank1.draw(4500);

// 3........

// Factory function pattern

function createProduct(name, price) {
  let stock = 10;
  return {
    name,
    price,
    check() {
      console.log(stock);
    },
    buy(qty) {
      if (qty <= stock) {
        stock -= qty;
        console.log(`You booked ${qty} and ${stock} pieces  left`);
      } else {
        console.error(`We have only ${stock}`);
      }
    },
    refill(qty) {
      stock += qty;
      console.log(`Refill the stock - ${stock} pieces now.`);
    },
  };
}

// let iphone = createProduct("iPhone", 120000);
// let laptop = createProduct("HP Laptop", 150000);

// 4............

// Observer Pattern ( Basic Pub - Sub )

class YoutubeChannel {
  // make constructor function
  constructor() {
    this.subscribers = [];
  }

  // Subscribe method
  subscribe(user) {
    this.subscribers.push(user);
    user.update(`- Your new subscriber`);
  }

  // Unsubscribe method
  unsubscribe(user) {
    this.subscribers = this.subscribers.filter((sub) => sub !== user);
    user.update(`- Unsubscribe your channel`);
  }

  // Notify method
  notify(message) {
    this.subscribers.forEach((sub) => sub.update(`${message}`));
  }
}

class User {
  constructor(user) {
    this.name = user;
  }

  update(data) {
    console.log(`${this.name} `, data);
  }
}

let sheryians = new YoutubeChannel();
let user1 = new User("harsh");
let user2 = new User("Amit");

sheryians.subscribe(user1);
sheryians.subscribe(user2);

sheryians.notify(`, Sheyians is live...`);
// sheryians.unsubscribe(user2);
