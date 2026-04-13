import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import stageService from "../services/StageService";
import matiereService from "../services/MatiereService";
import etudiantService from "../services/EtudiantService";
import ModalErreur from "../components/common/ModalErreur";

export default function StageDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [stage, setStage] = useState(null);
  const [matieres, setMatieres] = useState([]);
  const [etudiants, setEtudiants] = useState([]);
  const [erreur, setErreur] = useState(null);

  // ids sélectionnés dans les selects
  const [matiereId, setMatiereId] = useState("");
  const [etudiantId, setEtudiantId] = useState("");

  // ─── Chargement ────────────────────────────────────────────────────────────
  useEffect(() => {
    const load = async () => {
      try {
        const [dataStage, dataMatieres, dataEtudiants] = await Promise.all([
          await stageService.getById(id),
          await matiereService.getAll(),
          await etudiantService.getAll(),
        ]);
        setStage(dataStage);
        setMatieres(dataMatieres);
        setEtudiants(dataEtudiants);
      } catch (err) {
        setErreur(err.response?.data?.erreur || "Erreur chargement.");
      }
    };
    load();
  }, [id]);

  const fetchStage = async () => {
    const data = await stageService.getById(id);

    setStage(data);
  };

  // ─── Matières ──────────────────────────────────────────────────────────────
  const handleAjouterMatiere = async () => {
    if (!matiereId) return;
    try {
      await stageService.ajouterMatiere(id, matiereId);
      await fetchStage();
      setMatiereId("");
    } catch (err) {
      setErreur(err.response?.data?.erreur || "Erreur ajout matière.");
    }
  };

  const handleRetirerMatiere = async (matiereId) => {
    try {
      await stageService.retirerMatiere(id, matiereId);
      await fetchStage();
    } catch (err) {
      setErreur(err.response?.data?.erreur || "Erreur retrait matière.");
    }
  };

  // ─── Étudiants ─────────────────────────────────────────────────────────────
  const handleInscrireEtudiant = async () => {
    if (!etudiantId) return;
    try {
      await stageService.inscrireEtudiant(id, etudiantId);
      await fetchStage();
      setEtudiantId("");
    } catch (err) {
      setErreur(err.response?.data?.erreur || "Erreur inscription étudiant.");
    }
  };

  const handleRetirerEtudiant = async (idEtudiant) => {
    try {
      await stageService.retirerEtudiant(id, idEtudiant);
      await fetchStage();
    } catch (err) {
      setErreur(err.response?.data?.erreur || "Erreur retrait étudiant.");
    }
  };

  if (!stage) return <p className="text-center mt-5">Chargement...</p>;

  // Matières et étudiants pas encore liés au stage
  const matieresDisponibles = matieres.filter(
    (m) => !stage.matieres?.find((sm) => sm.id_matiere === m.id_matiere),
  );

  const etudiantsDisponibles = etudiants.filter(
    (e) => !stage.etudiants?.find((se) => se.id_etudiant === e.id_etudiant),
  );

  return (
    <section className="container mt-4">
      {/* ─── Modal erreur ──────────────────────────────────────────────── */}
      <ModalErreur erreur={erreur} setErreur={setErreur} />

      {/* ─── Header ────────────────────────────────────────────────────── */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>📋 {stage.nom}</h2>
        <button
          className="btn btn-secondary"
          onClick={() => navigate("/stage")}
        >
          ← Retour
        </button>
      </div>

      <p>
        <strong>Du</strong> {stage.debut?.split("T")[0]}
        <strong> au </strong> {stage.fin?.split("T")[0]}
      </p>
      <p>
        <strong>Description :</strong> {stage.description}
      </p>

      <hr />

      {/* ─── Matières ──────────────────────────────────────────────────── */}
      <h4 className="mt-4">📚 Matières</h4>

      <div className="d-flex gap-2 mb-3">
        <select
          className="form-select w-auto"
          value={matiereId}
          onChange={(e) => setMatiereId(e.target.value)}
        >
          <option value="">-- Ajouter une matière --</option>
          {matieresDisponibles.map((m) => (
            <option key={m.id_matiere} value={m.id_matiere}>
              {m.nom}
            </option>
          ))}
        </select>
        <button className="btn btn-success" onClick={handleAjouterMatiere}>
          Ajouter
        </button>
      </div>

      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {stage.matieres?.length === 0 && (
            <tr>
              <td colSpan={3} className="text-center">
                Aucune matière
              </td>
            </tr>
          )}
          {stage.matieres?.map((m) => (
            <tr key={m.id_matiere}>
              <td>{m.id_matiere}</td>
              <td>{m.nom}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleRetirerMatiere(m.id_matiere)}
                >
                  ❌
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr />

      {/* ─── Étudiants ─────────────────────────────────────────────────── */}
      <h4 className="mt-4">🎓 Étudiants</h4>

      <div className="d-flex gap-2 mb-3">
        <select
          className="form-select w-auto"
          value={etudiantId}
          onChange={(e) => setEtudiantId(e.target.value)}
        >
          <option value="">-- Inscrire un étudiant --</option>
          {etudiantsDisponibles.map((e) => (
            <option key={e.id_etudiant} value={e.id_etudiant}>
              {e.nom}
            </option>
          ))}
        </select>
        <button className="btn btn-success" onClick={handleInscrireEtudiant}>
          Inscrire
        </button>
      </div>

      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {stage.etudiants?.length === 0 && (
            <tr>
              <td colSpan={4} className="text-center">
                Aucun étudiant
              </td>
            </tr>
          )}
          {stage.etudiants?.map((e) => (
            <tr key={e.id_etudiant}>
              <td>{e.id_etudiant}</td>
              <td>{e.nom}</td>
              <td>{e.email}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleRetirerEtudiant(e.id_etudiant)}
                >
                  ❌
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
