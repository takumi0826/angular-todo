import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditComponent } from './edit/edit.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material/material.module';
import { ModalComponent } from './modal/modal.component';
import { ProfileComponent } from './profile/profile.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    EditComponent,
    ModalComponent,
    HeaderComponent,
    SidenavComponent,
    SideMenuComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
