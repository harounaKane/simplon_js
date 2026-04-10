import express from "express";
import {
  createStage,
  deleteStage,
  getStages,
  updateStage,
} from "../controllers/Stage.controller.js";

const router = express.Router();

router.get("/", getStages);
router.post("/", createStage);
router.delete("/:id", deleteStage);
router.put("/:id", updateStage);

export default router;
