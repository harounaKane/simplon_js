import { PriorityTask } from "../models/PriorityTask.js";
import { Task } from "../models/Task.js";

export class TaskManager{
    private _tasks:Task[];

    constructor(){
        this._tasks = [];
    }

    addTask(task: Task): void{
        this._tasks.push(task);
    }

    toggleTask(idTask: number): void{
        let task = this._tasks.find(t => t.id == idTask);

        if( !task ) throw new Error("Pas de task avec cet ID");

        task.toggle();
    }

    gettask(id: number): Task | null{
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
}