import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';
import type { NewTaskData } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input ({required: true}) userId!: string;
  @Input ({required: true}) name!: string;
  @Input ({required: true}) isAddTask!: boolean;
  // tasksService = new TasksService(); // this method will not allow using in with sieblings and children  

  constructor(private tasksService: TasksService) {} // this method will allow to use data withy sieblings and children
  
  get selectedUserTasks() {
    return this.tasksService.getUserTasksData(this.userId); 
  }

  onStartAddTask() {
    this.isAddTask = true;
  }

  onCloseAddTask() {
    this.isAddTask = false;
  }

  onAddTask(taskData: NewTaskData) {
    this.tasksService.addTaskData(taskData, this.userId);
  
    this.isAddTask = false;
  }
}
