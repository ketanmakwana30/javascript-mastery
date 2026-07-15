let taskInput = document.querySelector("#todoInput");
let btn = document.querySelector("#btn");
let ul = document.querySelector("ul");

const todoApp = (function () {
  function createUIElement(taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;
    li.classList.add("li");
    ul.appendChild(li);

    const removeBtn = document.createElement("div");
    removeBtn.textContent = "X";
    removeBtn.classList.add("remove");
    li.appendChild(removeBtn);

    removeBtn.addEventListener("click", () => {
      li.remove();
      deleteFromStorage(taskText);
    });
  }

  // 2. Add task (Modified to save data)
  function addTask() {
    if (taskInput.value.trim() === "") {
      alert("Enter a task");
      return;
    }

    const taskText = taskInput.value;
    createUIElement(taskText);

    // Save to localStorage array
    let tasks = JSON.parse(localStorage.getItem("todos")) || [];
    tasks.push(taskText);
    localStorage.setItem("todos", JSON.stringify(tasks));

    taskInput.value = "";
  }

  // 3. Load tasks on page refresh
  function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("todos")) || [];
    tasks.forEach((taskText) => {
      createUIElement(taskText);
    });
  }

  // 4. Delete specific task from array
  function deleteFromStorage(taskTextToRemove) {
    let tasks = JSON.parse(localStorage.getItem("todos")) || [];
    tasks = tasks.filter((task) => task !== taskTextToRemove);
    localStorage.setItem("todos", JSON.stringify(tasks));
  }

  return {
    addTask,
    loadTasks, // Expose to let the browser call it on load
  };
})();

btn.addEventListener("click", todoApp.addTask);
// 5. Automatically load stored items when the page opens
document.addEventListener("DOMContentLoaded", todoApp.loadTasks);
