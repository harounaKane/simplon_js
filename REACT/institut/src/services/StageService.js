import { stagesData } from "../data/FakeData";
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

  async inscrireEtudiant(stageId, idEtudiant) {
    const res = await api.post(`/stage/${stageId}/etudiants`, {
      etudiantIds: [idEtudiant],
    });
    return res.data;
  }

  async ajouterMatiere(idStage, idMatiere) {
    console.log("ajouterMatiere appelé :", idStage, idMatiere); // ← log
    const res = await api.post(`/stage/${idStage}/matieres`, {
      matiereId: [idMatiere],
    });
    return res.data;
  }

  async retirerEtudiant(stageId, idEtudiant) {
    const res = await api.delete(`/stage/${stageId}/etudiants/${idEtudiant}`);
    return res.data;
  }

  async retirerMatiere(stageId, matiereId) {
    const res = await api.delete(`/stage/${stageId}/matieres/${matiereId}`);
    return res.data;
  }
}

export default new StageService();
