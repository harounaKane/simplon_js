'use strict';  // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/
let toolbar = selector(".toolbar");
let toolbarIcon = selector(".toolbar i");
let toolbarToggle = selector("#toolbar-toggle");
let slideNext = selector("#slider-next");
let slidePrev = selector("#slider-previous");
let slideToggle = selector("#slider-toggle");
let slideRandom = selector("#slider-random");
let img = selector("#slider img");
let fig = selector("#slider figcaption");

let points = selector("#points");

let images = [
    {path: "images/1.jpg", title: "1 - Rue de l'art"},
    {path: "images/2.jpg", title: "2 - Sur le pont"},
    {path: "images/3.jpg", title: "3 - Une université"},
    {path: "images/4.jpg", title: "4 - Building"},
    {path: "images/5.jpg", title: "5 - Ville lumineuse"},
    {path: "images/6.jpg", title: "6 - La tour Eiffel"},
];

let index = 0;
let intervalId = null;
 

/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/
function selector(elem){
    return document.querySelector(elem);
}

function avancer(){
    index++;

    if( index == images.length ){
        index = 0;
    }

    refresh();
}

function reculer(){
    index--;

    if( index < 0 ){
        index = images.length - 1;
    }

    refresh();
}

function playToggle(){
    selector("#slider-toggle i").classList.toggle("fa-play");
    selector("#slider-toggle i").classList.toggle("fa-pause");

    if( intervalId !== null ){
        clearInterval(intervalId);
        intervalId = null; 
        return;
    }

    intervalId = setInterval( avancer, 1000 );
}

function aleatoir(){
    let rand;
    do{
        rand = Math.floor( Math.random() * images.length );        
    }while( rand == index );

    index = rand;
    refresh();
}

function refresh(){
    img.src = images[index].path;
    fig.textContent = images[index].title;

    updatePoints();
}

function updatePoints(){
    let points = document.querySelectorAll(".point");

    points.forEach(point => {
        point.classList.remove("active");
        points[index].classList.add("active")
    });   
}

/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
toolbar.addEventListener("click", () => {
    toolbarIcon.classList.toggle("fa-arrow-up");
    toolbarIcon.classList.toggle("fa-arrow-down");

    // masquer la barre d'outils
    toolbarToggle.classList.toggle("hide");
});


slideNext.addEventListener("click", () => {
    avancer();
});


slidePrev.addEventListener("click", () => {
    reculer();
});

slideToggle.addEventListener("click", () => {
    playToggle();
}); 

slideRandom.addEventListener("click", () => {
    aleatoir();
});


document.addEventListener("keyup", (e) => {    
    switch(e.key){
        case "ArrowRight":
            avancer();
            break;
        case "ArrowLeft":
            reculer();
            break;
        case " ":
            playToggle();
            break;
    }
});


images.forEach( (image, idx) => {
    let span = document.createElement("span");
    span.classList.add("point");
    span.textContent = "."
    points.appendChild(span);

    span.addEventListener("click", () => {
        index = idx;
        refresh();
    });
});


refresh();