import { useState } from "react";
import api from "../services/api";

export default function Workflow() {
  const [resume, setResume] = useState(null);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("keywords", "software intern");
    formData.append("location", "Remote");
    formData.append("email", "your@email.com");
    formData.append("resume", resume);

    const res = await api.post("/run", formData);
    console.log(res.data);
  };

  return (
    <div>
      <input type="file" onChange={(e) => setResume(e.target.files[0])} />
      <button onClick={handleSubmit}>Run AI Agent</button>
    </div>
  );
}