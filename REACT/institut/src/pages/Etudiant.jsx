import { useState } from "react";
import EtudiantForm from "../components/etudiant/EtudiantForm";
import EtudiantListe from "../components/etudiant/EtudiantListe";
import etudiantService from "../services/EtudiantService";

export default function Etudiant() {
  const [etudiants, setEtudiant] = useState(etudiantService.getAll());
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
  });

  const add = (e) => {
    e.preventDefault();
    const re = /\S+@\S+\.\S+/;

    if (
      re.test(formData.email) &&
      formData.nom.length >= 2 &&
      formData.telephone.length >= 10
    ) {
      etudiantService.add(formData);
      setEtudiant([...etudiantService.getAll()]);
      resetForm();
    } else console.log("form invalid");
  };

  const resetForm = () => {
    setFormData({
      nom: "",
      email: "",
      telephone: "",
    });
  };

  // delete - update - detail - ....

  return (
    <>
      <section className="container">
        <EtudiantForm formData={formData} setFormData={setFormData} add={add} />

        <h2>🧑‍🎓 Liste des étudiants</h2>
        <EtudiantListe etudiants={etudiants} />
      </section>
    </>
  );
}
