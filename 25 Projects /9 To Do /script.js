const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const dueDate = document.getElementById("dueDate");
const priority = document.getElementById("priority");
const list = document.getElementById("taskList");
const search = document.getElementById("search");
const filter = document.getElementById("filter");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Render
function renderTasks() {
  list.innerHTML = "";

  let filteredTasks = tasks.filter((task) => {
    if (filter.value === "completed") return task.done;
    if (filter.value === "pending") return !task.done;
    return true;
  });

  filteredTasks = filteredTasks.filter((task) =>
    task.text.toLowerCase().includes(search.value.toLowerCase()),
  );

  filteredTasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = `list-group-item d-flex justify-content-between align-items-center ${task.priority}`;
    li.draggable = true;

    const left = document.createElement("div");
    left.innerHTML = `
            <strong>${task.text}</strong><br>
            <small>${task.date || "No date"}</small>
        `;

    if (task.done) left.classList.add("completed");

    const btns = document.createElement("div");

    const done = document.createElement("button");
    done.className = "btn btn-success btn-sm me-2";
    done.textContent = "✓";

    const del = document.createElement("button");
    del.className = "btn btn-danger btn-sm";
    del.textContent = "✕";

    done.onclick = () => {
      task.done = !task.done;
      save();
    };

    del.onclick = () => {
      tasks.splice(index, 1);
      save();
    };

    btns.append(done, del);
    li.append(left, btns);
    list.append(li);

    // Drag
    li.addEventListener("dragstart", () => li.classList.add("dragging"));
    li.addEventListener("dragend", () => li.classList.remove("dragging"));
  });
}

// Drag Logic
list.addEventListener("dragover", (e) => {
  e.preventDefault();
  const dragging = document.querySelector(".dragging");
  const afterElement = getDragAfterElement(list, e.clientY);
  if (afterElement == null) {
    list.appendChild(dragging);
  } else {
    list.insertBefore(dragging, afterElement);
  }
});

// Helper
function getDragAfterElement(container, y) {
  const elements = [
    ...container.querySelectorAll(".list-group-item:not(.dragging)"),
  ];

  return elements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY },
  ).element;
}

// Save
function save() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

// Add Task
form.addEventListener("submit", (e) => {
  e.preventDefault();

  tasks.push({
    text: input.value,
    date: dueDate.value,
    priority: priority.value,
    done: false,
  });

  form.reset();
  save();
});

// Search + Filter
search.addEventListener("input", renderTasks);
filter.addEventListener("change", renderTasks);

// Init
renderTasks();
