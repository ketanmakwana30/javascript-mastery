// Fetch API Example

async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json();

    //placeholder = company name
    input.placeholder = data[0].username;
  } catch (error) {
    console.log(error);
  }
}

getUsers();
