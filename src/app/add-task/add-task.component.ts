import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Task } from '../models/task.model';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  task = new Task("", "", "");

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  addTask(){
    const requestID = this.route.snapshot.paramMap.get('requestID')
    this.taskService.addTask(requestID, this.task).subscribe();
  }

}
