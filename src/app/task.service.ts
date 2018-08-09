import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: Http) { }
  
  getTaskByID(requestID: string, taskID: string) {
	return this.http.get(`/api/requests/${requestID}/tasks/${taskID}`)
		.pipe(map((response: any) => response.json()));
  }
}
