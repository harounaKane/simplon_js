import SkillsCard from "../components/SkillsCard";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <>
      <h2 style={styles.titre}>⭐ Mes Compétences</h2>
      <div style={styles.container}>
        {skills.map((skill) => (
          <SkillsCard key={skill.id} skill={skill} />
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
    padding: "10px",
    justifyContent: "space-evenly",
  },
  titre: {
    textAlign: "center",
  },
};
