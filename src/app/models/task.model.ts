export class Task {
    private _taskID;
    private _title;
    private _taskStatus;
    private _taskDescription;
    private _dateCreated;

    constructor(title, taskStatus, taskDescription) {
        this.title = title;
        this.taskStatus = taskStatus;
        this.taskDescription = taskDescription
    }
    get taskID(){
        return this._taskID;
    }


    set taskID(value){
        this._taskID = value;
    }

    get title(){
        return this._title;
    }

    set title(value){
        this._title = value;
    }

    get taskStatus(){
        return this._taskStatus;
    }

    set taskStatus(value){
        this._taskStatus = value;
    }

    get taskDescription(){
        return this._taskDescription;
    }

    set taskDescription(value){
        this._taskDescription = value;
    }

    get dateCreated(){
        return this._dateCreated;
    }

    set dateCreated(value){
        this._dateCreated = value;
    }
}