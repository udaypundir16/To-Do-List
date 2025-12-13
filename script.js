const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
     const taskText = taskInput.value.trim();
    if (taskText === "") return;


    const li = document.createElement("li");
    li.textContent = taskText;

    li.addEventListener("click", () => {
        li.classList.toggle("completed");
    });


     const delBtn = document.createElement("span");
    delBtn.textContent = "❌";
    delBtn.style.cursor = "pointer";

    delBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        li.remove();
     });


    li.appendChild(delBtn);
    taskList.appendChild(li);
    taskInput.value = "";
});
