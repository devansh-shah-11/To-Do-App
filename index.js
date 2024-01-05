var taskIdCounter = 1; // Counter for dynamic task numbering

function addNewTask() {

    var task = document.getElementById("task").value;

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    var ol = document.getElementById("MyTasks");

    console.log('Adding task: ' + task);

    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Increment the taskIdCounter for dynamic task numbering
    var taskId = 'task_' + taskIdCounter++;
    checkbox.id = taskId;

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            li.classList.add('Completed');
        } else {
            li.classList.remove('Completed');
        }
        console.log('Checkbox changed: ' + this.checked);
    });

    var label = document.createElement("label");
    label.htmlFor = taskId; // Using the unique taskId for the label
    label.textContent = task;

    li.appendChild(checkbox);
    li.appendChild(label);
    ol.appendChild(li);
    document.getElementById("task").value = "";
}

function displayTasks(tab) {
    console.log('Displaying tasks: ' + tab);
    var tasks = document.getElementById("MyTasks").getElementsByTagName("li");

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
