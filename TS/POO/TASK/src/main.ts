import { PriorityTask } from "./models/PriorityTask.js";
import { Task } from "./models/Task.js";
import { TaskManager } from "./services/TaskManager.js";

// const qs = <T>(sel: string): T => document.querySelector(sel) as T;

function qs <T>(sel: string):T{
    const el = document.querySelector(sel);
    if( !el ) throw new Error("Un élément HTML non trouvé !");

    return el as T;
}

let input:HTMLInputElement = qs("#taskTitle");
let select:HTMLSelectElement = qs("#priority");
let ul:HTMLUListElement = qs("#taskList");
let btn:HTMLButtonElement = qs("#addTask");

const manager = new TaskManager();

btn.addEventListener("click", () => {
    let title = input.value;
    let priority = parseInt(select.value);

    const id = Math.floor( Math.random() * 10000 + 1000 );
    let task:Task;

    if( priority ){
        task = new PriorityTask(id, title, false, priority);
    }else{
        task = new Task(id, title, false);
    }
    
    manager.addTask(task);

    input.value = "";
    input.focus();
    select.value = "";

    render();
});

function render() {
    let li = document.createElement("li");
    manager.tasks.forEach(task => {
        if( task instanceof PriorityTask ){
            li.textContent = `⚠️ ${task.title} (priorité ${task.priority})`;
        }else{
            li.textContent = task.title;
        }

    //    li.style.textDecoration = "line-through"
       // li.addEventListener("click")
    });

    ul.appendChild(li);
}
