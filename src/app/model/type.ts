export type TaskResponseDto = {
  id: number
  title: string
  content: string
  isDone: boolean
}

export type SideMenu = {
  name: string
  link: string
}

export type User = {
  mailAddress: string
  password: string
}

export type CreateUser = {
  name: string
  mailAddress: string
  password: string
}

export type TaskInfo = {
  id: number
  title: string
  content?: string
  isDone: boolean
}

export type TaskItem = Pick<TaskInfo, 'title' | 'isDone'>

export type Login = {
  userId: string
  password: string
}

export type DialogData = {
  message: string
}

export type JwtToken = {
  access_token: string
}

export type UserInfo = { userId: string; userName: string }

export type UserTask = {
  userInfo: UserInfo
  taskInfo: TaskInfo[]
}
