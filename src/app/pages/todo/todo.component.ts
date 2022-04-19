import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from 'src/app/services/auth.service'
import { TaskService } from 'src/app/services/task.service'
import { TaskInfo } from 'src/app/model/type'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { filter } from 'rxjs/operators'
import { loadAll } from 'src/app/store/task/task.actions'
import * as TaskSelectors from 'src/app/store/task/task.selectors'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  completeTask: TaskInfo[] = []
  incompleteTask: TaskInfo[] = []
  task$ = this.store.pipe(select(TaskSelectors.getTasks))
  taskTitle: string = ''

  constructor(
    private taskService: TaskService,
    private router: Router,
    private auth: AuthService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.loadAll()
  }

  loadAll(): void {
    this.store.dispatch(loadAll())
  }

  addTask(title: string): void {
    if (!title.trim()) return
    const param = {
      title,
      content: '',
      isDone: false,
    }
    this.taskService.create(param).subscribe((res) => {
      this.taskTitle = ''
      this.loadAll()
    })
  }

  update(): void {}

  onDeleteTask(id: number): void {
    this.taskService.delete(id).subscribe((res) => {
      this.loadAll()
    })
  }

  onDoneTask($event: { id: number; isDone: boolean }) {
    const { id, isDone } = $event
    this.taskService.doneTask(id, isDone).subscribe((res) => {
      this.loadAll()
    })
  }

  onGoEdit(val: string) {
    this.router.navigateByUrl(val)
  }
}
