export type TaskResponse = {
  id: number
  userId: number
  title: string
  content: string
  isDone: boolean
}

export type Task = {
  id: number
  title: string
  content?: string
  isDone: boolean
}

export type SideMenu = {
  name: string
  link: string
}

export type CreateUser = {
  name: string
  mailAddress: string
  password: string
}

export type Login = {
  userId: string
  password: string
}

export type DialogData = {
  message: string
}

export type JwtToken = {
  access_token: string
  user: UserInfo
}

export type User = {
  mailAddress: string
  password: string
}

export type UserInfo = { userId: string; userName: string }

export type UserTask = {
  userInfo: UserInfo
  taskInfo: Task[]
}
