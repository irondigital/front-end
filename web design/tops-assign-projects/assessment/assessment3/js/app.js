import { CustomerFormHandler } from "./CustomerFormHandler.js";

const form = document.getElementById("taskForm");
const messageBox = document.getElementById("message");
const taskList = document.getElementById("taskList");

const handler = new CustomerFormHandler(form, messageBox, taskList);
handler.renderTasks();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = taskTitle.value.trim();
  const desc = taskDescription.value.trim();
  const date = taskDate.value;
  const priority = taskPriority.value;
  const status = taskStatus.value;

  if (handler.validateForm(title, desc, date, priority, status) === true) {
    handler.saveToLocalStorage({ title, desc, date, priority, status });
    handler.clearForm();
    handler.showMessage("Task Added Successfully");
  }
});

taskList.addEventListener("click", (e) => {
  if (e.target.className === "delete-btn") {
    const index = e.target.dataset.index;
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    handler.renderTasks();
  }
});
