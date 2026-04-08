import Matiere from "../models/Matiere.js";
import Prof from "../models/Prof.js";

export const getProfs = async (req, res) => {
  try {
    const profs = await Prof.findAll({
      include: {
        model: Matiere,
        as: "matieres",
      },
    });
    res.status(200).json(profs);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const getProf = async (req, res) => {
  try {
    const prof = await Prof.findByPk(req.params.id, {
      include: {
        model: Matiere,
        as: "matieres",
      },
    });

    if (!prof) return res.status(500).json({ msg: "Pas de prof avec cet id" });

    res.status(200).json(prof);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const createProf = async (req, res) => {
  try {
    const { nom, email, spec } = req.body;
    const newProf = await Prof.create({ nom, email, spec });

    res.status(200).json(newProf);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const updateProf = async (req, res) => {
  try {
    const prof = await Prof.findByPk(req.params.id);

    if (!prof) return res.status(404).json({ msg: "Pas de prof avec cet id" });

    const { nom, email, spec } = req.body;

    await prof.update({ nom, email, spec });
    res.status(200).json(prof);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const delProf = async (req, res) => {
  try {
    const prof = await Prof.findByPk(req.params.id);

    if (!prof) return res.status(404).json({ msg: "pas de prof avec cet id" });

    await prof.destroy();

    res.status(200).json({ msg: `Le prof ${prof.nom} est supprimé !` });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
