import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../../../shared/modal/modal/modal.component';
import { TaskService } from '../../../core/services/task.service';
import {TaskColumnComponent} from '../task-column/task-column.component';

@Component({
  selector: 'app-task-board',
  standalone: true,
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss'],
  imports: [
    NgIf,
    FormsModule,
    ModalComponent,
    TaskColumnComponent
  ]
})
export class TaskBoardComponent {
  isModalOpen = false;

  constructor(public taskService: TaskService) {}

  openAddTaskModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  submitTask(form: any) {
    if (form.valid) {
      const { title, description } = form.value;
      this.taskService.addTask(title, description);
      this.closeModal();
      form.resetForm();
    }
  }
}
