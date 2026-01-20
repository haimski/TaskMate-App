import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { type NewTaskData } from '../task/task.model'

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>(); // void means no data will pass
  @Output() add = new EventEmitter<NewTaskData>();
  titleInput = '';
  summaryInput = '';
  dateInput = '';

  onCancel() {
    this.cancel.emit(); // emit is called everytime i want to publish to parents
  }

  onSubmit() {
    this.add.emit({
      title: this.titleInput,
      summary: this.summaryInput,
      date: this.dateInput
    });
  }
}
