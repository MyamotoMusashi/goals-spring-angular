import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getTaskByID(requestID: string, taskID: string) {
    return this.http.get(`/api/requests/${requestID}/tasks/${taskID}`)
  }
}
