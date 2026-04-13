import { useState, useEffect } from "react";
import EtudiantForm from "../components/etudiant/EtudiantForm";
import EtudiantListe from "../components/etudiant/EtudiantListe";
import ModalErreur from "../components/common/ModalErreur";
import etudiantService from "../services/EtudiantService";

export default function Etudiant() {
  const [etudiants, setEtudiants] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [erreur, setErreur] = useState(null);
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
  });

  // ─── Chargement initial ───────────────────────────────────────────────────
  useEffect(() => {
    const load = async () => {
      try {
        const data = await etudiantService.getAll();
        setEtudiants(data);
      } catch (err) {
        setErreur(err.response?.data?.erreur || "Erreur chargement.");
      }
    };
    load();
  }, []);

  const fetchEtudiants = async () => {
    const data = await etudiantService.getAll();
    setEtudiants(data);
  };

  const resetForm = () => {
    setFormData({ nom: "", email: "", telephone: "" });
    setSelectedId(null);
  };

  // ─── Ajout / Modification ─────────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.nom.trim()) return;
    try {
      if (selectedId === null) {
        await etudiantService.add(formData);
      } else {
        await etudiantService.update(selectedId, formData);
      }
      await fetchEtudiants();
      resetForm();
    } catch (err) {
      setErreur(
        err.response?.data?.erreur ||
          err.response?.data?.msg ||
          "Erreur lors de l'opération.",
      );
    }
  };

  // ─── Suppression ──────────────────────────────────────────────────────────
  const handleDelete = async (id) => {
    try {
      await etudiantService.delete(id);
      await fetchEtudiants();
      if (selectedId === id) resetForm();
    } catch (err) {
      setErreur(
        err.response?.data?.erreur ||
          err.response?.data?.msg ||
          "Erreur lors de la suppression.",
      );
    }
  };

  // ─── Edition ──────────────────────────────────────────────────────────────
  const handleEdit = (etudiant) => {
    setSelectedId(etudiant.id_etudiant);
    setFormData({
      nom: etudiant.nom,
      email: etudiant.email,
      telephone: etudiant.telephone ?? "",
    });
  };

  return (
    <section className="container mt-4">
      <h2 className="mb-4">🎓 Gestion des étudiants</h2>

      {/* ─── Modal erreur ─────────────────────────────────────────────── */}
      <ModalErreur erreur={erreur} setErreur={setErreur} />

      {/* ─── Formulaire ───────────────────────────────────────────────── */}
      <EtudiantForm
        formData={formData}
        setFormData={setFormData}
        isEditing={selectedId !== null}
        handleSubmit={handleSubmit}
        handleCancel={resetForm}
      />

      {/* ─── Liste ────────────────────────────────────────────────────── */}
      <EtudiantListe
        etudiants={etudiants}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </section>
  );
}
