import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCardComponent } from '../task-card/task-card.component';
import { TaskDto, TaskStatus } from '../../../core/models/task-dto';
import { TaskService } from '../../../core/services/task.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task-column',
  standalone: true,
  imports: [CommonModule, TaskCardComponent],
  templateUrl: './task-column.component.html',
  styleUrls: ['./task-column.component.scss'],
})
export class TaskColumnComponent implements OnInit, OnDestroy {
  @Input() status!: TaskStatus;
  @Input() title!: string;

  tasks: TaskDto[] = [];
  private subscription!: Subscription;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    // Subscribe to task updates and filter by column status
    this.subscription = this.taskService.tasks$.subscribe(allTasks => {
      this.tasks = allTasks.filter(t => t.status === this.status);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); // prevent memory leaks
  }
}
