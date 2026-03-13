let tasks=[];

//lager globale variabler:
const taskInput = document.getElementById("taskInput");
const dateInput = document.getElementById("dateInput");
const errorMessage =document.getElementById("errorMessage");
const taskList = document.getElementById("taskList");
const addBtn = document.getElementById("addBtn");


function addTask(){
    const taskText=taskInput.value;
    const date=dateInput.value;

    if (taskText.trim().length === 0){
        errorMessage.textContent="Please enter a task";
        errorMessage.style.color="red";
        return;
    }

    errorMessage.textContent="";

    const newTask={
        id:Date.now(),
        text:taskText,
        dueDate:date,
        completed:false
    }
    
    tasks.push(newTask);

    taskInput.value="";
    dateInput.value="";
    
    showTasks();
}


function sortTasks(){
}

function showTasks(){

}


function createTaskElement(task) {
    const li = document.createElement("li");

    const leftSpan = document.createElement("span");
    leftSpan.className="left-text";

    const rightSpan = document.createElement("span");
    rightSpan.className="right-text";

    //leftspan innhold: -------------
    //checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;

    checkbox.addEventListener("change", function(){
        toggleTask(task.id);
    });

    //text element
    const textSpan = document.createElement("span");
    textSpan.textContent = task.text;

    if (task.completed) {
        textSpan.style.textDecoration = "line-through";
    }

    leftSpan.appendChild(checkbox);
    leftSpan.appendChild(textSpan);

    if (task.dueDate) {
        const dueDateSpan = document.createElement("span");
        dueDateSpan.textContent = "Due: " + task.dueDate;
        leftSpan.appendChild(dueDateSpan);
    }

    //right span
    //removebutton
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";

    removeBtn.addEventListener("click", function() {
        deleteTask(task.id);
    });

    rightSpan.appendChild(removeBtn);

    li.appendChild(leftSpan);
    li.appendChild(rightSpan);

    return li;
}

function deleteTask(id) {
//skal fikse her og

    showTasks();
}

function toggleTask(id) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks[i].completed = !tasks[i].completed;
        }
    }

    showTasks();
}

///event listeners



addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

dateInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});


