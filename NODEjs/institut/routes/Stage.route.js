import express from "express";
import {
  addMatiere,
  createStage,
  deleteEtudiant,
  deleteStage,
  getStage,
  getStages,
  inscrireEtudiant,
  updateStage,
} from "../controllers/Stage.controller.js";

const router = express.Router();

router.get("/", getStages);
router.get("/:id", getStage);
router.post("/", createStage);
router.delete("/:id", deleteStage);
router.put("/:id", updateStage);
router.post("/:id/matieres", addMatiere);
router.delete("/:id/etudiants/:etudiantId", deleteEtudiant);
router.post("/:id/etudiants", inscrireEtudiant);

export default router;
