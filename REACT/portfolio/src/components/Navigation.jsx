import { Link } from "react-router-dom";

function Navigation() {
  return (
    <header style={styles.header}>
      <h1>
        <Link className="lien" to="/">
          💼 Portfolio
        </Link>{" "}
      </h1>
      <nav>
        <Link className="lien" to="/">
          🏠 Home
        </Link>
        <Link className="lien" to="/projects">
          🛄 Projects
        </Link>
        <Link className="lien" to="/skills">
          ⭐ Skills
        </Link>
        <Link className="lien" to="/about">
          ℹ️ About
        </Link>
        <Link className="lien" to="/contact">
          📧 Contact
        </Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    backgroundColor: "grey",
    padding: "10px",
    justifyContent: "space-around",
    alignItems: "center",
  },
};

export default Navigation;
