import { PriorityTask } from "../models/PriorityTask.js";
export class TaskManager {
    _tasks;
    constructor() {
        this._tasks = [];
    }
    addTask(task) {
        this._tasks.push(task);
    }
    toggleTask(idTask) {
        let task = this._tasks.find(t => t.id == idTask);
        if (!task)
            throw new Error("Pas de task avec cet ID");
        task.toggle();
    }
    gettask(id) {
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
}
