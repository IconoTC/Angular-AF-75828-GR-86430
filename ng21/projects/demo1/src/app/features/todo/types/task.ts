export interface Task {
  id: number;
  title: string;
  owner: string;
  isCompleted: boolean;
}

export interface TaskDTO {
  title: string;
  owner: string;
}
