import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditComponent } from './edit/edit.component';
import { ProfileComponent } from './profile/profile.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: '', component: TodoComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
