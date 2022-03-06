export type TaskResponseDto = {
  id: number;
  title: string;
  content: string;
  isDone: boolean;
};

export type SideMenu = {
  name: string;
  link: string;
};

export type User = {
  mailAddress: string;
  password: string;
};
