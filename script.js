let taskIdCounter = 0; // Um contador para gerar IDs únicos

function addTask() {
    let taskTitleInput = document.getElementById("taskTitle");
    let taskDescriptionInput = document.getElementById("taskDescription");
    let taskList = document.getElementById("taskList");

    let title = taskTitleInput.value.trim();
    let description = taskDescriptionInput.value.trim();

    if (title !== "" && description !== "") {
        // Incrementa o contador para obter um ID único
        taskIdCounter++;

        // Cria um novo elemento de lista
        let listItem = document.createElement("li");

        // Cria um elemento de título (h3) e define o ID
        let titleElement = document.createElement("h3");
        let taskId = "task_" + taskIdCounter;
        titleElement.textContent = title;
        titleElement.id = taskId;

        // Cria um elemento de parágrafo (p) para a descrição da tarefa
        let descriptionElement = document.createElement("p");
        descriptionElement.textContent = description;

        // Adiciona um botão de edição ao item da lista
        let editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = function () {
            editTask(listItem);
        };

        // Adiciona um botão de exclusão ao item da lista
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function () {
            taskList.removeChild(listItem);
        };

        // Adiciona os elementos ao item da lista
        listItem.appendChild(titleElement);
        listItem.appendChild(descriptionElement);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);

        // Adiciona o item da lista à lista de tarefas
        taskList.appendChild(listItem);

        // Limpa os campos de entrada
        taskTitleInput.value = "";
        taskDescriptionInput.value = "";
    }
}

function editTask(listItem) {
    let newTitle = prompt("Edite o título:", listItem.querySelector("h3").textContent);
    let newDescription = prompt("Edite a tarefa:", listItem.querySelector("p").textContent);

    if (newTitle !== null && newDescription !== null) {
        listItem.querySelector("h3").textContent = newTitle;
        listItem.querySelector("p").textContent = newDescription;
    }
}