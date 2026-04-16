import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthService from "../services/AuthService";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    prenom: "",
    login: "",
    mdp: "",
    role: "USER",
  });
  const [erreur, setErreur] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErreur(null);
    setLoading(true);
    try {
      await AuthService.register(form);
      navigate("/login");
    } catch (err) {
      setErreur(err.response?.data?.message || "Erreur lors de l'inscription");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "60vh" }}
    >
      <div
        className="card shadow p-4"
        style={{ width: "100%", maxWidth: "420px" }}
      >
        <h4 className="mb-4 text-center fw-bold">Inscription</h4>

        {erreur && <div className="alert alert-danger">{erreur}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Prénom</label>
            <input
              type="text"
              className="form-control"
              name="prenom"
              value={form.prenom}
              onChange={handleChange}
              required
              autoFocus
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Login</label>
            <input
              type="text"
              className="form-control"
              name="login"
              value={form.login}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Mot de passe</label>
            <input
              type="password"
              className="form-control"
              name="mdp"
              value={form.mdp}
              onChange={handleChange}
              required
            />
          </div>

          <button
            className="btn btn-success w-100"
            type="submit"
            disabled={loading}
          >
            {loading ? "Inscription..." : "S'inscrire"}
          </button>
        </form>

        <p className="mt-3 text-center text-muted small">
          Déjà un compte ? <Link to="/login">Se connecter</Link>
        </p>
      </div>
    </div>
  );
}
