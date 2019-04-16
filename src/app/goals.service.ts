import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Goal } from './models/goal.model';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  constructor(private http: HttpClient) { }

  getAllGoals(){
    let options = { headers: new HttpHeaders({Authorization: 'Basic ' + btoa('buzz:1234')}) }
    return this.http.get<Goal[]>('//localhost:8000/api/goals', options)
  }

  getAllGoalsByQuery(query: string){
    let options = { headers: new HttpHeaders({Authorization: 'Basic ' + btoa('buzz:1234')}) }
    return this.http.get<Goal[]>(`//localhost:8000/api/goals?state=${query}`, options)
  }

  addGoal(goal: Goal) {
    let body = {
      title: goal.title,
      description: goal.description
    }

    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    
    return this.http.post('//localhost:8000/api/goals', body, options)
  }
}