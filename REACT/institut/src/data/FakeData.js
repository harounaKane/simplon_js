export const stages = [];

import Etudiant from "../model/Etudiant";
import Prof from "../model/Prof";
import Matiere from "../model/Matiere";
import Stage from "../model/Stage";

export const etudiantsData = [
  new Etudiant(1, "Julie", "julie@mail.com", "0600000001"),
  new Etudiant(2, "Jean", "jean@mail.com", "0600000002"),
];

export const profsData = [
  new Prof(1, "Ali", "ali@mail.com", "JavaScript"),
  new Prof(2, "Awa", "awa@mail.com", "React"),
];

export const matieresData = [
  new Matiere(1, "JavaScript", "Bases JS", 20, 1),
  new Matiere(2, "React", "Frontend moderne", 25, 2),
];

export const stagesData = [
  new Stage(
    1,
    "Formation Web",
    "2026-01-01",
    "2026-03-01",
    "Fullstack",
    [1, 2],
    [1, 2],
  ),
];
