import { useEffect, useState } from "react";
import ProfForm from "../components/prof/ProfForm";
import CrudTable from "../components/common/CrudTable";
import profService from "../services/ProfService";

export default function Prof() {
  const [profs, setProfs] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await profService.getAll();
      setProfs(data);
    };
    load();
  }, []);

  const fetchProfs = async () => {
    const data = await profService.getAll();
    setProfs(data);
  };

  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    spec: "",
  });

  const [selectedId, setSelectedId] = useState(null);

  const resetForm = () => {
    setFormData({
      nom: "",
      email: "",
      spec: "",
    });
    setSelectedId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.nom.trim()) return;

    if (selectedId === null) {
      await profService.add(formData);
    } else {
      profService.update(selectedId, formData);
    }

    await fetchProfs();
    resetForm();
  };

  const handleDelete = async (prof) => {
    await profService.delete(prof.id_prof);
    await fetchProfs();

    if (selectedId === prof.id_prof) {
      resetForm();
    }
  };

  const handleEdit = (prof) => {
    setSelectedId(prof.id);
    setFormData({
      nom: prof.nom,
      email: prof.email,
      spec: prof.spec,
    });
  };

  return (
    <section className="container mt-4">
      <h2 className="mb-4">Gestion des formateurs</h2>

      <ProfForm
        formData={formData}
        setFormData={setFormData}
        isEditing={selectedId !== null}
        handleSubmit={handleSubmit}
        handleCancel={resetForm}
      />

      <CrudTable
        columns={[
          { key: "id_prof", label: "ID" },
          { key: "nom", label: "Nom" },
          { key: "email", label: "Email" },
          { key: "spec", label: "Spécialité" },
        ]}
        rows={profs}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </section>
  );
}
