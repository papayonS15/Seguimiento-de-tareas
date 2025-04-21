const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

taskInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement("li");

  const left = document.createElement("div");
  left.className = "left";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.onchange = () => toggleTask(li, checkbox.checked);

  const span = document.createElement("span");
  span.textContent = taskText;

  left.appendChild(checkbox);
  left.appendChild(span);

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete";
  deleteBtn.innerHTML = "&#128465;";
  deleteBtn.onclick = () => li.remove();

  li.appendChild(left);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}

function toggleTask(li, isCompleted) {
  li.classList.toggle("completed", isCompleted);
  
  if (isCompleted) {
    taskList.appendChild(li);
  } else {
    taskList.insertBefore(li, taskList.firstChild);
  }
}
