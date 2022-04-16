import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from 'src/app/services/auth.service'
import { TaskService } from 'src/app/services/task.service'
import { TaskInfo } from 'src/app/model/type'
import { select, Store } from '@ngrx/store'
import { update } from 'src/app/store/task/task.actions'
import { Observable } from 'rxjs'
import { filter } from 'rxjs/operators'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  completeTask: TaskInfo[] = []
  incompleteTask: TaskInfo[] = []
  task$ = this.store.pipe(select('task'))
  taskTitle: string = ''

  constructor(
    private http: TaskService,
    private router: Router,
    private auth: AuthService,
    private store: Store<{ task: TaskInfo[] }>
  ) {}

  ngOnInit(): void {
    const isFirst = localStorage.getItem('isFirstFlg') === '0'
    if (isFirst) {
      console.log('ngOninit')
      this.getTask()
      localStorage.setItem('isFirstFlg', '1')
    }
  }

  getTask(): void {
    this.http.getTask().subscribe((task) => {
      this.store.dispatch(update({ task }))
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

  onDeleteTask(id: number): void {
    this.http.deleteTask(id).subscribe((res) => {
      this.getTask()
    })
  }

  onDoneTask($event: { id: number; isDone: boolean }) {
    const { id, isDone } = $event
    this.http.doneTask(id, isDone).subscribe((res) => {
      this.getTask()
    })
  }

  onGoEdit(val: string) {
    this.router.navigateByUrl(val)
  }
}
