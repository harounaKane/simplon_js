import image from "../assets/simplon.jpg";
import image2 from "../assets/simplon2.jpg";

export default function Home() {
  return (
    <div style={styles.container}>
      <section style={styles.hero}>
        <h1>Bienvenue à l'Institut Simplon</h1>
        <p style={styles.subtitle}>
          Une plateforme moderne pour gérer les étudiants, formateurs, matières
          et stages.
        </p>
        <img src={image} alt="image simplon" className="w-75" />
      </section>

      <section style={styles.section}>
        <h2>🎯 Objectif du projet</h2>
        <p>
          Cette application permet de centraliser toutes les informations d’un
          centre de formation : gestion des étudiants, des formateurs, des
          matières et des stages.
        </p>
      </section>

      <section style={styles.section}>
        <h2>🚀 Fonctionnalités principales</h2>
        <ul>
          <li>👨‍🎓 Gestion des étudiants</li>
          <li>👩‍🏫 Gestion des formateurs</li>
          <li>📚 Gestion des matières</li>
          <li>🏫 Gestion des stages</li>
          <li>🔗 Relations entre les entités</li>
        </ul>
        <img src={image2} alt="image simplon" className="w-75" />
      </section>
    </div>
  );
}

const styles = {
  container: {
    padding: "30px",
    maxWidth: "900px",
    margin: "0 auto",
    lineHeight: "1.6",
  },

  hero: {
    textAlign: "center",
    marginBottom: "40px",
  },

  subtitle: {
    fontSize: "18px",
    color: "#555",
  },

  section: {
    marginBottom: "30px",
  },
};
