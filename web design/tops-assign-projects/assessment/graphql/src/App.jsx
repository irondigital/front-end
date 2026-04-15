import useLocalStorage from "../src/hooks/useLocalStorage";
import ProjectForm from "../src/components/project/ProjectForm";
import ProjectList from "../src/components/project/ProjectList";
import ProfileEditor from "../src/components/profile/ProfileEditor";

export default function App() {
  const [projects, setProjects] = useLocalStorage("projects", []);
  const [profile, setProfile] = useLocalStorage("profile", {
    name: "",
    bio: "",
  });

  const addProject = (project) => {
    setProjects([...projects, project]);
  };

  const clearProjects = () => {
    setProjects([]);
    localStorage.removeItem("projects");
  };

  return (
    <div className="container">

  <div className="section">
    <ProfileEditor profile={profile} setProfile={setProfile} />
  </div>

  <div className="section">
    <ProjectForm addProject={addProject} />
  </div>

  <button className="danger" onClick={clearProjects}>
    Clear Portfolio
  </button>

  <div className="section">
    <ProjectList projects={projects} />
  </div>

</div>
  );
}