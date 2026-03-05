import { Task } from "./Task.js";
export class PriorityTask extends Task {
    _priority = 1;
    constructor(id, title, completed, priority) {
        super(id, title, completed);
        this.priority = priority;
    }
    get priority() { return this._priority; }
    set priority(priority) {
        if (priority < 1 || priority > 5)
            throw new Error("La prioritéest de 1 à 5");
        this._priority = priority;
    }
}
