import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDropList, CdkDrag, DragDropModule, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TaskDto, TaskStatus } from '../../../core/models/task-dto';
import { TaskService } from '../../../core/services/task.service';
import { TaskCardComponent } from '../task-card/task-card.component';

@Component({
  selector: 'app-task-column',
  standalone: true,
  imports: [
    CommonModule,
    DragDropModule,
    TaskCardComponent
  ],
  templateUrl: './task-column.component.html',
  styleUrls: ['./task-column.component.scss']
})
export class TaskColumnComponent implements OnInit {
  @Input() status!: TaskStatus;
  @Input() title!: string;

  tasks: TaskDto[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.tasks = [];
    this.tasks = this.taskService.getTasks().filter(t => t.status === this.status);
  }

  onTaskDrop(event: CdkDragDrop<TaskDto[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
      this.taskService.saveTasks(this.tasks);
    } else {
      const task = event.previousContainer.data[event.previousIndex];
      task.status = this.status;
      this.taskService.updateTask(task);

      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
