import { useState } from "react";
import StageForm from "../components/stage/StageForm";
import CrudTable from "../components/common/CrudTable";
import stageService from "../services/StageService";

export default function Stage() {
  const [stages, setStages] = useState(stageService.getAll());

  const [formData, setFormData] = useState({
    nom: "",
    dateDebut: "",
    dateFin: "",
    description: "",
  });

  const [selectedId, setSelectedId] = useState(null);

  const resetForm = () => {
    setFormData({
      nom: "",
      dateDebut: "",
      dateFin: "",
      description: "",
    });
    setSelectedId(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nom.trim()) return;

    if (selectedId === null) {
      stageService.add(formData);
    } else {
      stageService.update(selectedId, formData);
    }

    setStages([...stageService.getAll()]);
    resetForm();
  };

  const handleDelete = (id) => {
    stageService.delete(id);
    setStages([...stageService.getAll()]);

    if (selectedId === id) {
      resetForm();
    }
  };

  const handleEdit = (stage) => {
    setSelectedId(stage.id);
    setFormData({
      nom: stage.nom,
      dateDebut: stage.dateDebut,
      dateFin: stage.dateFin,
      description: stage.description,
    });
  };

  return (
    <section className="container mt-4">
      <h2 className="mb-4">Gestion des stages</h2>

      <StageForm
        formData={formData}
        setFormData={setFormData}
        isEditing={selectedId !== null}
        handleSubmit={handleSubmit}
        handleCancel={resetForm}
      />

      <CrudTable
        columns={[
          { key: "id", label: "ID" },
          { key: "nom", label: "Nom" },
          { key: "dateDebut", label: "Date début" },
          { key: "dateFin", label: "Date fin" },
          { key: "description", label: "Description" },
        ]}
        rows={stages}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </section>
  );
}
