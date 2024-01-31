// todo-app.js

// Function to add a new task to the list
function addTask() {
    // Get the task input value
    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value;

    if (taskText.trim() === "") {
        alert("Please enter a task");
        return;
    }

    // Create a new list item
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(taskText));

    // Add a delete button to the task
    var deleteButton = document.createElement('button');
    deleteButton.appendChild(document.createTextNode('Delete'));
    deleteButton.setAttribute('onclick', 'deleteTask(this)');
    li.appendChild(deleteButton);

    // Append the new task to the task list
    document.getElementById('taskList').appendChild(li);

    // Clear the input field
    taskInput.value = "";
}

// Function to delete a task
function deleteTask(button) {
    var li = button.parentNode;
    var ul = li.parentNode;
    ul.removeChild(li);
}
