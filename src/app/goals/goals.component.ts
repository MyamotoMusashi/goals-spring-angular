import { Component, OnInit } from '@angular/core';
import { GoalsService } from '../goals.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Goal } from '../models/goal.model';
import { GoalService } from '../goal.service';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {

  goals = [] as Goal[];
  header: string;

  constructor(private goalsService: GoalsService, private goalService: GoalService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    
    this.route.queryParamMap.subscribe(params => {
      let query: string;
      query = params.get("state")
      this.header = query;
      switch (query) {
        case "active":
          this.goals = [];
          this.goalsService.getAllGoalsByQuery(query).subscribe(goals => {
            goals.sort(this.sortGoalsByPriority);
            for (let i = 0; i < goals.length; i = i + 1) {
              if (goals[i].parentid == '0') {
                this.goals.push(goals[i]);
              }
            }
          });
          break;
        case "waiting":
          this.goals = [];
          this.goalsService.getAllGoalsByQuery(query).subscribe(goals => {
            goals.sort(this.sortGoalsByPriority);
            for (let i = 0; i < goals.length; i = i + 1) {
              if (goals[i].parentid == '0') {
                this.goals.push(goals[i]);
              }
            }
          });
          break;
        case null:
          this.goals = [];
          this.goalsService.getAllGoals().subscribe(goals => {
            goals.sort(this.sortGoalsByPriority)
            for (let i = 0; i < goals.length; i = i + 1) {
              if (goals[i].parentid == '0') {
                this.goals.push(goals[i]);
              }
            }
          });
          break;
      }
    })
  }


  completeGoal(event: any, goal: Goal) {
    let id: string = goal.id;
    this.goalService.editGoalByID(id, goal).subscribe();
  }

  sortGoalsByPriority(a,b){
    return a.priority - b.priority;
  }

  refreshGoalList(event: boolean){
    if(event){
      let query = this.route.snapshot.queryParamMap.get("state");
      this.getAllGoalsByQuery(query);
    }
  }

  getAllGoalsByQuery(query: string){
    this.goals = [];
    this.goalsService.getAllGoalsByQuery(query).subscribe(goals => {
      goals.sort(this.sortGoalsByPriority);
      for (let i = 0; i < goals.length; i = i + 1) {
        if (goals[i].parentid == '0') {
          this.goals.push(goals[i]);
        }
      }
    });
  }

  download(){
    console.log("it works");
  }
}
