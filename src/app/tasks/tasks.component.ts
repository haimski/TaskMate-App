import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from './new-task/new-task.component'; 
import { TaskData } from 'zone.js/lib/zone-impl';
import { NewTaskData } from './task/task.model';
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
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
    {
      id: 't4',
      userId: 'u2',
      title: 'Design logo',
      summary: 'Create a modern logo for the new project.',
      dueDate: '2024-07-10',
    },
    {
      id: 't5',
      userId: 'u4',
      title: 'Write documentation',
      summary: 'Document all API endpoints and usage examples.',
      dueDate: '2024-08-01',
    },
    {
      id: 't6',
      userId: 'u5',
      title: 'Setup CI/CD pipeline',
      summary: 'Configure automated build and deployment pipeline.',
      dueDate: '2024-09-15',
    },
    {
      id: 't7',
      userId: 'u6',
      title: 'Conduct user testing',
      summary: 'Organize and run usability tests with real users.',
      dueDate: '2024-10-05',
    },
    {
      id: 't8',
      userId: 'u1',
      title: 'Refactor codebase',
      summary: 'Improve code quality and maintainability.',
      dueDate: '2024-11-20',
    },
    {
      id: 't9',
      userId: 'u2',
      title: 'Optimize performance',
      summary: 'Analyze and optimize application performance.',
      dueDate: '2024-12-15',
    },
    {
      id: 't10',
      userId: 'u4',
      title: 'Plan marketing campaign',
      summary: 'Develop a marketing strategy for product launch.',
      dueDate: '2025-01-10',
    },
  ]
  get selectedUserTasks() {
    return this.tasks.filter((task => task.userId === this.userId))
  }

  onCompleteTask (id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  onStartAddTask() {
    this.isAddTask = true;
  }

  onCancelAddTask() {
    this.isAddTask = false;
  }

  onAddTask(taskData: NewTaskData) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
    })

    this.isAddTask = false;
  }
}
