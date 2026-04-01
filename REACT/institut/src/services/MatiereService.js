import { matieresData } from "../data/FakeData";
import Matiere from "../model/Matiere";

class MatiereService {
  matieres = matieresData;

  getAll() {
    return this.matieres;
  }

  getById(id) {
    return this.matieres.find((m) => m.id === id);
  }

  add(data) {
    const matiere = new Matiere(
      Date.now(),
      data.nom,
      data.description,
      Number(data.duree),
      Number(data.idProf),
    );

    this.matieres.push(matiere);
    return matiere;
  }

  update(id, data) {
    const matiere = this.getById(id);
    if (matiere) {
      matiere.nom = data.nom ?? matiere.nom;
      matiere.description = data.description ?? matiere.description;
      matiere.duree = data.duree ?? matiere.duree;
      matiere.idProf = data.idProf ?? matiere.idProf;
    }
    return matiere;
  }

  delete(id) {
    this.matieres = this.matieres.filter((m) => m.id !== id);
  }

  getByProf(idProf) {
    return this.matieres.filter((m) => m.idProf === idProf);
  }
}

export default new MatiereService();
