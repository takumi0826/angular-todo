import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core'
import { TaskInfo } from 'src/app/model/type'

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnChanges {
  @Input() tasks: TaskInfo[] | null = []
  @Input() isLoading!: boolean | null
  @Input() isCompleted!: boolean
  @Output() goEdit = new EventEmitter<string>()
  @Output() doneTask = new EventEmitter<{ id: number; isDone: boolean }>()
  @Output() deleteTask = new EventEmitter<number>()

  taskInfo: TaskInfo[] = []

  constructor() {}

  ngOnChanges(): void {
    if (!this.tasks) return
    if (this.isCompleted) {
      this.tasks = this.tasks.filter((task) => task.isDone)
    } else {
      this.tasks = this.tasks.filter((task) => !task.isDone)
    }
  }
}
