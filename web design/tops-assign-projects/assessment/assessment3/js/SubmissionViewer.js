import { storage } from "./storage.js";

export class SubmissionViewer {
  constructor(tableBody, noDataMsg) {
    this.tableBody = tableBody;
    this.noDataMsg = noDataMsg;
    this.storageKey = "tasks";
  }

  loadTasks(filter = "") {
    const tasks = storage.get(this.storageKey);
    this.tableBody.innerHTML = "";

    const filtered = tasks.filter(t =>
      t.title.toLowerCase().includes(filter.toLowerCase()) ||
      t.status.toLowerCase().includes(filter.toLowerCase())
    );

    if (filtered.length === 0) {
      this.noDataMsg.textContent = "No data found";
      return;
    } else this.noDataMsg.textContent = "";

    filtered.forEach((t, index) => {
      this.tableBody.innerHTML += `
      <tr>
        <td>${t.title}</td>
        <td>${t.desc}</td>
        <td>${t.date}</td>
        <td>${t.priority}</td>
        <td>${t.status}</td>
        <td><button data-index="${index}" class="deleteRow">Delete</button></td>
      </tr>`;
    });
  }
}
