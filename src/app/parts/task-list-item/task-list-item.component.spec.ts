import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TaskListItemComponent } from './task-list-item.component'

xdescribe('CompletedListItemComponent', () => {
  let component: TaskListItemComponent
  let fixture: ComponentFixture<TaskListItemComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskListItemComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListItemComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
