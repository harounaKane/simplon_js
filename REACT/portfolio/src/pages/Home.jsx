import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h2 style={styles.titre}>Salut, je suis Alex ✋</h2>
      <section style={styles.container}>
        <h3>Je suis développeur React</h3>

        <p>Je suis informaticien spécialisé en dév web</p>

        <Link className="lien" to="/projects">
          <button>Voir mes Projects ➡️</button>
        </Link>
      </section>
    </>
  );
}

const styles = {
  titre: { textAlign: "center" },
  container: {
    width: "700px",
    margin: "0 Auto",
    borderRadius: "10px",
    boxShadow: "0 10px 5px rgba(0, 0, 0, .5",
    textAlign: "center",
    padding: "10px",
  },
};
