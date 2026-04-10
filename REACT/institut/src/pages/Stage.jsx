import { useEffect, useState } from "react";
import StageForm from "../components/stage/StageForm";
import CrudTable from "../components/common/CrudTable";
import stageService from "../services/StageService";
import ModalErreur from "../components/common/ModalErreur";

export default function Stage() {
  const [stages, setStages] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await stageService.getAll();
        setStages(data);
      } catch (err) {
        setErreur(err.response?.data?.erreur || "Erreur chargement stages.");
      }
    };

    load();
  }, []);

  const [formData, setFormData] = useState({
    nom: "",
    debut: "",
    fin: "",
    description: "",
  });

  const resetForm = () => {
    setFormData({
      nom: "",
      debut: "",
      fin: "",
      description: "",
    });
    setSelectedId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.nom.trim()) return;

    if (selectedId === null) {
      await stageService.add(formData);
    } else {
      await stageService.update(selectedId, formData);
    }

    await fetchStages();
    resetForm();
  };

  const fetchStages = async () => {
    setStages(await stageService.getAll());
  };

  const handleDelete = async (stage) => {
    await stageService.delete(stage.id_stage);
    await fetchStages();

    if (selectedId === stage.id_stage) {
      resetForm();
    }
  };

  const handleEdit = (stage) => {
    setSelectedId(stage.id_stage);
    setFormData({
      nom: stage.nom,
      debut: stage.debut,
      fin: stage.fin,
      description: stage.description,
    });
  };

  return (
    <section className="container mt-4">
      <h2 className="mb-4">Gestion des stages</h2>

      <ModalErreur erreur={erreur} setErreur={setErreur} />

      <StageForm
        formData={formData}
        setFormData={setFormData}
        isEditing={selectedId !== null}
        handleSubmit={handleSubmit}
        handleCancel={resetForm}
      />
      <h2 className="mb-4">👨‍💼 Liste des Stage</h2>
      <CrudTable
        columns={[
          { key: "id_stage", label: "ID" },
          { key: "nom", label: "Nom" },
          { key: "debut", label: "Date début" },
          { key: "fin", label: "Date fin" },
          { key: "description", label: "Description" },
        ]}
        rows={stages}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </section>
  );
}
