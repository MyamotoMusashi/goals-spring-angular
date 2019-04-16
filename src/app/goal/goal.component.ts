import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GoalService } from '../goal.service';
import { GoalsService } from '../goals.service';
import { SortablejsOptions } from 'angular-sortablejs';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goal = {};
  tasks = [];
  

  constructor(private goalService: GoalService, private goalsService: GoalsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.goalService.getGoalByID(id).subscribe(goal => {
      this.goal = goal;
    });
    this.goalsService.getAllGoals().subscribe(goals => {
      for(let i = 0; i < goals.length; i=i+1){
        if (goals[i].parentid == id){
          this.tasks.push(goals[i]);
        }
      }
    })
  }

  ngOnDestroy(){
    console.log(this.goal);
  }

  eventOptions: SortablejsOptions = {
    onUpdate: () => {
      
    }
};

  deleteGoalByID() {
    const id = this.route.snapshot.paramMap.get('id')
    this.goalService.deleteGoalByID(id).subscribe(() => {
      this.router.navigateByUrl('/goals')
    })
  }

}
