import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService} from '../task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  task = {};

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const requestID = this.route.snapshot.paramMap.get('requestID');
    const taskID = this.route.snapshot.paramMap.get('taskID');
    this.taskService.getTaskByID(requestID,taskID).subscribe(task => {
    this.task = task;
    })
  }

  editTaskByID() {
    const requestID = this.route.snapshot.paramMap.get('requestID');
    const taskID = this.route.snapshot.paramMap.get('taskID');
    this.taskService.editTaskByID(requestID, taskID, this.task).subscribe(() => {
      this.router.navigate([`/requests/${requestID}/tasks/${taskID}`])
    });
  }

}

