import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MaterialModule } from './material/material.module'
import { IsValidPipe } from './pipe/is-valid.pipe'
import { TaskModule } from './store/task/task.module'
import { ModalComponent } from './modal/error/modal.component'
import { EditComponent } from './pages/edit/edit.component'
import { ProfileComponent } from './pages/profile/profile.component'
import { SignInComponent } from './pages/sign-in/sign-in.component'
import { SignOutComponent } from './pages/sign-out/sign-out.component'
import { SignUpComponent } from './pages/sign-up/sign-up.component'
import { TodoComponent } from './pages/todo/todo.component'
import { HeaderComponent } from './parts/header/header.component'
import { LoadingComponent } from './parts/loading/loading.component'
import { SideMenuComponent } from './parts/side-menu/side-menu.component'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { AlertDirective } from './directive/alert.directive'
import { TaskListComponent } from './parts/task-list/task-list.component'
import { TaskListItemComponent } from './parts/task-list-item/task-list-item.component'
import { AppStoreModule } from './store/app/app-store.module'

@NgModule({
  declarations: [
    AppComponent,
    IsValidPipe,
    EditComponent,
    ProfileComponent,
    SignInComponent,
    SignOutComponent,
    SignUpComponent,
    TodoComponent,
    ModalComponent,
    HeaderComponent,
    LoadingComponent,
    SideMenuComponent,
    AlertDirective,
    TaskListComponent,
    TaskListItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    TaskModule,
    AppStoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
