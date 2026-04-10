import { useEffect, useState } from "react";
import MatiereForm from "../components/matiere/MatiereForm";
import CrudTable from "../components/common/CrudTable";
import matiereService from "../services/MatiereService";
import profService from "../services/ProfService";

export default function Matiere() {
  const [matieres, setMatieres] = useState([]);
  const [profs, setProfs] = useState([]);
  const [erreur, setErreur] = useState(false);

  const [formData, setFormData] = useState({
    nom: "",
    description: "",
    duree: "",
    idProf: "",
  });

  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    const load = async () => {
      setMatieres(await matiereService.getAll());
      setProfs(await profService.getAll());
    };
    load();
  }, []);

  const fetchMatieres = async () => {
    setMatieres(await matiereService.getAll());
    setProfs(await profService.getAll());
  };

  const resetForm = () => {
    setFormData({
      nom: "",
      description: "",
      duree: "",
      idProf: "",
    });
    setSelectedId(null);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      if (!formData.nom.trim()) return;

      if (selectedId === null) {
        await matiereService.add(formData);
      } else {
        await matiereService.update(selectedId, formData);
      }

      await fetchMatieres();
      resetForm();
    } catch (err) {
      setErreur(err.response?.data?.erreur || "Erreur lors de la post/put.");
    }
  };

  const handleDelete = async (matiere) => {
    try {
      await matiereService.delete(matiere.id_matiere);
      await fetchMatieres();

      if (selectedId === matiere.id_matiere) {
        resetForm();
      }
    } catch (err) {
      setErreur(err.response?.data?.erreur || "Erreur lors de la suppression.");
    }
  };

  const handleEdit = (matiere) => {
    setSelectedId(matiere.id_matiere);
    setFormData({
      nom: matiere.nom,
      description: matiere.description,
      duree: matiere.duree,
      idProf: matiere.idProf,
    });
  };

  const rows = matieres.map((matiere) => {
    const prof = profs.find((p) => p.id_prof === Number(matiere.idProf));

    return {
      ...matiere,
      nomProf: prof ? prof.nom : "Aucun",
    };
  });

  if (erreur)
    return (
      <div className="alert alert-danger m-4">
        Erreur : {erreur}
        <button
          className="btn btn-sm btn-outline-danger ms-3"
          onClick={() => setErreur(null)}
        >
          Fermer
        </button>
      </div>
    );

  return (
    <section className="container mt-4">
      <h2 className="mb-4">Gestion des matières</h2>

      <MatiereForm
        formData={formData}
        setFormData={setFormData}
        profs={profs}
        isEditing={selectedId !== null}
        handleSubmit={handleSubmit}
        handleCancel={resetForm}
      />

      <CrudTable
        columns={[
          { key: "id_matiere", label: "ID" },
          { key: "nom", label: "Nom" },
          { key: "description", label: "Description" },
          { key: "duree", label: "Durée" },
          { key: "nomProf", label: "Prof" },
        ]}
        rows={rows}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </section>
  );
}
