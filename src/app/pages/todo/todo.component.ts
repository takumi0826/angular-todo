import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from 'src/app/services/auth.service'
import { TaskService } from 'src/app/services/task.service'
import { TaskInfo } from 'src/app/model/type'
import { Store } from '@ngrx/store'
import { update } from 'src/app/store/task/task.actions'


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  completeTask: TaskInfo[] = []
  incompleteTask: TaskInfo[] = []
  taskTitle: string = ''

  constructor(
    private http: TaskService,
    private router: Router,
    private auth: AuthService,
    private store: Store<{task: TaskInfo[]}>
  ) {
    this.store.select('task').subscribe(task => {
      this.completeTask = task.filter((v) => v.isDone)
      this.incompleteTask = task.filter((v) => !v.isDone)
    })
  }

  ngOnInit(): void {

  }

  getTask(): void {
    this.http.getTask().subscribe((task) => {
      this.completeTask = task.filter((v) => v.isDone)
      this.incompleteTask = task.filter((v) => !v.isDone)
      this.store.dispatch(update({task}))
    })
  }

  addTask(title: string): void {
    if (!title.trim()) return
    const param = {
      title,
      content: '',
      isDone: false,
    }
    this.http.createTask(param).subscribe((res) => {
      this.taskTitle = ''
      this.getTask()
    })
  }

  updateTask(): void {}

  deleteTask(id: number): void {
    this.http.deleteTask(id).subscribe((res) => {
      this.getTask()
    })
  }

  doneTask(id: number, isDone: boolean) {
    this.http.doneTask(id, isDone).subscribe((res) => {
      this.getTask()
    })
  }

  routeLink(url: string) {
    this.router.navigateByUrl(url)
  }
}
