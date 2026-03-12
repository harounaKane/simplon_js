import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
    prenom: "",
  });
  const [msgOk, setMsgOK] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitted = (e) => {
    e.preventDefault();

    if (formData.email && formData.prenom && formData.message) {
      setMsgOK(true);
      setFormData({ email: "", message: "", prenom: "" });
      setTimeout(() => {
        setMsgOK(false);
      }, 3000);
    }
  };

  return (
    <>
      <h2 style={styles.titre}>📧 Contact</h2>

      {msgOk && <div style={styles.msg}>Message envoyé !</div>}

      <div style={styles.container}>
        <form action="" onSubmit={submitted}>
          <div style={styles.div}>
            <label style={styles.bloc} htmlFor="">
              Prénom
            </label>
            <input
              onChange={handleChange}
              style={styles.bloc}
              value={formData.prenom}
              type="text"
              name="prenom"
              placeholder="ex: Martine"
            />
          </div>
          <div style={styles.div}>
            <label style={styles.bloc} htmlFor="">
              E-mail:
            </label>
            <input
              onChange={handleChange}
              style={styles.bloc}
              type="email"
              placeholder="alex@simp.fr"
              name="email"
              value={formData.email}
            />
          </div>
          <div style={styles.div}>
            <label style={styles.bloc} htmlFor="">
              Message:
            </label>
            <textarea
              onChange={handleChange}
              value={formData.message}
              style={styles.bloc}
              name="message"
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
  msg: {
    textAlign: "center",
    backgroundColor: "green",
    padding: "10px",
    width: "30%",
    margin: "0 Auto",
  },
};
