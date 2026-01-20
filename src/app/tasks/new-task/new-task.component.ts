import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { type NewTaskData } from '../task/task.model'
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string; 
  @Output() cancel = new EventEmitter<void>(); // void means no data will pass
  @Output() add = new EventEmitter<NewTaskData>();
  @Output() close = new EventEmitter<void>();
  titleInput = '';
  summaryInput = '';
  dateInput = '';
  private tasksService = inject(TasksService);
  
  // constructor(private tasksService: TasksService) {}

  onCancel() {
    this.close.emit(); // emit is called everytime i want to publish to parents
  }

  onSubmit() {
    this.tasksService.addTaskData({
      title: this.titleInput,
      summary: this.summaryInput,
      date: this.dateInput
    }, 
      this.userId
    );
    this.close.emit();
  }
  
}
