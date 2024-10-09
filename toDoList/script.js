tasks = document.getElementById("content")
taskNameField = document.getElementById('text')

function addTask(){
    if(taskNameField.value != ""){
        taskName = taskNameField.value
        htmlItem = `<nav class="defaultTaskNav"><p class="task">${taskName}</p><button class="removeBtn" onclick="removeTask(this)">Remover</button></nav>`
        tasks.innerHTML += htmlItem
        taskNameField.value = ""
    }else{
        window.alert("Task vazia")
    }
    
}

function removeTask(e){
    e.parentElement.remove()
}