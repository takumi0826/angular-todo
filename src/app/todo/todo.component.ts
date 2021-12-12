import { Component, OnInit } from '@angular/core';

import { TaskService } from '../task.service';
import { TaskInfo, TaskItem } from '../type';
import { TaskResponseDto } from '../type/response/type';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  taskInfo: TaskInfo[] = [];
  taskTitle: string = ''

  constructor(private http: TaskService) {}

  ngOnInit(): void {
    this.getTask();
  }

  getTask(): void {
    this.http.getTask().subscribe((res) => {
      this.taskInfo = res;
    });
  }

  addTask(title: string): void {
    if(!title.trim()) return
    this.http.createTask({ title, done: false }).subscribe((res) => {
      if (res === 1) {
        this.taskTitle = ''
        this.getTask();
      }
    });
  }

  updateTask(): void {}

  deleteTask(id: number): void {
    this.http.deleteTask(id).subscribe((res) => {
      if (res === 1) {
        this.getTask();
      }
    });
  }
}
