// src/components/JobForm.jsx
import React, { useState } from "react";
import api from "../services/api"; // adjust path to your axios instance
// import "./JobForm.css"; // we'll create this for styling

const JobForm = ({ setResults }) => {
  const [keywords, setKeywords] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [resumeFile, setResumeFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!keywords || !location) return alert("Enter keywords and location");

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("keywords", keywords);
      formData.append("location", location);
      formData.append("email", email);
      if (resumeFile) formData.append("resume", resumeFile);

      const res = await api.post("/run", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setResults(res.data.results);
    } catch (err) {
      console.error("Frontend error:", err.response?.data || err.message);
      alert("Error running AI agent: " + (err.response?.data?.message || err.message));
    }
    setLoading(false);
  };

  return (
    <form className="job-form" onSubmit={handleSubmit}>
      <h2>AI Job Search</h2>
      <input
        type="text"
        placeholder="Keywords"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        className="job-input"
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="job-input"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="job-input"
      />
      <input
        type="file"
        onChange={(e) => setResumeFile(e.target.files[0])}
        className="job-input file-input"
      />
      <button type="submit" className="job-btn" disabled={loading}>
        {loading ? "Running..." : "Submit"}
      </button>
    </form>
  );
};

export default JobForm;