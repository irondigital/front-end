export default function ProjectCard({ title, description, year }) {
  return (
    <div className="card">
      <h2 style={{ fontWeight: "bold", fontSize: "18px" }}>{title}</h2>
      <p style={{ margin: "8px 0" }}>{description}</p>
      <span style={{ fontSize: "12px", color: "#6b7280" }}>{year}</span>
    </div>
  );
}