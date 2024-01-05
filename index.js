function AddNewTask(){

    var task = document.getElementById("task").value;
    var ol = document.getElementById("MyTasks");
    
    console.log('Adding task: ' + task);

    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.addEventListener('change', function() {
        if (this.checked) {
            li.classList.add('Completed');
        } else {
            li.classList.remove('Completed');
        }
        console.log('Checkbox changed: ' + this.checked);
    });

    var label = document.createElement("label");
    label.htmlFor = task;
    label.appendChild(document.createTextNode(task));

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

        if (tab === 'complete' && task.classList.contains('Completed')) {
            task.style.display = 'block';
        } else if (tab === 'active' && !task.classList.contains('Completed')) {
            task.style.display = 'block';
        } else if (tab === 'all') {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    }
}