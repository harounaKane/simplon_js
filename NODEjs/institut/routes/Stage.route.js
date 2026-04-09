import express from "express";
import { createStage, getStages } from "../controllers/Stage.controller.js";

const router = express.Router();

router.get("/", getStages);
router.post("/", createStage);

export default router;
