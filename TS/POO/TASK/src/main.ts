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

