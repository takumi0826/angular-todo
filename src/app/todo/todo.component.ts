import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { TaskService } from '../task.service';
import { TaskInfo, TaskItem, UserInfo } from '../type';
import { TaskResponseDto } from '../type/response/type';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  completeTask: TaskInfo[] = [];
  incompleteTask: TaskInfo[] = [];
  taskTitle: string = '';

  constructor(
    private http: TaskService,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.getTask();
  }

  getTask(): void {
    this.http.getTask().subscribe((res) => {
      this.completeTask = res.filter((v) => v.isDone);
      this.incompleteTask = res.filter((v) => !v.isDone);
    });
  }

  addTask(title: string): void {
    if (!title.trim()) return;
    const param = {
      title,
      content: '',
      isDone: false,
    };
    this.http.createTask(param).subscribe(
      (res) => {
        this.taskTitle = '';
        this.getTask();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateTask(): void {}

  deleteTask(id: number): void {
    this.http.deleteTask(id).subscribe(
      (res) => {
        this.getTask();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  doneTask(id: number, isDone: boolean) {
    this.http.doneTask(id, isDone).subscribe(
      (res) => {
        this.getTask();
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
