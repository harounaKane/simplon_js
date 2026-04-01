import { useState } from "react";
import EtudiantForm from "../components/etudiant/EtudiantForm";
import EtudiantListe from "../components/etudiant/EtudiantListe";
import etudiantService from "../services/EtudiantService";

export default function Etudiant() {
  const [etudiants, setEtudiant] = useState(etudiantService.getAll());
  const [selectedId, setSelectedId] = useState(null);
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
  });

  // ajout de new etudiant
  const handleSubmit = (e) => {
    e.preventDefault();
    const re = /\S+@\S+\.\S+/;

    if (
      re.test(formData.email) &&
      formData.nom.length >= 2 &&
      formData.telephone.length >= 10
    ) {
      if (selectedId == null) {
        // ajout de l'étudiant au serveur via le service "etudiantService"
        const et = etudiantService.createEtudiant(formData);
        etudiantService.add(et);
      } else {
        etudiantService.update(selectedId, formData);
      }

      // mise à jour de l'affichage (re-render)
      setEtudiant([...etudiantService.getAll()]);
      resetForm(); // vider les input du formulaire
    }
  };

  const resetForm = () => {
    setFormData({
      nom: "",
      email: "",
      telephone: "",
    });
    setSelectedId(null);
  };

  const onEdit = (etudiant) => {
    setSelectedId(etudiant.id_etudiant);
    setFormData({
      nom: etudiant.nom,
      email: etudiant.email,
      telephone: etudiant.telephone,
    });
  };

  const onDelete = (id) => {
    etudiantService.remove(id);
    setEtudiant([...etudiantService.getAll()]);
  };

  const cancel = () => {
    console.log("cancel");

    resetForm();
  };

  return (
    <>
      <section className="container">
        <EtudiantForm
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
          isEdit={selectedId}
          cancel={cancel}
        />

        <h2>🧑‍🎓 Liste des étudiants</h2>
        <EtudiantListe
          etudiants={etudiants}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      </section>
    </>
  );
}

// function ajouter(data) {
//   return new Etudiant(
//     Date.now(),
//     data.nom,
//     data.email,
//     data.telephone,
//   );

// }
