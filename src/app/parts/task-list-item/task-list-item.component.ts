import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Url } from 'src/app/constant/url-const'
import { Task } from 'src/app/model/type'

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.scss'],
})
export class TaskListItemComponent {
  @Input() task!: Task
  @Input() isLoading!: boolean | null
  @Input() isCompleted!: boolean
  @Output() goEdit = new EventEmitter<string>()
  @Output() doneTask = new EventEmitter<{ id: number; isDone: boolean }>()
  @Output() deleteTask = new EventEmitter<number>()

  constructor() {}

  onGoEdit(id: number) {
    this.goEdit.emit(`${Url.EDIT}/${id}`)
  }

  onDoneTask(id: number, isDone: boolean): void {
    this.doneTask.emit({ id, isDone })
  }

  onDeleteTask(id: number) {
    this.deleteTask.emit(id)
  }
}
