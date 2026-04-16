import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useAuth } from "../context/AuthContext";

export default function Layout({ children }) {
  const { user, isConnected, logout } = useAuth();
  const navigate = useNavigate();

  const selectedLink = ({ isActive }) =>
    `hover btn btn-${isActive ? "secondary" : "light"}`;

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="containerLayout">
      {/* HEADER */}
      <header>
        <div className="container d-flex justify-content-between align-items-center py-3 gap-3">
          {/* Logo */}
          <h4 className="fw-bold m-0 flex-shrink-0">
            <img src={logo} alt="logo" className="logo" />
          </h4>

          {/* Nav links — au centre, prend l'espace disponible */}
          <nav className="d-flex gap-2 align-items-center flex-grow-1">
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

          {/* Boutons Auth — à droite */}
          <div className="d-flex align-items-center gap-2 flex-shrink-0">
            {isConnected ? (
              <>
                <span className="text-white fw-semibold small">
                  {user?.login}
                  {user?.role === "ADMIN" && (
                    <span className="badge bg-warning text-dark ms-1">
                      Admin
                    </span>
                  )}
                </span>
                <button
                  className="btn btn-outline-light btn-sm"
                  onClick={handleLogout}
                >
                  Déconnexion
                </button>
              </>
            ) : (
              <>
                <NavLink className="btn btn-outline-light btn-sm" to="/login">
                  Connexion
                </NavLink>
                <NavLink className="btn btn-light btn-sm" to="/register">
                  Inscription
                </NavLink>
              </>
            )}
          </div>
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
