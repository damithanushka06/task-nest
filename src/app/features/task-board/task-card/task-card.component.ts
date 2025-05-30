import { Component, Input } from '@angular/core';
import {DatePipe} from '@angular/common';
import {TaskDto} from '../../../core/models/task-dto';

@Component({
  selector: 'app-task-card',
  standalone: true,
  templateUrl: './task-card.component.html',
  imports: [
    DatePipe
  ],
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent {
  @Input() task!: TaskDto;
}
