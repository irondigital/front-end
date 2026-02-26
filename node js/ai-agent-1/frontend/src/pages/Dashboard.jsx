import { useState } from "react";
import JobForm from "../components/JobForm";
import ResultCard from "../components/ResultCard";
import Loader from "../components/Loader";

function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🚀 AI Job Application Agent</h1>
      <JobForm setLoading={setLoading} setResults={setResults} />
      {loading && <Loader />}
      {results.length > 0 && <ResultCard results={results} />}
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #1e3c72, #2a5298)",
    padding: "40px",
    color: "white",
  },
  title: {
    textAlign: "center",
    marginBottom: "30px",
  },
};

export default Dashboard;