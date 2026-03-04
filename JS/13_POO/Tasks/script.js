import { Task } from "./Task.js";
import {TaskManager} from "./TaskManager.js";

const qs = el => document.querySelector(el);

let form = qs("form");

let taskManage = new TaskManager();

// Créer/modifier une tâche!
form.addEventListener("submit", e => {
    e.preventDefault();

    qs("#err").classList.remove("alert");

    // DONNEES FORMULAIRE
    let titre = qs("#titre").value;
    let description = qs("#desc").value;
    let statut = qs("#statut").value;

    let task;

    // INstanciation de task
    try{
        task = new Task({titre, description, statut});

        if( !qs("#id").value ){
            taskManage.ajouter(task);
            flasBag("Task ajoutée avec success!");
        }else{
            taskManage.update(qs("#id").value, task);
            flasBag("Task mise à jour avec success!");
            qs("#id").value = null;
        }

    }catch(err){
        qs("#err").innerHTML = err.message;
        qs("#err").classList.add("alert", "alert-danger");
        
        return;
    }

    // si task valide ...
    form.reset();
    refresh(taskManage.lire());

});




// filtre taches via statut
qs("#statutFilter").addEventListener("change", e => {
    let tasksStatuts = taskManage.filter(qs("#statutFilter").value);

    if( !tasksStatuts ) refresh( taskManage.lire() );
    if( tasksStatuts ) refresh( tasksStatuts );
    
});

// recherche tâches via titre ou description
qs("#texte").addEventListener("input", e => {
    let result = taskManage.rechercher(qs("#texte").value);
    if( result ){
        refresh(result);
    }else{
        refresh(taskManage.lire());
    }
});


function refresh(tasks){
    qs("#task").innerHTML = "";
    
    tasks.forEach( (task, index) => {
        let card = createElem("div", ["col-3", "task-card", "border", "border-5", `border-${task.couleur}`]);

        let h3 = createElem("h3", [], task.titre);
        let sp = createElem("span", [`text-${task.couleur}`], ` [${task.statut}]`);
        h3.appendChild(sp);

        let desc = createElem("div", [], task.description);
        let date = createElem("div", [], `Créée le ${task.createdAt.toLocaleString()}`);

        let divBtn = createElem("div", ["d-flex", "gap-3", "mt-3"]);
        let btnUp = createElem("button", ["btn-update", "btn", "btn-primary"], "Modifier");
        btnUp.id = task.id;

        let btndel = createElem("button", ["btn-update", "btn", "btn-danger"], "Supprimer");
        btndel.id = task.id;

        divBtn.appendChild(btnUp);
        divBtn.appendChild(btndel);

        card.appendChild( h3 );
        card.appendChild( desc );
        card.appendChild( date );
        card.appendChild( divBtn );

        qs("#task").appendChild( card );

        card.draggable = true;
        card.id = task.id;

        card.addEventListener("dragstart", e => {
            e.dataTransfer.setData("text/plain",  task.id)            
        });

        card.addEventListener("dragover", e => {
            e.preventDefault();
            card.classList.add("over");
        });

        card.addEventListener("drop", e => {
            e.preventDefault();
            let fromCard = Number( e.dataTransfer.getData("text/plain") );
            let toCard = Number( card.id );
            
            if( fromCard != toCard ){
                taskManage.drag(fromCard, toCard);

                refresh(tasks);
                flasBag("Task déplacée avec success!");
            }
            card.classList.remove("over");
        });

        card.addEventListener("dragleave", e => {
            card.classList.remove("over");
        });

        // btn delete
        btndel.addEventListener("click", e => {
            if( taskManage.supprimer(btndel.id) ){
                flasBag("Task Supprimée avec success!");
            }
            refresh(tasks);
        });

        // btn delete
        btnUp.addEventListener("click", e => {
            let taskUp = taskManage.lireTask(btnUp.id)
            qs("#titre").value = taskUp.titre;
            qs("#id").value = taskUp.id;
            qs("#desc").value = taskUp.description;
            qs("#statut").value = taskUp.statut;
            
            refresh(tasks);
        });
    }); 

    qs("#etatTache").innerHTML = (tasks.length);
    qs("#etatTache").innerHTML += tasks.length <= 1  ? " Tache" : " Tâches";
}

function flasBag(msg){
    qs("#msg").style.display = "block";
    qs("#msg").textContent = msg;
    setTimeout( () => {
        qs("#msg").style.display = "none";
    }, 3000);
}

function createElem(elem, classes = [], text = ""){
    let el = document.createElement(elem);
    el.textContent = text;
    
    classes.forEach(c => el.classList.add(c) );

    return el;
}

refresh(taskManage.load());