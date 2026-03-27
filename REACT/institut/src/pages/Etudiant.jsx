import EtudiantListe from "../components/etudiant/EtudiantListe";
import etudiantService from "../services/EtudiantService";

export default function Etudiant() {
  const etudiants = etudiantService.getAll();

  // delete - update - detail - ....

  return (
    <>
      <section className="container">
        Liste des étudiants
        <EtudiantListe etudiants={etudiants} />
      </section>
    </>
  );
}
