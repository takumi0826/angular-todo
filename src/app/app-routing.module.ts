import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { EditComponent } from './pages/edit/edit.component'
import { AuthGuard } from './guard/auth.guard'
import { ProfileComponent } from './pages/profile/profile.component'
import { SignInComponent } from './pages/sign-in/sign-in.component'
import { SignOutComponent } from './pages/sign-out/sign-out.component'
import { SignUpComponent } from './pages/sign-up/sign-up.component'
import { TodoComponent } from './pages/todo/todo.component'


const routes: Routes = [
  { path: 'todo', component: TodoComponent, canActivate: [AuthGuard] },
  { path: 'edit/:id', component: EditComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-out', component: SignOutComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
