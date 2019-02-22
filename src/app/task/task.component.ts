import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  task = {};

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
	const requestID = this.route.snapshot.paramMap.get('requestID');
	const taskID = this.route.snapshot.paramMap.get('taskID');
	this.taskService.getTaskByID(requestID,taskID).subscribe(task => {
		this.task = task;
	})
  }

  deleteTaskByID(){
    const requestID = this.route.snapshot.paramMap.get('requestID');
    const taskID = this.route.snapshot.paramMap.get('taskID');
    this.taskService.deleteTaskByID(requestID, taskID).subscribe(() => {
      this.router.navigate(['../../']);
    })
  }

  completeTaskByID(){
    const requestID = this.route.snapshot.paramMap.get('requestID');
    const taskID = this.route.snapshot.paramMap.get('taskID');
    this.taskService.completeTaskByID(requestID, taskID).subscribe(() => {
      this.router.navigate(['../../']);
    })
  }
}