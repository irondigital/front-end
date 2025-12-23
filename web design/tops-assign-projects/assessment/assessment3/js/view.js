import { SubmissionViewer } from "./SubmissionViewer.js";
import { storage } from "./storage.js";

const tbody = document.querySelector("#taskTable tbody");
const noDataMsg = document.getElementById("noData");
const search = document.getElementById("search");

const viewer = new SubmissionViewer(tbody, noDataMsg);
viewer.loadTasks();

search.addEventListener("input", () => viewer.loadTasks(search.value));

tbody.addEventListener("click", (e) => {
  if (e.target.className === "deleteRow") {
    const index = e.target.dataset.index;
    const tasks = storage.get("tasks");
    tasks.splice(index, 1);
    storage.set("tasks", tasks);
    viewer.loadTasks(search.value);
  }
});
