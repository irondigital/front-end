import { storage } from "./storage.js";

export class CustomerFormHandler {
  constructor(form, messageBox, taskList) {
    this.form = form;
    this.messageBox = messageBox;
    this.taskList = taskList;
    this.storageKey = "tasks";
  }

  validateForm(title, desc, date, priority, status) {
    if (title.length < 10) return this.showMessage("Title must be greater 10 characters", true);
    if (!desc || !date || !priority || !status) return this.showMessage("All fields are required", true);
    return true;
  }

  saveToLocalStorage(task) {
    const tasks = storage.get(this.storageKey);
    tasks.push(task);
    storage.set(this.storageKey, tasks);
    this.renderTasks();
  }

  clearForm() {
    this.form.reset();
  }

  showMessage(text, isError = false) {
    this.messageBox.innerText = text;
    this.messageBox.style.color = isError ? "red" : "green";
  }

  renderTasks() {
    const tasks = storage.get(this.storageKey);
    this.taskList.innerHTML = "";

    tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        ${task.title} <small>(${task.status})</small>
        <button data-index="${index}" class="delete-btn">Delete</button>
      `;
      this.taskList.appendChild(li);
    });
  }
}
