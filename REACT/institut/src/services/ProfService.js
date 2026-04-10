import { profsData } from "../data/FakeData";
import Prof from "../model/Prof";
import api from "./api";

// export const getAllProf = () => api.get("/prof");

class ProfService {
  profs = profsData;

  async getAll() {
    const res = await api.get("/prof");

    return res.data;
  }

  async getById(id) {
    return (await api.get(`/prof/${id}`)).data;
  }

  async add(data) {
    //   const prof = new Prof(Date.now(), data.nom, data.email, data.spec);

    const res = await api.post("/prof", data);

    return res;
  }

  async update(id, data) {
    const res = await api.put(`/prof/${id}`, data);

    return res;
  }

  async delete(id) {
    // this.profs = this.profs.filter((p) => p.id !== id);
    const res = await api.delete(`/prof/${id}`);

    return res;
  }
}

export default new ProfService();
