function TaskCard({ task }) {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.desc}</p>

      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}

export default TaskCard;