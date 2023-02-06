// An array to store the task objects
   let tasks = [];

// Function to create a task
function createTask() {
  // Get the values from the form inputs
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  let dueCompletiondate = document.getElementById("due completion date").value;

  // Create a new task object
  let task = {
    title: title,
    description: description,
    DueCompletionDate: DueCompletionDate,
  };

  // Add the task to the tasks array
  tasks.push(task);

  // Clear the form inputs
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  document.getElementById("expected-completion-date").value = "";

  // Render the updated task list
  renderTaskList();
}

// Function to render the task list
function renderTaskList()

  // Get the task list element
  let taskListElement = document.getElementById("task-list");

  // Clear the existing task list
  taskListElement.innerHTML = "";

  // Loop through the tasks array
  for (let i = 0; i < tasks.length; i++) {
    let task = tasks[i];  }

    // Create a new task item element
    let taskItemElement = document.createElement("li");
    taskItemElement.classList.add("task-item");

    // Add the task title
    let taskTitleElement = document.createElement("");
    taskTitleElement.innerText = task.title

