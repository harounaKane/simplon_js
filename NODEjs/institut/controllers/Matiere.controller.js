import Matiere from "../models/Matiere.js";
import Prof from "../models/Prof.js";

export const getMatieres = async (req, res) => {
  try {
    const matieres = await Matiere.findAll({
      include: { model: Prof, as: "prof" },
    });

    res.status(200).json({ total: matieres.length, matieres });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const createMatiere = async (req, res) => {
  try {
    const { nom, description, duree, idProf } = req.body;

    const matiere = await Matiere.create({ nom, description, duree, idProf });

    res.status(200).json(matiere);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
