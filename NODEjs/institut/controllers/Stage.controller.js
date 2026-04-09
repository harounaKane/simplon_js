import Stage from "../models/Stage.js";

export const getStages = async (req, res) => {
  try {
    const stages = await Stage.findAll();

    res.status(200).json({ total: stages.length, stages });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const createStage = async (req, res) => {
  try {
    const { nom, debut, fin, description } = req.body;
    console.log(req.body);

    const stage = await Stage.create({ nom, debut, fin, description });

    res.status(200).json(stage);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
// 2026-04-08 08:24:11
