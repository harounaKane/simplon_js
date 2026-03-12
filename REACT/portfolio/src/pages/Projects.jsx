import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <>
      <h2 style={styles.titre}>🛄 Mes Projets</h2>
      <div style={styles.container}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    width: "900px",
    margin: "0 Auto",
    textAlign: "center",
    padding: "10px",
    justifyContent: "space-evenly",
  },
  titre: {
    textAlign: "center",
  },
};
