import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { EditComponent } from './pages/edit/edit.component'
import { AuthGuard } from './guard/auth.guard'
import { ProfileComponent } from './pages/profile/profile.component'
import { SignOutComponent } from './parts/sign-out/sign-out.component'
import { TodoComponent } from './pages/todo/todo.component'
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { TopComponent } from './pages/top/top.component'

const routes: Routes = [
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'todo', component: TodoComponent, canActivate: [AuthGuard] },
      { path: 'edit/:id', component: EditComponent, canActivate: [AuthGuard] },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  { path: '', component: TopComponent },
  { path: '**', redirectTo: '' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
