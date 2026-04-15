import express from "express";
import {
  createProf,
  delProf,
  getProf,
  getProfs,
  updateProf,
} from "../controllers/Prof.Controller.js";
import verifyToken from "../middleware/verifyToken.js";
import verifyRole from "../middleware/verifyRole.js";

const router = express.Router();

router.get("/", getProfs);

router.use(verifyToken, verifyRole("ADMIN"));
// router.use(verifyToken, verifyRole("ADMIN", "USER"));

router.get("/:id", getProf);
router.put("/:id", updateProf);
router.post("/", createProf);
router.delete("/:id", delProf);

export default router;
