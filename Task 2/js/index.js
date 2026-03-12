let tasks=[];

//lager globale variabler:
const taskInput = document.getElementById("taskInput");
const dateInput = document.getElementById("dateInput");
const errorMessage =document.getElementById("errorMessage");
const taskList = document.getElementById("taskList");
const addBtn = document.getElementById("addBtn");


function addTask(){
    const task=taskInput.value;
    const date=dateInput.value;

    if (task.trim().length===0){
        errorMessage.textContent="Please enter a task";
        errorMessage.style.color="red";
        return;
    }

    errorMessage.textContent="";

    const newTask={
        id:Date.now(),
        text:task,
        dueDate:date,
        completed:false
    }
    
    tasks.push(newTask);

    taskInput.value="";
    dateInput.value="";
    
    renderTasks();
}


function sortTasks(){
    
}

function renderTasks(){

}

function createTaskElements(){


}

function removeItem(){

}

function toggleTask(id){

}

document.getElementById("addBtn").addEventListener("click", addTask);


