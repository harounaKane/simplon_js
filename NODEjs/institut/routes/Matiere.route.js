import express from "express";
import {
  createMatiere,
  delMatiere,
  getMatieres,
  updateMatiere,
} from "../controllers/Matiere.controller.js";

const router = express.Router();

router.get("/", getMatieres);
router.post("/", createMatiere);
router.put("/:id", updateMatiere);
router.delete("/:id", delMatiere);

export default router;
