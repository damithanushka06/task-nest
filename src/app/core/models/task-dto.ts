export type TaskStatus = 'todo' | 'in-progress' | 'done';

export interface TaskDto {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  createdAt: Date;
}
