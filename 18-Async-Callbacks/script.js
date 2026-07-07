function derSe(func) {
  setTimeout(func, Math.floor(Math.random() * 5) * 1000);
}

// derSe(function () {
//   console.log("function in a other function perameter");
// });

function getProfile(name, func) {
  func({ _id: 121, name, age: 20, email: "hui@hui.hui" });
}

function getPost(id, func) {
  func({
    _id: id,
    posts: ["post1", "post2", "post3", "post4", "post5", "post6"],
  });
}

function sevedPost(id, func) {
  func({
    _id: id,
    seved: ["post2", "post4", "post5"],
  });
}

// Callback hell
getProfile("ketan", function (data) {
  console.log("Fetching User data...");
  setTimeout(() => {
    console.log(data);
    console.log("Fetching All post...");
    setTimeout(() => {
      getPost(data._id, function (post) {
        console.log(post);
        console.log("Fetching Seved post...");
        setTimeout(() => {
          sevedPost(data._id, function (seved) {
            console.log(seved);
          });
        }, 1000);
      });
    }, 2000);
  }, 2000);
});
