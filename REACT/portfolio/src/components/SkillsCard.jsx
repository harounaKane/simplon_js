export default function SkillsCard({ skill }) {
  return (
    <>
      <div style={styles.card}>
        <span>
          <span> {skill.icon} </span>
          <span> {skill.name} </span>
        </span>
        <span style={styles.level}> {skill.level}%</span>
        <div style={styles.barre}>
          <div style={{ ...styles.barreProg, width: `${skill.level}%` }}></div>
        </div>
      </div>
    </>
  );
}

const styles = {
  card: {
    display: "flex",
    justifyContent: "space-between",
    width: "45%",
    marginBottom: "50px",
    flexWrap: "wrap",
  },
  level: {
    color: "blue",
  },
  barre: {
    backgroundColor: "grey",
    width: "100%",
    flexBasis: "100%",
    borderRadius: "10px",
    marginTop: "5px",
  },
  barreProg: {
    backgroundColor: "blue",
    padding: "10px",
    borderRadius: "10px",
  },
};
