import express from "express";
import { inscription, login } from "../controllers/User.Controller.js";

const router = express.Router();

router.post("/", inscription);
router.post("/login", login);

export default router;
