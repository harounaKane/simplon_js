import express from "express";

const app = express();

const persons = [
  { id: 1, prenom: "Julie", ville: "Aix" },
  { id: 2, prenom: "Jean", ville: "Nice" },
  { id: 3, prenom: "John", ville: "Nantes" },
];

app.get("/", (req, res) => {
  res.send(persons);
});

app.get("/prof/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const p = persons.find((per) => per.id === id);

  if (!p) res.status(404).json({ errer: `pas de prof avec cet id : ${id}` });

  res.json(p);
});

app.get("/prof/nombre/total", (req, res) => {
  res.json({ total: persons.length });
});

app.get("/prof/nombre/MoinsUn", (req, res) => {
  res.json({ total: persons.length - 1 });
});

app.listen(8000, () => {
  console.log("Le serveur est lancé sur le port http://127.0.0.1:8000");
});
