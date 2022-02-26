import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TaskService } from '../task.service';
import { TaskInfo } from '../type';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  routeId: number = 0;
  taskInfo: TaskInfo = {
    id: 0,
    title: '',
    content: undefined,
    isDone: false,
  };

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.routeId = id;
    this.taskService.getOneTask(id).subscribe((res) => {
      this.taskInfo = res;
    });
  }

  edit(task: TaskInfo) {
    this.taskService.updateTask(task).subscribe(
      (res) => {
        this.router.navigateByUrl('/');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  routeLink(url: string) {
    this.router.navigateByUrl(url);
  }
}
