import { APP_INITIALIZER, Inject, NgModule } from '@angular/core'
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
import { SignInComponent } from './parts/sign-in/sign-in.component'
import { SignOutComponent } from './parts/sign-out/sign-out.component'
import { TodoComponent } from './pages/todo/todo.component'
import { HeaderComponent } from './parts/header/header.component'
import { LoadingComponent } from './parts/loading/loading.component'
import { SideMenuComponent } from './parts/side-menu/side-menu.component'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AlertDirective } from './directive/alert.directive'
import { TaskListComponent } from './parts/task-list/task-list.component'
import { TaskListItemComponent } from './parts/task-list-item/task-list-item.component'
import { AppStoreModule } from './store/app/app-store.module'
import { RequestInterceptor } from './interceptor/request.interceptor'
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { SingleClickDirective } from './directive/single-click.directive'
import { TopComponent } from './pages/top/top.component'
import { SignUpComponent } from './parts/sign-up/sign-up.component'
import { appInitializer } from './app-init/app-initializer'
import { AuthService } from './services/auth.service'
import { Store } from '@ngrx/store'

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
    DashboardComponent,
    SingleClickDirective,
    TopComponent,
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
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      multi: true,
      deps: [[new Inject(Store)]],
    },
    AppStoreModule,
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
