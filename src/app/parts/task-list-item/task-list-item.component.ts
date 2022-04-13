import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { TaskInfo } from 'src/app/model/type'

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.scss'],
})
export class TaskListItemComponent {
  @Input() task!: TaskInfo
  @Input() isCompleted!: boolean
  @Output() goEdit = new EventEmitter<string>()
  @Output() doneTask = new EventEmitter<{ id: number; isDone: boolean }>()
  @Output() deleteTask = new EventEmitter<number>()

  constructor() {

  }

  onGoEdit(val: string) {
    this.goEdit.emit(val)
  }

  onDoneTask(id: number, isDone: boolean): void {
    this.doneTask.emit({ id, isDone })
  }

  onDeleteTask(id: number) {
    this.deleteTask.emit(id)
  }
}
