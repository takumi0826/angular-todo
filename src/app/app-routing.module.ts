import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { EditComponent } from './pages/components/edit/edit.component'
import { AuthGuard } from './guard/auth.guard'
import { ProfileComponent } from './pages/components/profile/profile.component'
import { SignInComponent } from './pages/components/sign-in/sign-in.component'
import { TodoComponent } from './pages/components/todo/todo.component'
import { SignOutComponent } from './pages/components/sign-out/sign-out.component'
import { SignUpComponent } from './pages/components/sign-up/sign-up.component'

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
