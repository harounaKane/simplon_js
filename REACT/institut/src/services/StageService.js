import { stagesData } from "../data/FakeData";
import Stage from "../model/Stage";
import api from "./api";

// const formatDate = (dateISO) => dateISO?.split("T") ?? "";
const formatDate = (dateISO) => {
  if (!dateISO) return "";
  const [date, heure] = dateISO.split("T");
  return `${date} ${heure.replace("Z", "")}`; // "2026-04-08 06:24:11.000"
};

class StageService {
  stages = stagesData;

  async getAll() {
    const res = await api.get("/stage");
    return res.data.stages.map((stage) => ({
      ...stage,
      debut: formatDate(stage.debut),
      fin: formatDate(stage.fin),
    }));
  }

  async getById(id) {
    const res = await api.get(`/stage/${id}`);
    return {
      ...res.data,
      dateDebut: formatDate(res.data.dateDebut),
      dateFin: formatDate(res.data.dateFin),
    };
  }

  async add(data) {
    const stage = await api.post(`/stage`, data);
    return stage;
  }

  async update(id, data) {
    const stage = await api.put(`/stage/${id}`, data);
    return stage;
  }

  async delete(id) {
    return await api.delete(`/stage/${id}`);
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
