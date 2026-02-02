let header = document.querySelector("header");
// let titre = document.getElementById("titre");
let titre = document.querySelector("#titre");
// let liens = document.getElementsByClassName("lien");
let liens = document.querySelectorAll(".lien");

let img = document.querySelector("header img");
img.src = "sim2.png";
console.log(img.getAttribute("src"));

let h2 = document.querySelectorAll("h2");

h2[0].classList.add("h2");
h2[1].classList.add("h2");

h2[0].setAttribute("title", "valeur");

console.log(h2);

