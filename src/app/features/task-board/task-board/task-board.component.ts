import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TaskColumnComponent} from '../task-column/task-column.component';
import {ModalComponent} from '../../../shared/modal/modal/modal.component';


@Component({
  selector: 'app-task-board',
  standalone: true,
  imports: [CommonModule, TaskColumnComponent, ModalComponent],
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss']
})
export class TaskBoardComponent {
  isModalOpen = false;

  openAddTaskModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
