import { useEffect, useState } from "react";
import ProfForm from "../components/prof/ProfForm";
import CrudTable from "../components/common/CrudTable";
import profService from "../services/ProfService";

export default function Prof() {
  const [profs, setProfs] = useState([]);
  const [erreur, setErreur] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [detailProf, setDetailProf] = useState(null);
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    spec: "",
  });

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

  const resetForm = () => {
    setFormData({
      nom: "",
      email: "",
      spec: "",
    });
    setSelectedId(null);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      if (!formData.nom.trim()) return;

      if (selectedId === null) {
        await profService.add(formData);
      } else {
        await profService.update(selectedId, formData);
      }

      await fetchProfs();
      resetForm();
      resetDetail();
    } catch (err) {
      setErreur(err.response?.data?.erreur || "Erreur lors de la post/put.");
    }
  };

  const handleDelete = async (prof) => {
    try {
      await profService.delete(prof.id_prof);
      await fetchProfs();

      resetDetail();
      if (selectedId === prof.id_prof) {
        resetForm();
      }
    } catch (err) {
      setErreur(err.response?.data?.erreur || "Erreur lors de la suppression.");
    }
  };

  const handleEdit = (prof) => {
    setSelectedId(prof.id_prof);
    setFormData({
      nom: prof.nom,
      email: prof.email,
      spec: prof.spec,
    });
    resetDetail();
  };

  const detail = async (prof) => {
    setDetailProf(await profService.getById(prof.id_prof));
  };

  const resetDetail = () => setDetailProf(null);

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
      <h2 className="mb-4">Gestion des formateurs</h2>

      <ProfForm
        formData={formData}
        setFormData={setFormData}
        isEditing={selectedId !== null}
        handleSubmit={handleSubmit}
        handleCancel={resetForm}
      />

      {detailProf && (
        <div className="my-5">
          <h3>
            {" "}
            {`${detailProf.nom} ${detailProf.matieres.length}`} matière(s)
          </h3>
          {detailProf.matieres.length === 0 ? (
            "Aucune matière"
          ) : (
            <ul>
              {detailProf.matieres.map((mat) => (
                <li key={mat.id_matiere}>{mat.nom}</li>
              ))}
            </ul>
          )}
        </div>
      )}

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
        detail={detail}
      />
    </section>
  );
}
