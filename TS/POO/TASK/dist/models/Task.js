export class Task {
    _id;
    _title;
    _completed;
    constructor(id, title, completed) {
        this._id = id;
        this._title = title;
        this._completed = completed;
    }
    toggle() {
        this._completed = !this._completed;
    }
    getLabel() {
        return this._completed
            ? `☑ ${this._title}`
            : `☐ ${this._title}`;
    }
    toJson() {
        return {
            id: this._id,
            title: this._title,
            completed: this._completed
        };
    }
    static fromJson(data) {
        return new Task(data.id, data.title, data.completed);
    }
    get id() { return this._id; }
    get title() { return this._title; }
    get completed() { return this._completed; }
}
