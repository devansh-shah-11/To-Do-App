var taskIdCounter = 1; // Counter for dynamic task numbering

function addNewTask() {

    var task = document.getElementById("task").value;

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    // gets the ordered list of all the tasks
    var ol = document.getElementById("MyTasks");

    console.log('Adding task: ' + task);

    // Create the list item for the new task
    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Incrementing the taskIdCounter for dynamic task numbering
    checkbox.id = taskIdCounter++;

    // Added event listener for checkbox
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            li.classList.add('Completed');
        } else {
            li.classList.remove('Completed');
        }
        console.log('Checkbox changed: ' + this.checked);
    });

    var label = document.createElement("label");
    label.htmlFor = checkbox.id;
    label.textContent = task;


    // Create delete button
    var deleteButton = document.createElement("button");
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    deleteButton.addEventListener('click', function(event) {
        deleteTask(li);
    });

    // create edit button
    var editButton = document.createElement("button");
    editButton.textContent = 'Edit';
    editButton.className = 'editButton';
    editButton.addEventListener('click', function(event) {
        editTask(li, task);
    });

    li.appendChild(checkbox);
    li.appendChild(label);
    ol.appendChild(li);
    li.appendChild(deleteButton);
    li.appendChild(editButton);

    document.getElementById("task").value = "";
}

// Deletes the task specified
function deleteTask(task) {
    task.remove();
}

// Edits the task specified
function editTask(li, task) {
    console.log('Editing task: ' + task);
    // creating a input text box for user to edit
    var input = document.createElement("input");
    input.type = "text";
    input.value = task; // ensuring that the initial value remains the same
    input.className = 'editInput';

    // creating a update button on clicking which the task will be updated
    var updateButton = document.createElement("button");
    updateButton.textContent = 'Update';
    updateButton.className = 'updateButton';

    li.appendChild(input);
    li.appendChild(updateButton);

    updateButton.addEventListener('click', function(event) {
        event.stopPropagation(); // added to update only once and not enter into an infinite loop
        updateTask(li, input.value);
    });
}

function updateTask(li, task) {
    console.log('Updating task: ' + task);
    var label = li.getElementsByTagName("label")[0];
    label.textContent = task;
    // removing the input text box and update button
    li.removeChild(li.lastChild);
    li.removeChild(li.lastChild);
}

function displayTasks(tab) {
    console.log('Displaying tasks: ' + tab);
    var tasks = document.getElementById("MyTasks").getElementsByTagName("li");

    // displaying the tasks based on their status

    for (var i = 0; i < tasks.length; i++) {
        var task = tasks[i];
        task.classList.add('hidden');
        if (tab === 'complete' && task.classList.contains('Completed')) {
            task.classList.remove('hidden');
        } else if (tab === 'active' && !task.classList.contains('Completed')) {
            task.classList.remove('hidden');
        } else if (tab === 'all') {
            task.classList.remove('hidden');
        } else {
            task.classList.add('hidden');
        }
    }
}
