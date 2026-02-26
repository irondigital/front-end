import React from "react";

export default function ResultCard({ results }) {
  const handleDownload = (resumeText, jobTitle) => {
    const blob = new Blob([resumeText], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${jobTitle}-TailoredResume.txt`;
    link.click();
  };

  return (
    <div style={styles.container}>
      {results.map((job, i) => (
        <div key={i} style={styles.card}>
          <h3>{job.jobTitle}</h3>
          <p>{job.company}</p>
          <pre style={styles.pre}>{job.tailoredResume}</pre>
          <button
            style={styles.button}
            onClick={() => handleDownload(job.tailoredResume, job.jobTitle)}
          >
            Download Resume
          </button>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: { display: "grid", gap: "20px", marginTop: "30px" },
  card: {
    padding: "20px",
    borderRadius: "10px",
    background: "#ffffff20",
    color: "white",
  },
  pre: { whiteSpace: "pre-wrap", background: "#00000030", padding: "10px" },
  button: {
    marginTop: "10px",
    padding: "10px",
    border: "none",
    borderRadius: "6px",
    background: "#00c6ff",
    color: "white",
    cursor: "pointer",
  },
};