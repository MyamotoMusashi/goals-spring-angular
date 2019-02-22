import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getTaskByID(requestID: string, taskID: string) {
    return this.http.get(`/api/requests/${requestID}/tasks/${taskID}`)
  }

  addTask(requestID: string, task: Task) {
    let body = new HttpParams()
      .append('title', task.title)
      .append('taskDescription', task.taskDescription)
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }) }
    return this.http.post(`/api/requests/${requestID}/tasks`, body.toString(),options)
  }

  deleteTaskByID(requestID: string, taskID: string){
    return this.http.delete(`/api/requests/${requestID}/tasks/${taskID}`)
  }

  completeTaskByID(requestID: string, taskID: string){
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }) }
    return this.http.put(`api/requests/${requestID}/tasks/${taskID}`,{}, options)
  }

  editTaskByID(requestID: string, taskID: string, task) {
    let body = new HttpParams()
      .append('title', task.title)
      .append('taskDescription', task.taskDescription)
    console.log(body.toString());
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }) }
    return this.http.put(`/api/requests/${requestID}/tasks/${taskID}/edit`, body.toString(),options)
  }
}
