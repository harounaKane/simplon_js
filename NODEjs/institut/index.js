import express from "express";
import dotenv from "dotenv";
import sequelize from "./db.js";
import profRouter from "./routes/Prof.route.js";
import matiereRoute from "./routes/Matiere.route.js";
import stageRouter from "./routes/Stage.route.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/prof", profRouter);
app.use("/matiere", matiereRoute);
app.use("/stage", stageRouter);

sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Port : http://localhost:${process.env.PORT}`);
  });
});
