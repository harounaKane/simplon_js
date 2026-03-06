import { PriorityTask } from "../models/PriorityTask.js";
import { Task } from "../models/Task.js";
export class TaskManager {
    _tasks;
    constructor() {
        this._tasks = this.load();
    }
    addTask(task) {
        this._tasks.push(task);
        this.save();
    }
    toggleTask(idTask) {
        let task = this._tasks.find(t => t.id == idTask);
        if (!task)
            throw new Error("Pas de task avec cet ID");
        task.toggle();
        this.save();
        this._tasks = this.load();
    }
    getTask(id) {
        let task = this._tasks.find(t => t.id == id);
        if (task)
            return task;
        return null;
    }
    nombreTaskPrio() {
        return this._tasks.filter(task => task instanceof PriorityTask).length;
    }
    nombreTaskNotPrio() {
        return this._tasks.filter(task => !(task instanceof PriorityTask)).length;
    }
    get tasks() { return this._tasks; }
    save() {
        localStorage.setItem("task", JSON.stringify(this.tasks.map(task => task.toJson())));
    }
    load() {
        let dataObj = JSON.parse(localStorage.getItem('task')) || [];
        return dataObj.map((t) => t.priority ? PriorityTask.fromJson(t) : Task.fromJson(t));
    }
}
