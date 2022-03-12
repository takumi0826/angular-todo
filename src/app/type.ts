export type TaskInfo = {
  id: number;
  title: string;
  content?: string;
  isDone: boolean;
};

export type TaskItem = Pick<TaskInfo, 'title' | 'isDone'>;

export type Login = {
  userId: string;
  password: string;
};

export type DialogData = {
  message: string;
};

export type JwtToken = {
  access_token: string;
};

export type UserInfo = { userId: string; userName: string };

export type UserTask = {
  userInfo: UserInfo;
  taskInfo: TaskInfo[];
};
