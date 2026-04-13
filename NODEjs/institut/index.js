import "./models/index.js";

import express from "express";
import dotenv from "dotenv";
import sequelize from "./db.js";
import profRouter from "./routes/Prof.route.js";
import matiereRoute from "./routes/Matiere.route.js";
import stageRouter from "./routes/Stage.route.js";
import etudiantRouter from "./routes/Etudiant.route.js";

import cors from "cors";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors()); // en mode DEV
//app.use(cors({origin: ["https://monsite.fr", "localhost:5173"]})); // en mode PROD

app.use("/prof", profRouter);
app.use("/matiere", matiereRoute);
app.use("/stage", stageRouter);
app.use("/etudiant", etudiantRouter);

sequelize.sync({ alter: true }).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Port : http://localhost:${process.env.PORT}`);
  });
});
