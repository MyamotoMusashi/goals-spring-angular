import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Goal } from '../models/goal.model';
import { GoalService } from '../goal.service';

@Component({
  selector: 'app-goals-list',
  templateUrl: './goals-list.component.html',
  styleUrls: ['./goals-list.component.css']
})
export class GoalsListComponent implements OnInit {
  
  @Input()
  goals = [];

  @Output()
  refreshGoalList: EventEmitter<boolean> = new EventEmitter<boolean>()


  constructor(private goalService: GoalService) { }

  ngOnInit() {
    console.log(this.goals);
  }

  completeGoal(event: any, goal: Goal){
    let id: string = goal.id;
    this.goalService.editGoalByID(id, goal).subscribe();
  }

  addToDaily(goal: Goal){
    if(goal.isDaily == true){
      goal.isDaily = false;
    }
    else if(goal.isDaily == false || goal.isDaily == null){
      goal.isDaily = true;
    }

    let id: string = goal.id;
    this.goalService.editGoalByID(id, goal).subscribe(() => {
      this.refreshGoalList.emit(true);
    }); ;
  }

  changePriority(goal: Goal){
    let id: string = goal.id;
    this.goalService.editGoalByID(id, goal).subscribe(() => {
      this.refreshGoalList.emit(true);
    }); 
  }


}