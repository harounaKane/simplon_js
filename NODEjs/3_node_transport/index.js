import express from "express";
import { db } from "./db.js";

import busRouter from "./routes/busRoute.js";

const app = express();
app.use(express.json());

// ROUTES BUS
app.use("/bus", busRouter);

// app.use("/ticket", ticketRouter);

// ticket prix : [15, 18]
app.get("/bus/ticket/15/18", async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT prix FROM ticket WHERE prix BETWEEN 15 AND 18",
    );

    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ erreur: error.message });
  }
});

app.listen(4000, () => {});
