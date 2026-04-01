import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Layout({ children }) {
  const selectedLink = ({ isActive }) =>
    `hover btn btn-${isActive ? "secondary" : "light"}`;

  return (
    <div className="containerLayout">
      {/* HEADER */}
      <header>
        <div className="container d-flex justify-content-between align-items-center py-3">
          <h4 className="fw-bold m-0">
            <img src={logo} alt="logo" className="logo" />
          </h4>

          <nav className="d-flex gap-2 flex-wrap">
            <NavLink className={selectedLink} to="/">
              Home
            </NavLink>
            <NavLink className={selectedLink} to="/etudiant">
              Étudiants
            </NavLink>
            <NavLink className={selectedLink} to="/prof">
              Profs
            </NavLink>
            <NavLink className={selectedLink} to="/matiere">
              Matières
            </NavLink>
            <NavLink className={selectedLink} to="/stage">
              Stages
            </NavLink>
          </nav>
        </div>
      </header>

      {/* MAIN  */}
      <main> {children} </main>

      {/* FOOTER */}

      <footer className="bg-secondary text-white mt-5">
        <div className="container py-3 text-center">
          <p className="mb-1 fw-bold">Institut Simplon - Aix-Marseille</p>

          <p className="mb-2 text-muted">
            Application de gestion des étudiants, formateurs, matières et stages
          </p>

          <small className="text-dark">
            © {new Date().getFullYear()} - Projet React | Harouna
          </small>
        </div>
      </footer>
    </div>
  );
}
