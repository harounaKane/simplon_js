import express from "express";
import {
  createMatiere,
  getMatieres,
} from "../controllers/Matiere.controller.js";

const router = express.Router();

router.get("/", getMatieres);
router.post("/", createMatiere);

export default router;
