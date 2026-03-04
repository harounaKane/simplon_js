"use strict";
const stats = [
    { name: "Alice", score: 92, city: "Lyon" },
    { name: "Bob", score: 75, city: "Paris" },
    { name: "Eve", score: 88, city: "Lille" },
    { name: "Dan", score: 66, city: "Nice" },
    { name: "Cara", score: 81, city: "Bordeaux" },
];
// 1: top 3
const sortedStats = [...stats].sort((a, b) => b.score - a.score);
const [prem, second, trois, ...autres] = sortedStats;
const top3 = [prem, second, trois];
// 2:cmoyenne
const moyenneAutres = autres.reduce((somme, curent) => somme + curent.score, 0) / autres.length;
// 3: résumé 
const top3Name = top3.map(s => s.name).join(", ");
const resume = {
    top3Name,
    moyenneAutres,
    message: `Top 3: ${top3Name} — Moyenne des autres: ${moyenneAutres}`
};
console.log(resume);
