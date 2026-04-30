import { useEffect, useState } from "react";
import axios from "axios";


function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState(null);

  const token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  // fetch all tasks
  const fetchTasks = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/auth/api/",
        config
      );
      setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // add or update task
  const handleSubmit = async () => {
    try {
      if (editId) {
        await axios.put(
          `http://localhost:5000/auth/api/${editId}`,
          { title },
          config
        );
        setEditId(null);
      } else {
        await axios.post(
          "http://localhost:5000/auth/api/",
          { title },
          config
        );
      }

      setTitle("");
      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  // delete task
  const deleteTask = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/auth/api/${id}`,
        config
      );
      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  // edit task
  const editTask = (task) => {
    setTitle(task.title);
    setEditId(task._id);
  };

  return (
    <div className="dashboard">
      <h1>Task Dashboard</h1>

      <div className="task-form">
        <input
          type="text"
          placeholder="Enter task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button onClick={handleSubmit}>
          {editId ? "Update Task" : "Add Task"}
        </button>
      </div>

      <div className="task-grid">
        {tasks.map((task) => (
          <div className="task-card" key={task._id}>
            <h3>{task.title}</h3>

            <div className="btn-group">
              <button
                className="edit-btn"
                onClick={() => editTask(task)}
              >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() =>
                  deleteTask(task._id)
                }
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;