function AddNewTask(){

    var task = document.getElementById("task").value;
    var ol = document.getElementById("MyTasks");
    
    console.log('Adding task: ' + task);

    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "task";
    checkbox.value = task;
    checkbox.id = task;

    var label = document.createElement("label");
    label.htmlFor = task;
    label.appendChild(document.createTextNode(task));

    li.appendChild(checkbox);
    li.appendChild(label);
    ol.appendChild(li);
    document.getElementById("task").value = "";

}