export type TaskInfo = {
  id: number;
  title: string;
  done: boolean;
};

export type TaskItem = Pick<TaskInfo, 'title' | 'done'>;

export type Login = {
  userId: string;
  password: string;
};

