import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Goal } from './models/goal.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  constructor(private http: HttpClient) { }

  public getGoalByID(id: string): Observable<Goal> {
    return this.http.get<Goal>(`//localhost:8000/api/goals/${id}`);
  }

  deleteGoalByID(id: string) {
    return this.http.delete(`//localhost:8000/api/goals/${id}`)
  }

  editGoalByID(id: string, goal: Goal) {
    let body = {
      title: goal.title,
      description: goal.description,
      progress: goal.progress,
      isCompleted: goal.isCompleted,
      estimatedWork: goal.estimatedWork,
      remainingWork: goal.remainingWork,
      justification: goal.justification,
      isReoccuring: goal.isReoccuring,
      priority: goal.priority,
      idealOutcome: goal.idealOutcome,
      scope: goal.scope,
      blockingReason: goal.blockingReason,
      replacement: goal.replacement,
      phase: goal.phase,
      parentid: goal.parentid,
      dueDate: goal.dueDate
    }

    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    return this.http.put(`//localhost:8000/api/goals/${id}`, body,options)
  }

  addSubGoal(id: string, subGoal: Goal) {
    let body = {title: subGoal.title,
                description: subGoal.description,
                parentid: id};
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    return this.http.post(`//localhost:8000/api/goals`, body, options)
  }
}
