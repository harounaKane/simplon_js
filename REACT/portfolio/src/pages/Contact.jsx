export default function Contact() {
  return (
    <>
      <h2 style={styles.titre}>📧 Contact</h2>
      <div style={styles.container}>
        <form action="">
          <div style={styles.div}>
            <label style={styles.bloc} htmlFor="">
              E-mail:
            </label>
            <input
              style={styles.bloc}
              type="email"
              placeholder="alex@simp.fr"
            />
          </div>
          <div style={styles.div}>
            <label style={styles.bloc} htmlFor="">
              Message:
            </label>
            <textarea
              style={styles.bloc}
              name=""
              placeholder="Votre message ici"
              id=""
              rows="5"
            ></textarea>
          </div>
          <button type="submit">Envoyer 🚀</button>
        </form>
      </div>
    </>
  );
}

const styles = {
  titre: { textAlign: "center" },
  container: {
    width: "500px",
    margin: "0 Auto",
    borderRadius: "10px",
    boxShadow: "0 10px 5px rgba(0, 0, 0, .5",
    padding: "10px",
  },
  bloc: {
    display: "block",
    width: "100%",
  },
  div: {
    marginBottom: "30px",
  },
};
