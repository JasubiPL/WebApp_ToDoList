const btnAdd = document.getElementById("btn_add");
const taskArea =  document.getElementById("task_area");
const btnDelete = document.getElementById("btn_delete");
var numberOfTasks = 0;

btnAdd.addEventListener("click", createTask);
btnDelete.addEventListener("click", deleteTask);

function createTask(){
    let message = document.getElementById("input");

    const addTask = document.createElement("div");
    addTask.classList.add("task");
    taskArea.append(addTask);

    const addCheck = document.createElement("input");
    addCheck.classList.add("check_box");
    addCheck.type = "checkbox";
    addCheck.id = `task${numberOfTasks}`;
    addTask.append(addCheck);

    const addText = document.createElement("label");
    addText.name = "task";
    addText.textContent = message.value;
    addTask.append(addText);
    
    message.value = "";
    numberOfTasks++;

}

function deleteTask(){
    
    const checkboxs = document.querySelectorAll(".check_box");

    for(let checkbox of checkboxs){
        if(checkbox.checked === true){
            checkbox.parentNode.remove();
        }
    }

    
}

