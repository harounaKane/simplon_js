export default function About() {
  return (
    <>
      <h2 style={styles.titre}>ℹ️ A propos de moi</h2>
      <div style={styles.container}>
        <section style={styles.section}>
          <h3 style={styles.titreH3}>👨‍💻 Mon parcours</h3>
          <p>
            Je suis développeur React passionné. Je crée des sites web
            Attractifs. J'ai commencé à coder depuis 5 ans. J'apprends toujours.
          </p>
        </section>

        <section style={styles.section}>
          <h3 style={styles.titreH3}>🎓 Formation</h3>
          <p>Je suis informaticien spécialisé en dév web</p>
        </section>

        <section style={styles.section}>
          <h3 style={styles.titreH3}>🚀 Ce que je fait</h3>
          <ul>
            <li>✅ Développement App React</li>
            <li>✅ Intégration Web</li>
            <li>✅ Responsive web design</li>
            <li>✅ Maquettage</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h3 style={styles.titreH3}>🎯 Objectif</h3>
          <p>
            Mon objectif est de participer à des projets empreints de challenge.
          </p>
        </section>
      </div>
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
    padding: "10px",
  },
  titreH3: {
    color: "blue",
  },
  section: {
    marginBottom: "50px",
  },
};
