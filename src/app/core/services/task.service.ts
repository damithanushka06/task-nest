import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TaskDto } from '../models/task-dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasksKey = 'tasknest_tasks';
  private tasksSubject = new BehaviorSubject<TaskDto[]>(this.getTasks());
  tasks$ = this.tasksSubject.asObservable();

  getTasks(): TaskDto[] {
    const data = localStorage.getItem(this.tasksKey);
    return data ? JSON.parse(data) : [];
  }

  saveTasks(tasks: TaskDto[]): void {
    localStorage.setItem(this.tasksKey, JSON.stringify(tasks));
    this.tasksSubject.next(tasks);
  }

  addTask(title: string, description: string): void {
    const tasks = this.getTasks();
    tasks.push({
      id: uuidv4(),
      title,
      description,
      status: 'todo',
      createdAt: new Date(),
    });
    this.saveTasks(tasks);
  }

  updateTask(task: TaskDto): void {
    const tasks = this.getTasks().map(t => (t.id === task.id ? task : t));
    this.saveTasks(tasks);
  }

  deleteTask(id: string): void {
    const tasks = this.getTasks().filter(t => t.id !== id);
    this.saveTasks(tasks);
  }
}
