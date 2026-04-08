import express from "express";
import {
  createProf,
  delProf,
  getProf,
  getProfs,
  updateProf,
} from "../controllers/Prof.Controller.js";

const router = express.Router();

router.get("/", getProfs);
router.get("/:id", getProf);
router.put("/:id", updateProf);
router.post("/", createProf);
router.delete("/:id", delProf);

export default router;
