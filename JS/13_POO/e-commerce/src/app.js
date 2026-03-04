import { UserManager } from "./managers/UserManager.js";
import { User } from "./models/User.js";

const qs = el => document.querySelector(el);

const usermanegr = new UserManager();

let form = qs("form");

form.addEventListener("submit", e => {
    e.preventDefault();

    // ----------------------------------
    qs("#err").innerHTML = "";
    let user;

    try{
        let name = qs("#name").value;
        let login = qs("#login").value;
        let mdp = qs("#mdp").value;

        user = new User({name, login, mdp});
        usermanegr.add(user);

        form.reset();

        render();

    }catch(err){
        qs("#err").innerHTML = err.message;
        qs("#err").classList.add("alert");
        console.log(err.message);
    }

});

function render(){
    qs("#user").innerHTML = "";

    usermanegr.load().forEach(user => {

        let div = createElement("div");
        let btnUp = createElement("button");
        btnUp.innerHTML = `<button class="btn btn-success p-0"><i class="fa-solid fa-pen"></i></button>`;

        let btnLog = createElement("button");
        btnLog.innerHTML = `<button class="btn btn-success p-0"><i class="fa-solid fa-arrow-right-to-bracket"></i></button>`;
        btnUp.style.border = "none";
        btnLog.style.border = "none";

        div.innerHTML = `${user.name} `;
        div.appendChild(btnUp);
        div.appendChild(btnLog);

         qs("#user").appendChild(div);
        //  qs("#user").classList.add("d-flex", "flex-column", "gap-2");
    });
}

function createElement(elem){
    return document.createElement(elem);
}

render();

console.log( usermanegr.load() );
