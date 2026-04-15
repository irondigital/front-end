import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function ProjectForm({ addProject }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    year: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addProject({ ...form, id: uuid() });
    setForm({ title: "", description: "", year: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input placeholder="Title"
        value={form.title}
        onChange={(e)=>setForm({...form,title:e.target.value})}
      />
      <input placeholder="Description"
        value={form.description}
        onChange={(e)=>setForm({...form,description:e.target.value})}
      />
      <input placeholder="Year"
        value={form.year}
        onChange={(e)=>setForm({...form,year:e.target.value})}
      />
      <button>Add Project</button>
    </form>
  );
}