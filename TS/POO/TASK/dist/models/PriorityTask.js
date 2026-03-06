import { Task } from "./Task.js";
export class PriorityTask extends Task {
    _priority = 1;
    constructor(id, title, completed, priority) {
        super(id, title, completed);
        this.priority = priority;
    }
    getLabel() {
        return this._completed
            ? `☑ ${this._title} (priorité ${this._priority})`
            : `⚠️ ${this._title} (priorité ${this._priority})`;
    }
    toJson() {
        return {
            id: this._id,
            title: this._title,
            completed: this._completed,
            priority: this._priority
        };
    }
    static fromJson(task) {
        return new PriorityTask(task.id, task.title, task.completed, task.priority);
    }
    get priority() { return this._priority; }
    set priority(priority) {
        if (priority < 1 || priority > 5)
            throw new Error("La prioritéest de 1 à 5");
        this._priority = priority;
    }
}
