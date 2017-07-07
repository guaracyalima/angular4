import {Component} from '@angular/core';
import { Task } from '../task';
import {TaskService} from "../task.service";
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks: Array<Task>;
  constructor(private taskService: TaskService) {
    this.taskService.tasks.push(
        {
          name: 'Fuck',
          value: 666,
          date_launch: '2017-07-21'
        }
    );
    this.tasks = this.taskService.tasks;
  }
}
