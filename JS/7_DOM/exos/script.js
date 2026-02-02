// Exo DOM — Page riche (sans événements)

let h1 = document.getElementById("site-title");
console.log(h1.textContent);

let badge =document.querySelector("#status-badge" );
badge.innerHTML= "statut :ok";

let text = document.querySelectorAll(".text");
console.log(text.length);

text[1].classList.add("highlight");

let liens = document.querySelectorAll("a");

for (let a of liens)
{
    a.textContent += " 🔗";
}

let p = document.getElementsByClassName("post-text");
for(let i of p){

   i.textContent ="Contenu mis à jour automatiquement au chargement.";
    
}

let header = document.querySelector("header")
header.style.backgroundColor = "blue"
let soustitre = document.querySelector("#site-subtitle")
soustitre.style.color = "red"

let images = document.querySelectorAll("img");
for(let img of images){
    img.setAttribute("title", "Image du portail DOM");
}

let btn = document.querySelector(".btn.danger");

console.log(btn);

btn.setAttribute("href","https://developer.mozilla.org/");

let infoCard = document.querySelector("#info-card")
infoCard.classList.toggle("hidden")
let debugZone = document.querySelector("#debug-zone")
debugZone.textContent = "Debug : info-card masqué"


