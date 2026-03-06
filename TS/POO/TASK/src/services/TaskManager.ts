import { PriorityTask } from "../models/PriorityTask.js";
import { Task } from "../models/Task.js";

export class TaskManager{
    private _tasks:Task[];

    constructor(){
        this._tasks = this.load();
    }

    addTask(task: Task): void{
        this._tasks.push(task);
        this.save();
    }

    toggleTask(idTask: number): void{
        let task = this._tasks.find(t => t.id == idTask);

        if( !task ) throw new Error("Pas de task avec cet ID");

        task.toggle();
        this.save();
        this._tasks = this.load();
    }

    getTask(id: number): Task | null{
        let task = this._tasks.find(t => t.id == id);

        if( task ) return task;

        return null;
    }

    nombreTaskPrio(){
        return this._tasks.filter(task => task instanceof PriorityTask).length;
    }

    nombreTaskNotPrio(){
        return this._tasks.filter(task => !(task instanceof PriorityTask)).length;
    }

    get tasks(): Task[]{return this._tasks;}

    save(){
        localStorage.setItem("task", JSON.stringify(this.tasks.map(task => task.toJson())));
    }

    load(){
        let dataObj = JSON.parse( localStorage.getItem('task')! ) || [];

        return dataObj.map((t: any) => t.priority ? PriorityTask.fromJson(t) : Task.fromJson(t));
    }
}