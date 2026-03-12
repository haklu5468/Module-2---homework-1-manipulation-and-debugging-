let taskList=[];

function addTask(){
    const task=document.getElementById("taskInput").value;
    const date=document.getElementById("dateInput").value;
    const errorMessage=document.getElementById("errorMessage");

    if (task.trim().length==0){
        errorMessage.textContent="Please enter a message";
        errorMessage.style.color='red';
        return;
    }

    errorMessage.textContent='';

    const newTask={
        text:task,
        dueDate:date,
        completed:false, 
        id:Date.now()
    }
    
    taskList.push(newTask);

    document.getElementById('taskInput').value="";
    document.getElementById('dateInput').value="";
    

}

document.getElementById("addBtn").addEventListener("click", addTask);


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


