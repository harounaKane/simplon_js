import { Link } from "react-router-dom";
import accueilImg from "../assets/simplon.jpg";

export default function Home() {
  return (
    <div className="container py-5">
      <section className="text-center mb-5">
        <h1 className="fw-bold mb-3">Bienvenue à l'Institut Simplon</h1>
        <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
          Une application React de gestion permettant de suivre les étudiants,
          les formateurs, les matières et les stages au sein d’un centre de
          formation.
        </p>
      </section>

      <section className="row align-items-center g-4 mb-5">
        <div className="col-md-6">
          <img
            src={accueilImg}
            alt="Institut Simplon"
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-md-6">
          <div className="p-4 bg-light rounded shadow-sm">
            <h2 className="h4 mb-3">Objectif du projet</h2>
            <p className="text-muted">
              Cette plateforme a pour but de centraliser la gestion des entités
              principales d’un institut de formation dans une interface simple,
              moderne et facile à prendre en main.
            </p>

            <p className="text-muted mb-4">
              Pour l’instant, la partie front-end est développée avec React. Le
              backend Node.js sera intégré dans une seconde étape.
            </p>

            <div className="d-flex gap-2 flex-wrap">
              <Link to="/etudiant" className="btn btn-success">
                Voir les étudiants
              </Link>
              <Link to="/stage" className="btn btn-outline-secondary">
                Voir les stages
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-center mb-4">Fonctionnalités principales</h2>

        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body text-center">
                <div className="fs-1 mb-3">🎓</div>
                <h5 className="card-title">Étudiants</h5>
                <p className="card-text text-muted">
                  Ajouter, modifier, afficher et supprimer les étudiants.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body text-center">
                <div className="fs-1 mb-3">👨‍🏫</div>
                <h5 className="card-title">Formateurs</h5>
                <p className="card-text text-muted">
                  Gérer les professeurs et leurs spécialités.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body text-center">
                <div className="fs-1 mb-3">📚</div>
                <h5 className="card-title">Matières</h5>
                <p className="card-text text-muted">
                  Organiser les matières enseignées dans l’institut.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body text-center">
                <div className="fs-1 mb-3">🏫</div>
                <h5 className="card-title">Stages</h5>
                <p className="card-text text-muted">
                  Gérer les périodes de stage et leur suivi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
