import express from "express";
import { inscription } from "../controllers/User.Controller.js";

const router = express.Router();

router.post("/", inscription);

export default router;
