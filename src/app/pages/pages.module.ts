import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EditComponent } from './components/edit/edit.component'
import { ProfileComponent } from './components/profile/profile.component'
import { SignInComponent } from './components/sign-in/sign-in.component'
import { SignOutComponent } from './components/sign-out/sign-out.component'
import { SignUpComponent } from './components/sign-up/sign-up.component'
import { TodoComponent } from './components/todo/todo.component'
import { MaterialModule } from '../material/material.module'
import { CoreModule } from '../core/core.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { ModalComponent } from './components/modal/modal.component'
import { MyCounterComponent } from './my-counter/my-counter.component';
import { RxjsTestComponent } from './components/rxjs-test/rxjs-test.component'

@NgModule({
  declarations: [
    EditComponent,
    ProfileComponent,
    SignInComponent,
    SignOutComponent,
    SignUpComponent,
    TodoComponent,
    ModalComponent,
    MyCounterComponent,
    RxjsTestComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CoreModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [
    EditComponent,
    ProfileComponent,
    SignInComponent,
    SignOutComponent,
    SignUpComponent,
    TodoComponent,
    ModalComponent,
    MyCounterComponent,
  ],
})
export class PagesModule {}
