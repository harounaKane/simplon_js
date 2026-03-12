export default function ProjectCard({ project }) {
  return (
    <div style={styles.card}>
      <img style={styles.img} src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      {project.technologies.map((tech) => (
        <span key={tech.id} style={styles.tech}>
          {tech}
        </span>
      ))}

      <a
        style={styles.lien}
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Visiter mon github ➡️
      </a>
    </div>
  );
}

const styles = {
  card: {
    borderRadius: "10px",
    boxShadow: "0 10px 5px rgba(0, 0, 0, .5",
    textAlign: "center",
    padding: "10px",
    justifyContent: "space-around",
    marginBottom: "20px",
  },
  img: {
    width: "100%",
    objectFit: "cover",
  },
  tech: {
    backgroundColor: "green",
    borderRadius: "10px",
    padding: "10px",
    marginRight: "10px",
  },
  lien: {
    display: "block",
    marginTop: "30px",
    textDecoration: "none",
  },
};
