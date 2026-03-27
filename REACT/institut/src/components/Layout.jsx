import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Layout() {
  return (
    <div className="containerLayout">
      {/* HEADER */}
      <header className="bg-secondary px-4 d-flex justify-content-between align-items-center">
        <Link to="/">
          <img src={logo} alt="LOGO" className="" />
        </Link>
        <nav className="d-flex gap-2 flex-wrap">
          <Link className="btn btn-success" to="/">
            🏠 Home
          </Link>
          <Link className="btn btn-success" to="/stage">
            🏫 Stage
          </Link>
          <Link className="btn btn-success" to="/etudiant">
            🧑‍🎓 Etudaint
          </Link>
          <Link className="btn btn-success" to="/prof">
            🧑‍🏫 Prof
          </Link>
          <Link className="btn btn-success" to="/matiere">
            🎒 Matière
          </Link>
        </nav>
      </header>

      {/* MAIN  */}
      <main>partie principale</main>
      {/* FOOTER */}
      <footer className="bg-secondary p-3 mt-4 text-white">
        &copy; Simplon Institut - Aix-Marseille - 2026
      </footer>
    </div>
  );
}
