import { etudiantsData } from "../data/FakeData";
import Etudiant from "../model/Etudiant";

class EtudiantService {
  etudiants = etudiantsData;

  getAll() {
    return this.etudiants;
  }

  getById(id) {
    return this.etudiants.find((e) => e.id_etudiant === id);
  }

  add(data) {
    const etudiant = new Etudiant(
      Date.now(),
      data.nom,
      data.email,
      data.telephone,
    );

    this.etudiants.push(etudiant);
    return etudiant;
  }

  update(id, data) {
    const etudiant = this.getById(id);

    if (etudiant) {
      etudiant.nom = data.nom;
      etudiant.email = data.email;
      etudiant.telephone = data.telephone;
    }

    return etudiant;
  }

  delete(id) {
    this.etudiants = this.etudiants.filter((e) => e.id_etudiant !== id);
  }
}

export default new EtudiantService();
