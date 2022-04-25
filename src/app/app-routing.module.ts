import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { EditComponent } from './pages/edit/edit.component'
import { AuthGuard } from './guard/auth.guard'
import { ProfileComponent } from './pages/profile/profile.component'
import { SignInComponent } from './pages/sign-in/sign-in.component'
import { SignOutComponent } from './pages/sign-out/sign-out.component'
import { SignUpComponent } from './pages/sign-up/sign-up.component'
import { TodoComponent } from './pages/todo/todo.component'
import { DashboardComponent } from './pages/dashboard/dashboard.component'

const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
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
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-out', component: SignOutComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
