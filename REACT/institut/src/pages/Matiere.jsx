import { useState } from "react";
import MatiereForm from "../components/matiere/MatiereForm";
import CrudTable from "../components/common/CrudTable";
import matiereService from "../services/MatiereService";
import profService from "../services/ProfService";

export default function Matiere() {
  const [matieres, setMatieres] = useState(matiereService.getAll());
  const [profs] = useState(profService.getAll());

  const [formData, setFormData] = useState({
    nom: "",
    description: "",
    duree: "",
    idProf: "",
  });

  const [selectedId, setSelectedId] = useState(null);

  const resetForm = () => {
    setFormData({
      nom: "",
      description: "",
      duree: "",
      idProf: "",
    });
    setSelectedId(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nom.trim()) return;

    if (selectedId === null) {
      matiereService.add(formData);
    } else {
      matiereService.update(selectedId, formData);
    }

    setMatieres([...matiereService.getAll()]);
    resetForm();
  };

  const handleDelete = (id) => {
    matiereService.delete(id);
    setMatieres([...matiereService.getAll()]);

    if (selectedId === id) {
      resetForm();
    }
  };

  const handleEdit = (matiere) => {
    setSelectedId(matiere.id);
    setFormData({
      nom: matiere.nom,
      description: matiere.description,
      duree: matiere.duree,
      idProf: matiere.idProf,
    });
  };

  const rows = matieres.map((matiere) => {
    const prof = profs.find((p) => p.id === Number(matiere.idProf));

    return {
      ...matiere,
      nomProf: prof ? prof.nom : "Aucun",
    };
  });

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
          { key: "id", label: "ID" },
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
