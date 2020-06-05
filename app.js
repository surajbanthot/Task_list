// Define the UI Variables.

const form = document.querySelector("#task-form");

const tasklist = document.querySelector(".collection");

const clearBtn = document.querySelector(".clear-tasks");

const filter = document.querySelector("#filter");

const taskInput = document.querySelector("#task");

// Load all event listners

loadEventListeners();

// // load all event listners

function loadEventListeners() {
// Add Task event
form.addEventListener("submit", addTask);
}

 // Add Task

function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a Task");
  }

  e.preventDefault();
}
