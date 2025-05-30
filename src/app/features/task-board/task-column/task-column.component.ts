import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCardComponent } from '../task-card/task-card.component';
import {TaskDto, TaskStatus} from '../../../core/models/task-dto';
import {TaskService} from '../../../core/services/task.service';


@Component({
  selector: 'app-task-column',
  standalone: true,
  imports: [CommonModule, TaskCardComponent],
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
    this.tasks = this.taskService.getTasks().filter(t => t.status === this.status);
  }
}
