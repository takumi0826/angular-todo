import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { ActivatedRoute, Router } from '@angular/router'
import { Url } from 'src/app/constant/url-const'
import { ModalComponent } from 'src/app/modal/error/modal.component'
import { TaskInfo } from 'src/app/model/type'

import { TaskService } from '../../services/task.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  routeId: number = 0
  taskInfo: TaskInfo = {
    id: 0,
    title: '',
    content: undefined,
    isDone: false,
  }

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getHero()
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.routeId = id
    this.taskService.load(id).subscribe((res) => {
      this.taskInfo = res
    })
  }

  edit(task: TaskInfo) {
    if (!task.title.trim()) {
      return
    }
    this.taskService.update(task).subscribe((res) => {
      this.router.navigate([Url.TODO])
    })
  }

  goTodo() {
    this.router.navigate([Url.TODO])
  }
}
