import { Component, Input, Output, EventEmitter } from '@angular/core';
import {type Task } from './task.model';
import { CardComponent } from "../../common/card/card.component";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task!: Task;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask () {
    this.complete.emit(this.task.id);
  }
}
