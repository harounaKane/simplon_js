import { stagesData } from "../data/FakeData";
import Stage from "../model/Stage";

class StageService {
  stages = stagesData;

  getAll() {
    return this.stages;
  }

  getById(id) {
    return this.stages.find((s) => s.id === id);
  }

  add(data) {
    const stage = new Stage(
      Date.now(),
      data.nom,
      data.dateDebut,
      data.dateFin,
      data.description,
      [],
      [],
    );

    this.stages.push(stage);
    return stage;
  }

  update(id, data) {
    const stage = this.getById(id);
    if (stage) {
      stage.nom = data.nom ?? stage.nom;
      stage.dateDebut = data.dateDebut ?? stage.dateDebut;
      stage.dateFin = data.dateFin ?? stage.dateFin;
      stage.description = data.description ?? stage.description;
    }
    return stage;
  }

  delete(id) {
    this.stages = this.stages.filter((s) => s.id !== id);
  }

  // 🔗 relations

  inscrireEtudiant(idStage, idEtudiant) {
    const stage = this.getById(idStage);
    if (stage && !stage.etudiants.includes(idEtudiant)) {
      stage.etudiants.push(idEtudiant);
    }
  }

  ajouterMatiere(idStage, idMatiere) {
    const stage = this.getById(idStage);
    if (stage && !stage.matieres.includes(idMatiere)) {
      stage.matieres.push(idMatiere);
    }
  }

  retirerEtudiant(idStage, idEtudiant) {
    const stage = this.getById(idStage);
    if (stage) {
      stage.etudiants = stage.etudiants.filter((e) => e !== idEtudiant);
    }
  }

  retirerMatiere(idStage, idMatiere) {
    const stage = this.getById(idStage);
    if (stage) {
      stage.matieres = stage.matieres.filter((m) => m !== idMatiere);
    }
  }
}

export default new StageService();
