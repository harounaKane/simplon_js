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
    get id() { return this._id; }
    get title() { return this._title; }
    get completed() { return this._completed; }
}
