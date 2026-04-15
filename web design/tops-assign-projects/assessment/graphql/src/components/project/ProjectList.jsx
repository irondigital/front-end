import ProjectCard from "./ProjectCard";

export default function ProjectList({ projects }) {
  if (projects.length === 0) {
    return (
      <div className="empty">
        You haven't added any projects to your portfolio yet!
      </div>
    );
  }

  return (
    <div className="grid">
      {projects.map((p) => (
        <ProjectCard key={p.id} {...p} />
      ))}
    </div>
  );
}