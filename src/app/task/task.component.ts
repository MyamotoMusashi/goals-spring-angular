import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  task = {};

  constructor(private taskService: TaskService, private route: ActivatedRoute) { }

  ngOnInit() {
	const requestID = this.route.snapshot.paramMap.get('requestID');
	const taskID = this.route.snapshot.paramMap.get('taskID');
	console.log(requestID);
	console.log(taskID);
	console.log(this.taskService);
	this.taskService.getTaskByID(requestID,taskID).subscribe(task => {
		this.task = task;
	})
  }
}