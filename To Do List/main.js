const btnAdd = document.getElementById("btn_add");
const taskArea =  document.getElementById("task_area");
const checkbox = document.querySelectorAll(".check_box");
var numberOfTasks = 0;
for(let check of checkbox){
    check.addEventListener("click", clickCheck);
}




btnAdd.addEventListener("click", createTask);

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

function clickCheck(){
  
   
}


