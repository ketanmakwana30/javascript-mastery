const student = {
  name: "harsh sharma",
  age: 18,
  isEnrolled: false,
};

const canUse = {
  10: "Answer",
  true: "Yes",
};
// console.log(canUse[10]);
// console.log(canUse[true]);

const user = {
  firstName: "ketan",
};
// console.log(user['firstName']);

let key = "age";
const newUser = {
  age: 26,
};
// console.log(newUser[key]);

const address = {
  city: "Bhopal",
  coordinates: {
    lat: 23.3,
    lng: 84.2,
  },
  // coordinateses: {
  //     let:23.3,
  //     lng:84.2,
  // }
};
// console.log(address.coordinates.lat);        //  print let
// console.log(address?.coordinates?.lat);      // optional chaining

let { city } = address; // destructure city and lat
let { lat } = address.coordinates;

const nameUser = {
  "full-name": "Harsh",
};

let { "full-name": fullName } = nameUser;

const course = {
  title: "js",
  duration: "4 weeks",
};

for (let details in course) {
  // console.log(details);
}

Object.entries(course).forEach(function (val) {
  // console.log(val[0] + " : " + val[1]);
});

let original = { a: 1, b: 2, c: 3 };
let copy = { ...original };

let obj1 = { info: { score: 80 } };
let simpleClone = { ...obj1 };
let clone = JSON.parse(JSON.stringify(obj1));
clone.info.score = 100;
// console.log(simpleClone.info.score);
// console.log(clone.info.score);

const person = {};
// console.log(person?.peofile?.name);

let key1 = "role";
const newObj = {
  name: "ketan",
  [key1]: "admin",
};

console.log(newObj);
