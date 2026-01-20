import { Component, Input, Output, EventEmitter } from '@angular/core';
import {type Task } from './task.model';
import { CardComponent } from "../../common/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task!: Task;
  
  constructor(private tasksService: TasksService) {}

  onCompleteTask () {
    this.tasksService.removeTask(this.task.id);
  }
}
